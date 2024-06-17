const exams = [
	{name: 'Yuyu Cabeza Crack', score: 5}, 
	{name: 'Maria Aranda Jimenez', score: 1}, 
	{name: 'Cristóbal Martínez Lorenzo', score: 6}, 
	{name: 'Mercedez Regrera Brito', score: 7},
	{name: 'Pamela Anderson', score: 3},
	{name: 'Enrique Perez Lijó', score: 6},
	{name: 'Pedro Benitez Pacheco', score: 8},
	{name: 'Ayumi Hamasaki', score: 4},
	{name: 'Robert Kiyosaki', score: 2},
	{name: 'Keanu Reeves', score: 10}
];

//6.1
const sumScores = exams.reduce((acc, person) => {
	return acc + person.score
}, 0)

console.log(sumScores);

//6.2
const sumOfPassedScores = exams.reduce((acc, person) => {
	if(person.score >=5){
		return acc + person.score
	}
	return acc
}, 0);
console.log(sumOfPassedScores)

//6.3
const sumForAverageScore = exams.reduce((acc, person) => {
	return acc + person.score
}, 0)

const average = sumForAverageScore / exams.length;
console.log(average)
