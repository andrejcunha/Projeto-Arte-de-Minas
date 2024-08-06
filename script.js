document.addEventListener('DOMContentLoaded', () => {
    const products = {
        laços: [
            { id: 1, name: 'Laço de Cetim ', description: 'Lacinho N°00.', price: 'R$X,XX', img: 'images/laco00.jpg' },
            { id: 2, name: 'Laço de Cetim ', description: 'Lacinho N°01 Perolado.', price: 'R$X,XX', img: 'images/laco01.jpeg' },
            { id: 3, name: 'Laço de Cetim ', description: 'Lacinho N°02.', price: 'R$X,XX', img: 'images/laco02.jpeg' },
            { id: 4, name: 'Laço de Cetim ', description: 'Lacinho N°05.', price: 'R$X,XX', img: 'images/laco05.jpeg' },
            { id: 5, name: 'Laço de Cetim ', description: 'Lacinho N°09.', price: 'R$X,XX', img: 'images/laco09.jpeg' }
        ],
        catalogo: [
            { id: 1, name: 'Laço de Cetim Cores ', description: 'Lacinho N°00.', price: 'R$X,XX', img: 'images/cat 00.jpeg' },
            { id: 2, name: 'Laço de Cetim Cores ', description: 'Lacinho N°01 Perolado.', price: 'R$X,XX', img: 'images/cat 01.jpeg' },
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
            { id: 9, name: 'Borboletinha de Papel', description: 'Borboletinha Laranja.', price: 'R$X,XX', img: 'images/borb verm escuro.jpeg' },
            { id: 9, name: 'Borboletinha de Papel', description: 'Borboletinha Vermelha.', price: 'R$X,XX', img: 'images/borb vermelha.jpeg' }
         
        ],
    };

    function loadProducts(category) {
        const container = document.querySelector('#produtos');
        container.innerHTML = ''; // Limpa produtos existentes

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
    }

    function openModal(product) {
        document.getElementById('modalImage').src = product.img;
        document.getElementById('modalDescription').innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <h4>${product.price}</h4>
        `;
        document.getElementById('productModal').style.display = 'block';
    }

    function closeModal() {
        document.getElementById('productModal').style.display = 'none';
    }

    document.querySelector('.close').addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target === document.getElementById('productModal')) {
            closeModal();
        }
    });

    // Carrega os produtos da categoria inicial ao iniciar
    const initialCategory = 'laços'; // Defina a categoria inicial como necessário
    loadProducts(initialCategory);
    
    // Tornar a função loadProducts globalmente acessível
    window.loadProducts = loadProducts;
});