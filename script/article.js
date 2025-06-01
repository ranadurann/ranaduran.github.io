document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("articlesList");

  if (!container || !Array.isArray(articles)) return;

  container.innerHTML = articles.map(article => `
    <div class="service-card">
      ${article.image ? `<img src="${article.image}" alt="${article.title}" style="width:100%; border-radius:8px; margin-bottom:15px;">` : ''}
      <h3 class="service-title">${article.title}</h3>
      <p class="service-description">${article.summary}</p>
      <a href="article.html?slug=${article.slug}" class="btn">Devamını Oku</a>
    </div>
  `).join('');
});

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const container = document.getElementById("articleContent");

  if (!slug || !container) {
    container.innerHTML = "<p>Makale bulunamadı.</p>";
    return;
  }

  const article = articles.find(a => a.slug === slug);

  if (!article) {
    container.innerHTML = "<p>Böyle bir makale bulunmamaktadır.</p>";
    return;
  }

  container.innerHTML = `
    ${article.image ? `<img src="${article.image}" alt="${article.title}" style="width:100%; border-radius:10px; margin-bottom:20px;">` : ''}
    ${article.content}
  `;
});
