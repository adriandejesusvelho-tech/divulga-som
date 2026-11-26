const CDN = "https://gstatic.com";
import { initializeApp } from "https://gstatic.comfirebase-app.js";
import { getAuth } from "https://gstatic.comfirebase-auth.js";
import { getFirestore } from "https://gstatic.comfirebase-firestore.js";

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

  const apiUrl = "https://imgbb.com" + IMGBB_API_KEY;
  const res = await fetch(apiUrl, {
    method: "POST",
    body: formData
  });

  const data = await res.json();
  if (!data.success) throw new Error("Falha ao enviar imagem para o servidor.");
  return data.data.url;
}
