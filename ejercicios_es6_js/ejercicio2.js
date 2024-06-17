//2.1
const pointsList = [32, 54, 21, 64, 75, 43];
const copyPointList = [...pointsList];
console.log(copyPointList)

//2.2
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const copyToy = {...toy};
console.log(copyToy);

//2.3
const pointsList2 = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];
const copyPointLists = [...pointsList2, ...pointsLis2];
console.log(copyPointLists);

//2.4
const toyOfObj = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}
const UpdatedToy = {...toyOfObj, ...toyUpdate};
console.log(UpdatedToy);

//2.5

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const newColors = [...colors.slice(0, 2), ...colors.slice(3)]
console.log(newColors);

