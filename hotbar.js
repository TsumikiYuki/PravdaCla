(function() {
    // Cria container da navbar
    const navbar = document.createElement('nav');
    navbar.id = 'navbar';
    document.body.prepend(navbar); // adiciona no topo do body

    // CSS da navbar
    const style = document.createElement('style');
    style.textContent = `
        #navbar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background: #111;
            display: flex;
            justify-content: center;
            gap: 15px;
            padding: 12px 0;
            box-shadow: 0 2px 10px rgba(0,0,0,0.5);
            z-index: 9999;
            font-family: sans-serif;
        }
        #navbar a {
            color: #fff;
            text-decoration: none;
            padding: 6px 14px;
            border-radius: 5px;
            transition: 0.2s;
        }
        #navbar a:hover {
            background: #ff4c4c;
            box-shadow: 0 0 8px #ff4c4c;
        }
        body { padding-top: 50px; } /* espaço para não cobrir conteúdo */
    `;
    document.head.appendChild(style);

    // Lista das páginas do site
    const pages = ['index.html','staff.html','rules.html','eventos.html','celestial.html'];

    pages.forEach(page => {
        const link = document.createElement('a');
        link.href = page;
        link.textContent = page.replace('.html','');
        if(window.location.pathname.endsWith(page)) {
            link.style.color = '#ff4c4c'; // destaca página atual
            link.style.fontWeight = 'bold';
        }
        navbar.appendChild(link);
    });
})();
