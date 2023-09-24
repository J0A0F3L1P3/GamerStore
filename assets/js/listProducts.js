const products = [
    { nome: 'Lenovo ThinkStation P920', preco: 3456.00, img: '../img/products/informatica/notebook-1.jpeg' },
    { nome: 'HP Z8 G4 Workstation', preco: 5499.00, img: '../img/products/informatica/notebook-2.jpeg' },
    { nome: 'Dell Alienware Aurora R12', preco: 2100.00, img: '../img/products/informatica/notebook-3.jpeg' }
]

let productHtml = '';

// menu de esfiha
products.forEach(function (products) {
    productHtml += `
        <div class="col-6 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div class="card">
                <img src=${products.img} class="card-img-top" alt="${products.nome}">
                <div class="card-body">
                    <h5 class="card-title">${products.nome}</h5>
                    <p class="card-text">Preço: R$${products.preco}</p>
                </div>
            </div>
        </div>
        `;

    // <li>
    //     <p class="esfiha-list-name"><span class="${esfihas.nome}List">0</span>x ${esfihas.nome}</p>
    //     <p>R$ ${esfihas.preco}</p>
    // </li>
});

document.querySelector('.productList').innerHTML = productHtml;