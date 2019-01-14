const race = '100m Dash';
const winners = ['Hunter Gath', 'Singa Song', 'Imda Bos'];

const raceInfo = winners.map((racer, i) => {

    return {
        name: racer,
        place: i + 1,
        race: race
    }
})
console.table(raceInfo);

// Improve by implicit return
const raceInfo2 = winners.map((racer, i) => ({ name: racer, place: i + 1, race: race }))
console.table(raceInfo2);

// Improve redundant "race:race"
const raceInfo3 = winners.map((racer, i) => ({ name: racer, place: i + 1, race }))
console.table(raceInfo3);

// Filter
const ages = [23,65,43,45,33,56,12,76,99,12,1,4,2]
const old = ages.filter(person => person>=60)

console.log(old);
