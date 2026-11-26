const fVer = "10.12.2";
const fBase = `https://gstatic.com{fVer}/`;

const { initializeApp } = await import(fBase + "firebase-app.js");
const { getAuth } = await import(fBase + "firebase-auth.js");
const { getFirestore } = await import(fBase + "firebase-firestore.js");

const firebaseConfig = {
  apiKey: "AIzaSyDX4SEp17uvZ1NWdjFMDEYDcUmExvSTyZM",
  authDomain: "://firebaseapp.com",
  projectId: "divulga-sound-cc7b1",
  storageBucket: "divulga-sound-cc7b1.firebasestorage.app",
  messagingSenderId: "594085286109",
  appId: "1:594085286109:web:216dd45d231bdedd509db41"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const SUPER_ADMIN_EMAIL = "adriandejesusvelho@gmail.com";
export const IMGBB_API_KEY = "fa874f6c1069d534f39775569b53d096";

export async function uploadImagemImgBB(file) {
  if (!file) throw new Error("Selecione uma imagem.");
  if (file.size > 5 * 1024 * 1024) throw new Error("A imagem deve ter no máximo 5MB.");
  if (!file.type.startsWith("image/")) throw new Error("Envie apenas arquivos de imagem.");

  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch(`https://imgbb.com{IMGBB_API_KEY}`, {
    method: "POST",
    body: formData
  });

  const data = await res.json();
  if (!data.success) throw new Error("Falha ao enviar imagem.");
  return data.data.url;
}
