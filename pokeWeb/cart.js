const body = document.querySelector("body");
body.id = "cartBody";

let pokemonCarrito = JSON.parse(localStorage.getItem("pokemon"));
console.log(pokemonCarrito);

function carrito (){


 if (!localStorage.key("pokemon")){
        const carroVacio = "El carrito está vacío";
        body.innerHTML = `<h3>${carroVacio}</h3>`;
    }else {
        pokemonCarrito.forEach((element)=>{
    

    const card = document.createElement("div");
    card.classList.add("pokemon");
    
    card.innerHTML = `
    <img src=${element.img}>
    <p>${element.name}</p>
    <p>${element.id}</p>
    <button id="buy">Clear</button>
    `;
    body.appendChild(card);
});

    };
};
carrito();

const buy = document.createElement("div");
buy.innerHTML = `<button id="buy">BUY</button>`;
body.appendChild(buy);

function clear (){

const clearButton = document.querySelectorAll("#buy");


clearButton.forEach((element)=>{
   
    element.addEventListener("click", (event)=>{
        event.preventDefault();
        console.log(event);
        
    })
})

};
clear();

    



// let pokemonCarrito = JSON.parse(localStorage.getItem("pokemon"));
// console.log(pokemonCarrito);

//  if (!localStorage.key("pokemon")){
//         const carroVacio = "El carrito está vacío";
//         body.innerHTML = `<h3>${carroVacio}</h3>`;
//     }else {
//         pokemonCarrito.forEach((element)=>{
//     console.log(element);

//     const card = document.createElement("div");
//     card.classList.add("pokemon");
    
//     card.innerHTML = `
//     <img src=${element.img}>
//     <p>${element.name}</p>
//     <p>${element.id}</p>
//     <button id="buy">Clear</button>
//     `;
//     body.appendChild(card);
// });

//     };




