(function() {
    // Cria o container fixo no topo
    const hotbar = document.createElement('div');
    hotbar.id = 'hotbar';
    document.body.prepend(hotbar); // prepend = adiciona antes do body content

    // Estilo CSS
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
        #hotbar a:hover { background: #ff4c4c; box-shadow: 0 0 10px #ff4c4c; }
        body { padding-top: 50px; } /* evita que o topo cubra o conteúdo */
    `;
    document.head.appendChild(style);

    // Lista de páginas (você pode adicionar novas HTMLs aqui)
    const pages = ['index.html','staff.html','rules.html','eventos.html','celestial.html'];

    // Cria links para cada página
    pages.forEach(page => {
        const link = document.createElement('a');
        link.href = page;
        link.textContent = page.replace('.html','');
        if(window.location.pathname.endsWith(page)) {
            link.style.color = '#ff4c4c'; // destaca a página atual
        }
        hotbar.appendChild(link);
    });
})();
