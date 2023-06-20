const fs = require('fs').promises;

async function read() {
    const simpsonsFamily = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(simpsonsFamily);
    return simpsons;
}

async function readAll () {
    const simpsons = await read();
    const strings = simpsons.map(({ id, name }) => `${id} - ${name}` );
    strings.forEach((string) => console.log(string));
};

async function simpsonsID (id) {
    const simpsons = await read();
    const getSimpsons = simpsons.find((simpson) => Number(simpson.id) === id);
    if(!getSimpsons) {
        throw new Error ('id não encontrado.');
    }
    console.log(getSimpsons);
    return getSimpsons;
};

async function filterSimpson () {
  const simpsons = await read();
  const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6')
  await fs.writeFile('simpsons.json', JSON.stringify(newArray));
};

async function simpsonsFamily() {
  const simpsons = await read();
  const ids = [1, 2, 3, 4]
  const newArray = simpsons.filter((simpson) => ids.includes(Number(simpson.id)));
  await fs.writeFile('simpsonsFamily.json', JSON.stringify(newArray));
}

async function addSimpson() {
  const simpsonsFamily = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsons = JSON.parse(simpsonsFamily);
  simpsons.push({id: '8', name: 'Nelson Muntz'});
  await fs.writeFile('simpsonsFamily.json', JSON.stringify(simpsons));
}

async function replaceSimpson() {
  const simpsonsFamily = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsons = JSON.parse(simpsonsFamily);
  const newArray = simpsons.filter((simpson) => simpson.id !== '8')
  newArray.push({id: '5', name: 'Maggie Simpson'});
  await fs.writeFile('simpsonsFamily.json', JSON.stringify(newArray));
}

replaceSimpson()