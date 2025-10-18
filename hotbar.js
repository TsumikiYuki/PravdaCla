(function() {
    // Detecta todos os arquivos HTML do site (assume que estão na mesma pasta)
    fetch(window.location.pathname)
        .then(() => {
            // Lista "manual" substituída por scan da pasta é limitada via JS puro, mas podemos fazer via links <a> no HTML
            // Alternativa: se você quer total automático, precisa gerar via server-side
            // Aqui vamos supor que você quer simplesmente pegar todos os links <a> do site
        });

    // Criar container fixo no topo
    const hotbar = document.createElement('div');
    hotbar.id = 'hotbar';
    document.body.appendChild(hotbar);

    // Estilo CSS da hotbar
    const style = document.createElement('style');
    style.textContent = `
        #hotbar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background: #111;
            display: flex;
            justify-content: center;
            gap: 20px;
            padding: 10px 0;
            box-shadow: 0 2px 10px rgba(0,0,0,0.5);
            z-index: 9999;
            font-family: sans-serif;
        }
        #hotbar a {
            color: #fff;
            text-decoration: none;
            padding: 5px 12px;
            border-radius: 6px;
            transition: 0.2s;
        }
        #hotbar a:hover {
            background: #ff4c4c;
            box-shadow: 0 0 10px #ff4c4c;
        }
        body { padding-top: 50px; } /* espaço para não cobrir conteúdo */
    `;
    document.head.appendChild(style);

    // Detecta todos os HTMLs na mesma pasta automaticamente
    fetch(window.location.pathname)
        .then(() => {
            // Como JS puro no navegador não consegue listar arquivos de pasta, vou fazer "gambiarra":
            // você só precisa colocar um array dos nomes dos HTMLs dentro de hotbar.js
            // depois posso fazer versão que detecta automaticamente via sitemap ou JSON
        });

    // Lista de páginas (exemplo, pode substituir futuramente por automático real)
    const pages = ['index.html','staff.html','rules.html','eventos.html','celestial.html'];

    pages.forEach(page => {
        const link = document.createElement('a');
        link.href = page;
        link.textContent = page.replace('.html','');
        if(window.location.pathname.endsWith(page)) {
            link.style.color = '#ff4c4c'; // destaca página atual
        }
        hotbar.appendChild(link);
    });
})();
