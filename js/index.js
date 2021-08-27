var transactions = [
    {
        title: "Desenvolvimento",
        price: 5000,
        currency: "BRL",
        type: "entrada",
        category: "Venda",
        date: "26/08/2021"
    },
    {
        title: "Cine Araújo",
        price: "12",
        currency: "BRL",
        type: "saída",
        category: "Lazer",
        date: "13/09/2020"
    }
]

var table = document.querySelector("#table tbody");

transactions.map(transaction => {
    var row = document.createElement("tr");

    var title = document.createElement("td");
    title.append(transaction.title);

    var price = document.createElement("td");
    var value = moneyFormat(transaction.currency, transaction.price)
    price.append(value);

    var category = document.createElement("td");
    category.append(transaction.category);

    var date = document.createElement("td");
    date.append(transaction.date);

    row.appendChild(title)
    row.appendChild(price)
    row.appendChild(category)
    row.appendChild(date)


    table.appendChild(row)


    var price = document.createElement("td");
    price.append(transaction.price);




})

var addBtn = document.querySelector("#addButton a");
var popup = document.querySelector("#popupbackground");
var closeBtn = document.querySelector("#popup form a");

addBtn.addEventListener("click", () => {
    // o que vai acontecer quando clicar no botão adicionar
    popup.style.display = "flex";
    popup.style.transition = "display 5s";
})
closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
    popup.style.transition = "display 5s";
})


function moneyFormat(currency, price) {
    var value = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: currency
    }).format(price);
    return value;

}

