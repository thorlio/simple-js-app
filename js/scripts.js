let pokemonRepository = (function() {
  let pokemonList = [
    {name: "Bulbasaur", height: 0.7, type: ["grass", "poison"]},
    {name: "Squirtle", height: 0.5, type: "water"},
    {name: "Snorlax", height: 2.1, type: "normal"},
    {name: "Psyduck", height: 0.8, type: "water"},
    {name: "Onix", height: 8.8, type: ["rock", "ground"]},
    {name: "Charmeleon", height: 1.1, type: "fire"}
  ];

  // for (let i = 0; i < pokemonList.length; i++) {
  //   if (pokemonList[i].height < 0.6) {
  //     document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") - It's tiny.<br>");
  //   } else if (pokemonList[i].height >= 0.7 && pokemonList[i].height < 0.8) {
  //     document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")<br>");
  //   } else {
  //     document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") - Wow, that's big!")
  //   }
  // }
  
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  }
})();


pokemonRepository.add({name: 'Pikachu', height: 0.4, type: 'electric'});

pokemonRepository.getAll().forEach(function(pokemon) {
  document.write('<p>' + pokemon.name + ' is ' + pokemon.height + ' m tall');
  if (pokemon.height > 2) {
    document.write(" - Wow, that's big!");
  }
});