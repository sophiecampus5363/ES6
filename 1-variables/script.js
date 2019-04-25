// ### Section 1
// 1. Remplacez toutes les occurences de `var` par `let`.
// 2. Constatez que cela ne change rien. Désormais **on n'utilisera plus `var`** mais `let` ou `const`
// 3. Remplacez toutes les occurences de `let` par `const`.
// 4. Expliquez l'erreur
// 5. Corrigez le code en conservant le maximum de valeurs constantes

//L'erreur est due au fait que const a une contrainte d'assignation unique, on ne peut pas lui assigner 
//une nouvelle valeur.

// ### Section 2
// 1. Remplacez toutes les occurences de `let` par `const`.
// 2. Expliquez **l'absence** l'erreur

//Le contenu d'un tableau ou d'un objet déclaré avec const bloque la réassignation de la variable mais ne
//rend pas la valeur immuable.

// ### Section 3
// 1. Remplacez toutes les occurences de `let` par `const`.
// 2. Expliquez l'erreur
// 3. Corrigez le code en conservant le maximum de valeurs constantes

// Le contenu d'un tableau ou d'un objet déclaré avec const bloque la réassignation de la variable, 
//on ne peut pas changer le type de la variable mais les valeurs d'un tableau par ex, oui.

// **COMMITTEZ VOS CHANGEMENTS 🚢**

//1.1 Types simples


const name = 'Jacques'
let age = 80
let useless = 'something'

console.log(name, age, useless)

age += 1
useless = 14

console.log(name, age, useless)

//----------------------//
//1.2 Tableaux

const fruits = ['apple', 'pear', 'cherry']
const vegetables = ['potato', 'curlyflower', 'tomato']

console.log(fruits, vegetables)

fruits.push('banana')
vegetables.pop()

console.log(fruits, vegetables)

//----------------------//
//1.3 Objets

const settings = {
    sound: true,
    music: false,
    graphics: 'high',
    resolution: [1920, 1080]
}

let savedGame = {
    time: 384,
    score: 47,
    opponent: 'Lolo'
}

console.log(settings, savedGame)

savedGame = {}
settings.music = true
settings.resolution = [3840, 2160]

console.log(settings, savedGame)