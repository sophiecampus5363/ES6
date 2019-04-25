// ### Section 1
// Afficher les caractéristiques du véhicule sous la forme `clé : valeur` (Ex: `id: 3221`)

// ### Section 2
// Pour chacunes des perturbations du fichier `data.js` (variable `data`) afficher leur texte.


//3.1 Object.keys

const bus = {
    vehicle: 'Urbanway CNG 12',
    id: 3221,
    line: 'C6',
    paint: 'chrono',
    garage: {
        name: 'Sassenage',
        place: '47'
    },
    equipments: ['sae', 'tft', 'speech']
}

console.log("vehicle: " + bus.vehicle)
console.log("id: " + bus.id)
console.log("line: " + bus.line)
console.log("paint: " + bus.paint)
console.log("garage name: " + bus.garage.name)
console.log("garage place: " + bus.garage.place)
console.log("equipments: " + bus.equipments)

console.log(Object.entries(bus))

//3.2 Object.values


 function showPerturbationsText(){
     Object.values(data).forEach(function (value){
         console.log(value.texte);
     });
 }

 showPerturbationsText()





