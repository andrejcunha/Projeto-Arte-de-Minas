document.addEventListener('DOMContentLoaded', () => {
    // Dados dos produtos
    const products = {
        laços: [
            { id: 1, name: 'Laço de Cetim', description: 'Lacinho N°00.', price: 'R$X,XX', img: 'images/laco00.jpg' },
            { id: 2, name: 'Laço de Cetim', description: 'Lacinho N°01 Perolado.', price: 'R$X,XX', img: 'images/laco01.jpeg' },
            { id: 3, name: 'Laço de Cetim', description: 'Lacinho N°02.', price: 'R$X,XX', img: 'images/laco02.jpeg' },
            { id: 4, name: 'Laço de Cetim', description: 'Lacinho N°05.', price: 'R$X,XX', img: 'images/laco05.jpeg' },
            { id: 5, name: 'Laço de Cetim', description: 'Lacinho N°09.', price: 'R$X,XX', img: 'images/laco09.jpeg' }
        ],
        catalogo: [
            { id: 1, name: 'Laço de Cetim Cores', description: 'Lacinho N°00.', price: 'R$X,XX', img: 'images/cat 00.jpeg' },
            { id: 2, name: 'Laço de Cetim Cores', description: 'Lacinho N°01 Perolado.', price: 'R$X,XX', img: 'images/cat 01.jpeg' },
            { id: 3, name: 'Laço de Cetim Cores', description: 'Lacinho N°02.', price: 'R$X,XX', img: 'images/cat 02.jpeg' },
            { id: 4, name: 'Laço de Cetim Cores', description: 'Lacinho N°05.', price: 'R$X,XX', img: 'images/cat 05.jpeg' },
            { id: 5, name: 'Laço de Cetim Cores', description: 'Lacinho N°09.', price: 'R$X,XX', img: 'images/cat 09.jpeg' }
        ],
        florzinhas: [
            { id: 1, name: 'Florzinha de Papel', description: 'Tamanho P.', price: 'R$X,XX', img: 'images/flor P.jpeg' },
            { id: 2, name: 'Florzinha de Papel', description: 'Tamanho M.', price: 'R$X,XX', img: 'images/flor M.jpeg' },
            { id: 3, name: 'Florzinha de Papel', description: 'Tamanhos P M G.', price: 'R$X,XX', img: 'images/flor PGM.jpeg' }
        ],
        borboletinhas: [
            { id: 1, name: 'Borboletinha de Papel', description: 'Borboletinha Amarela.', price: 'R$X,XX', img: 'images/borb amarela.jpeg' },
            { id: 2, name: 'Borboletinha de Papel', description: 'Borboletinha Azul Clara.', price: 'R$X,XX', img: 'images/borb azul claro.jpeg' },
            { id: 3, name: 'Borboletinha de Papel', description: 'Borboletinha Branca.', price: 'R$X,XX', img: 'images/borb branca.jpeg' },
            { id: 4, name: 'Borboletinha de Papel', description: 'Borboletinha Preta.', price: 'R$X,XX', img: 'images/borb preta.jpeg' },
            { id: 5, name: 'Borboletinha de Papel', description: 'Borboletinha Rosa Bebê.', price: 'R$X,XX', img: 'images/borb rosa bebe.jpeg' },
            { id: 6, name: 'Borboletinha de Papel', description: 'Borboletinha Rosa.', price: 'R$X,XX', img: 'images/borb rosa.jpeg' },
            { id: 7, name: 'Borboletinha de Papel', description: 'Borboletinha Roxa.', price: 'R$X,XX', img: 'images/borb roxa.jpeg' },
            { id: 8, name: 'Borboletinha de Papel', description: 'Borboletinha Salmão.', price: 'R$X,XX', img: 'images/borb salmao.jpeg' },
            { id: 9, name: 'Borboletinha de Papel', description: 'Borboletinha Verde.', price: 'R$X,XX', img: 'images/borb verde.jpeg' },
            { id: 10, name: 'Borboletinha de Papel', description: 'Borboletinha Laranja.', price: 'R$X,XX', img: 'images/borb verm escuro.jpeg' },
            { id: 11, name: 'Borboletinha de Papel', description: 'Borboletinha Vermelha.', price: 'R$X,XX', img: 'images/borb vermelha.jpeg' }
        ],
    };

    // Função para carregar produtos
    function loadProducts(category) {
        console.log(`Carregando produtos da categoria: ${category}`); // Verificar no console
        const container = document.querySelector('#produtos');
        container.innerHTML = ''; // Limpa produtos existentes

        if (products[category]) {
            products[category].forEach(product => {
                const productItem = document.createElement('li');
                productItem.classList.add('produtos__lista__item');

                productItem.innerHTML = `
                    <div class="produtos__lista__item__conteudo">
                        <img src="${product.img}" alt="${product.name}" class="product-thumbnail">
                        <div class="produtos__lista__item__conteudo__informacoes">
                            <h3>${product.name}</h3>
                            <p>${product.description}</p>
                            <h4>${product.price}</h4>
                        </div>
                    </div>
                `;

                productItem.querySelector('img').addEventListener('click', () => {
                    openModal(product);
                });

                container.appendChild(productItem);
            });
        } else {
            console.log(`Categoria "${category}" não encontrada.`); // Verificar no console
        }
    }

    // Função para abrir o modal
    function openModal(product) {
        const modal = document.getElementById('productModal');
        const modalImage = document.getElementById('modalImage');
        const modalDescription = document.getElementById('modalDescription');

        modalImage.src = product.img;
        modalDescription.innerHTML = `<h3>${product.name}</h3><p>${product.description}</p><h4>${product.price}</h4>`;

        modal.style.display = 'block';
    }

    // Função para fechar o modal
    document.querySelector('.close').addEventListener('click', () => {
        document.getElementById('productModal').style.display = 'none';
    });

    // Verificar se estamos na página de catálogo
    if (window.location.pathname.includes('catalogo.html')) {
        const initialCategory = 'laços'; // Defina a categoria inicial como necessário
        loadProducts(initialCategory);

        // Adicionar ouvintes de eventos para os botões
        document.getElementById('btnLacos').addEventListener('click', () => loadProducts('laços'));
        document.getElementById('btnCatalogo').addEventListener('click', () => loadProducts('catalogo'));
        document.getElementById('btnFlorzinhas').addEventListener('click', () => loadProducts('florzinhas'));
        document.getElementById('btnBorboletinhas').addEventListener('click', () => loadProducts('borboletinhas'));
    }

    // Alternar o menu no mobile
    const menuButton = document.getElementById('menu-button');
    const navMenu = document.getElementById('nav-menu');

    if (menuButton && navMenu) {
        menuButton.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    } else {
        console.error('Menu button or nav menu not found');
    }
    });

    // Tornar a função loadProducts globalmente acessível
    window.loadProducts = loadProducts;
});
