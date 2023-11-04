// Este archivo contiene el JavaScript para ambas páginas.
// scripts.js

// Datos de ejemplo para las publicaciones
const fixedPosts = [
  {
    title: 'Bienvenida a la Web de Hornillayuso',
    date: '2023-11-03',
    content: 'Estrenamos nuestro tablón de anuncios digital para mantener a todos los vecinos informados.',
    tags: ['inicio', 'bienvenida'],
    category: 'General',
    imageUrl: '/img/imagen.jpg' // Asumiendo que esta es la imagen del pueblo
  }
  // Más publicaciones fijas...
];

const latestPosts = [
  {
    title: 'Reunión del Ayuntamiento',
    date: '2023-11-02',
    content: 'Se convoca a los vecinos a la reunión del ayuntamiento el día 5 de Noviembre.',
    tags: ['reunión', 'ayuntamiento'],
    category: 'Eventos',
    imageUrl: '/img/imagen.jpg' // Asumiendo que se reutiliza la misma imagen
  }
  // Más últimas publicaciones...
];

function createPostHtml(post) {
  return `
    <article class="post">
      <img src="${post.imageUrl}" alt="${post.title}">
      <h3 class="post-title">${post.title}</h3>
      <p class="post-date">${post.date}</p>
      <div class="post-content">${post.content
