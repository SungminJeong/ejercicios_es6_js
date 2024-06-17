//3.1
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
const userName = users.map(user => user.name);
console.log(userName);

//3.2
const userName2 = users.map(user => {
	if(user.name.indexOf("A") === 0){
		user.name = "Anacleto"
		return user
	}
	return user
})
console.log(userName2);

/* or
const userName2 = users.map(user => {
	if(user.name.indexOf("A") === 0){
		user.name = "Anacleto"
		return user.name
	}
	return user.name
})
console.log(userName2);
??
*/

//3.3
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const citiesVisited = cities.map(city => {
	if(city.isVisited){
		city.name = city.name + ' (Visitado)'
		return city.name
	}
	return city.name
})
console.log(citiesVisited)