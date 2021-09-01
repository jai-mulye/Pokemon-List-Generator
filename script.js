// Link of the First Image
//	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

// Using part of the link as a base URL
const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
const container = document.querySelector('#container');

// All pokemon names accquired from wikipedia put into a string
const pName = "Undefined Bulbasaur Ivysaur Venusaur Charmander Charmeleon Charizard Squirtle Wartortle Blastoise Caterpie Metapod Butterfree Weedle Kakuna Beedrill Pidgey Pidgeotto Pidgeot Rattata Raticate Spearow Fearow Ekans Arbok Pikachu Raichu Sandshrew Sandslash Nidoran♀ Nidorina Nidoqueen Nidoran♂ Nidorino Nidoking Clefairy Clefable Vulpix Ninetales Jigglypuff Wigglytuff Zubat Golbat Oddish Gloom Vileplume Paras Parasect Venonat Venomoth Diglett Dugtrio Meowth Persian Psyduck Golduck Mankey Primeape Growlithe Arcanine Poliwag Poliwhirl Poliwrath Abra Kadabra Alakazam Machop Machoke Machamp Bellsprout Weepinbell Victreebel Tentacool Tentacruel Geodude Graveler Golem Ponyta Rapidash Slowpoke Slowbro Magnemite Magneton Farfetch'd Doduo Dodrio Seel Dewgong Grimer Muk Shellder Cloyster Gastly Haunter Gengar Onix Drowzee Hypno Krabby Kingler Voltorb Electrode Exeggcute Exeggutor Cubone Marowak Hitmonlee Hitmonchan Lickitung Koffing Weezing Rhyhorn Rhydon Chansey Tangela Kangaskhan Horsea Seadra Goldeen Seaking Staryu Starmie Mr.Mime Scyther Jynx Electabuzz Magmar Pinsir Tauros Magikarp Gyarados Lapras Ditto Eevee Vaporeon Jolteon Flareon Porygon Omanyte Omastar Kabuto Kabutops Aerodactyl Snorlax Articuno Zapdos Moltres Dratini Dragonair Dragonite Mewtwo Mew "
// Converted the String in Array
const pArray = pName.split(" ");

// Loop for generating new Pokemon based on loop values
for (let i=1; i<=151; i++) {
	// new Div Element
	const pokemon = document.createElement('div');
	// new Span Element
	const newSpan = document.createElement('span');
	newSpan.innerText = `${pArray[i]}`;
	// new Image Element
	const newImg = document.createElement('img');
	// Generating new Pokemon and adding it to the base URL
	newImg.src = `${baseURL}${i}.png`;
	
	pokemon.classList.add('pokemon');
	pokemon.appendChild(newImg);
	pokemon.appendChild(newSpan);
	container.appendChild(pokemon);
}