let pokemonList = [
  {name: "Bulbasaur", height: 0.7, type: ["grass", "poison"]},
  {name: "Squirtle", height: 0.5, type: "water"},
  {name: "Snorlax", height: 2.1, type: "normal"}
  ];
  
  for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height < 0.6) {
      document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") - It's tiny.<br>");
    } else if (pokemonList[i].height >= 0.7 && pokemonList[i].height < 0.8) {
      document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")<br>");
    } else {
      document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") - Wow, that's big!")
    }
  }
  