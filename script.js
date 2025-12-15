fetch('articles.json')
  .then(r => r.json())
  .then(data => {
    const list = document.getElementById('list');
    list.innerHTML = '';
    data.articles.forEach(a => {
      const url = `/articles/volume-${a.volume}/issue-${a.issue}/${a.slug}.html`;
      const p = document.createElement('p');
      p.innerHTML = `<a href="${url}">${a.title}</a>`;
      list.appendChild(p);
    });
  });
