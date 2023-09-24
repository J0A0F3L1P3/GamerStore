const products = [
    { nome: 'Lenovo ThinkStation P920', preço: 3456, img: '../img/products/informatica/notebook1.jpeg'},
    { nome: 'HP Z8 G4 Workstation', preço: 5499, img: '../img/products/informatica/notebook2.jpeg'},
    { nome: 'Dell Alienware Aurora R12', preço: 2100, img: '../img/products/informatica/notebook3.jpeg'}
]

let productList = '';

document.querySelector('.productList').innerHTML = productsList;

// menu de esfiha

var esfihas = [
    { nome: 'Carne', ingredientes: 'Carne moída temperada, cebola, tomate', preco: 4.90 },
    { nome: 'Frango', ingredientes: 'Frango desfiado, requeijão cremoso', preco: 4.90 },
    { nome: 'Queijo', ingredientes: 'Mussarela, catupiry', preco: 4.90 },
    { nome: 'Calabresa', ingredientes: 'Calabresa, cebola', preco: 4.90 },
    { nome: 'Portuguesa', ingredientes: 'Presunto, mussarela, cebola, ovo, azeitonas', preco: 5.90 },
    { nome: 'Vegetariana', ingredientes: 'Brócolis, palmito, milho, ervilha, tomate', preco: 5.90 },
    { nome: 'Frango-com-Catupiry', ingredientes: 'Frango desfiado, catupiry', preco: 5.90 },
    { nome: 'Escarola-com-Bacon', ingredientes: 'Escarola refogada, bacon, mussarela', preco: 5.90 },
    { nome: 'Queijo-com-Tomate-Seco', ingredientes: 'Mussarela, tomate seco', preco: 5.90 },
    { nome: 'Pepperoni', ingredientes: 'Pepperoni, mussarela', preco: 6.90 }
];

var esfihaMenuHtml = '';
var esfihaList = '';
esfihas.forEach(function (esfihas) {
    esfihaMenuHtml += `
    <div class="col-12 col-sm-12 col-md-6 col-lg-4">
        <div class="esfiha-card">
            <img src="https://via.placeholder.com/720" alt="${esfihas.nome}" class="esfiha-card-image">
            <h5 class="esfiha-card-name">${esfihas.nome}</h5>
            <p class="esfiha-card-description">${esfihas.ingredientes}</p>
            <p class="esfiha-card-price">R$ ${esfihas.preco}</p>
            <div class="option" id="${esfihas.nome}">
                <div class="display">
                    <h4 id="qtd" class="${esfihas.nome}Display">0</h4>
                </div>
                <button id="btn-plus" class="btn btn-primary" onclick="alterarQuantidade(this, 'sub')"">-</button>
                <button id="btn-sub" class="btn btn-primary" onclick="alterarQuantidade(this, 'plus')"">+</button>
            </div>
        </div>
    </div>
    `;

    esfihaList += `
    <li>
        <p class="esfiha-list-name"><span class="${esfihas.nome}List">0</span>x ${esfihas.nome}</p>
        <p>R$ ${esfihas.preco}</p>
    </li>
    `;
});

document.querySelector('#esfihaList').innerHTML = esfihaMenuHtml;
document.querySelector('#listaPedidos').innerHTML = esfihaList;