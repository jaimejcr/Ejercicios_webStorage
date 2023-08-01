const pokemons = [
	{ id: 1, name: 'bulbasaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
	{ id: 2, name: 'ivysaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' },
	{ id: 3, name: 'venusaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' },
	{ id: 4, name: 'charmander', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
	{ id: 5, name: 'charmeleon', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png' },
	{ id: 6, name: 'charizard', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
	{ id: 7, name: 'squirtle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
	{ id: 8, name: 'wartortle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png' },
	{ id: 9, name: 'blastoise', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png' },
	{ id: 10, name: 'caterpie', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png' },
	{ id: 11, name: 'metapod', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png' },
	{ id: 12, name: 'butterfree', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png' },
	{ id: 13, name: 'weedle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png' },
	{ id: 14, name: 'kakuna', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png' },
	{ id: 15, name: 'beedrill', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png' },
	{ id: 16, name: 'pidgey', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png' },
	{ id: 17, name: 'pidgeotto', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png' },
	{ id: 18, name: 'pidgeot', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png' },
	{ id: 19, name: 'rattata', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png' },
	{ id: 20, name: 'raticate', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png' }
]

 let pokeLocalStorage = [];

function renderizarPokemons (){
    const body = document.querySelector("#body");

    for (let i = 0; i < pokemons.length ; i++ ){
        
        const pokemonList = pokemons[i];
        

        const card = document.createElement("div");
        card.classList.add("pokemon");

        const img = document.createElement("img");
        img.src = pokemonList.img;

        const name = document.createElement("p");
        name.textContent = pokemonList.name;

        const buyButton = document.createElement("button");
        buyButton.textContent ="Comprar";
        // buyButton.id = "buy";
        
        
        

        buyButton.addEventListener("click", (event)=>{
            event.preventDefault()
            console.log();
            
            let buyThisPokemon = {
                id: pokemonList.id,
                name : pokemonList.name,
                img: pokemonList.img
            };
            pokeLocalStorage.push(buyThisPokemon);
            console.log(buyThisPokemon);
            console.log(pokeLocalStorage);
           localStorage.setItem("pokemon", JSON.stringify(pokeLocalStorage));
            
        //    localStorage.setItem("pokemon", JSON.stringify(pokemonList)); 
        
        })

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(buyButton);
        body.appendChild(card);
    };
    
}
renderizarPokemons();

