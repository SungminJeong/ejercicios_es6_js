//4.1
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const mayores = ages.filter(element => element > 18)
console.log(mayores);

//4.2
const par = ages.filter(element => element % 2 === 0)
console.log(par);

//4.3
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const lolGamer = streamers.filter(streamer => streamer.gameMorePlayed === 'League of Legends')

console.log(lolGamer);

//4.4
const nameWithU = streamers.filter(streamer => streamer.name.includes('u'))
console.log(nameWithU)

//4.5
const lolgame = (streamers)=>{
	const lolstreamers = streamers.filter(streamer => streamer.gameMorePlayed.includes('Legend'));
	for(const haha of lolstreamers){
		if(haha.age > 35){
			haha.gameMorePlayed = haha.gameMorePlayed.toUpperCase()
		}
	}
	return lolstreamers
};

const ejercicio4_5 = lolgame(streamers)
console.log(ejercicio4_5)