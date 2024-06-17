const videogames = [
	{name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
	{name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
	{name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
	{name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
	{name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
	{name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10},
];

const ejercicio7_1 = (videogames) => {
	const rpg = videogames.filter((videogame) => videogame.genders.includes('RPG'));
	const sum = rpg.reduce((acc, game) => {
		return acc + game.score;
	}, 0);

	const average = sum / rpg.length;
	console.log(average)
}

ejercicio7_1(videogames);

/*
const rpgWithFind = videogames.find((game) => game.genders.includes('RPG'));
console.log(rpgWithFind)
*/