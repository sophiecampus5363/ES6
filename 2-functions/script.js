// ## Arrow functions
// ➡️ Exercice à réaliser dans le dossier `2-functions`

// ### Section 1
// Convertissez les 3 fonctions avec la notation "Arrow function" et vérifiez que le code fonctionne comme avant la conversion

// ### Section 2
// 1. **Avant toute modification : a ssurez-vous de comprendre le code déjà écrit ! Au besoin commentez-le.**
// 2. Convertissez la fonction `showThis` en notation "Arrow function"
// 3. Observez le résultat. Que pouvez-vous en conclure ?
// Il faut être attentif à la façon d'écrire les fonctions quand on utilise 'this'.

// ### Section 3
// Complétez le code pour reproduire le comportement de la section 1 mais cette fois-ci grâce à l'objet `odile`. Vous utiliserez dès que possible des "Arrow functions".

// **COMMITTEZ VOS CHANGEMENTS 🚢**



//2.1 Fonctions simples
// const sayHello = function() {
//     console.log('Hello')
// }

const sayHello = () => console.log('Hello');

// const sayMyName = function(first, last) {
//     console.log(first, last)
// }

const sayMyName = (first, last) => console.log(first, last);

// const sayMyAge = function(age) {
//     console.log('You are ' + age + ' years old')
// }

const sayMyAge = (age) => console.log('You are ' + age + ' years old');

sayHello()
sayMyName('Odile', 'Crok')
sayMyAge(23)

//----------------------//
//2.2 this

// const object = {
//     color: 'red',
//     shape: 'circle',
//     threeDimensions: false,
//     showThis: function() {
//         console.log(this)
//     }
// }

const object = {
    color: 'red',
    shape: 'circle',
    threeDimensions: false,
    showThis: function() {
        console.log(this)
    },
    showThis2: () => console.log(this)
}

object.showThis()
object.showThis2()

//----------------------//
//2.3 Application

const odile = {
    name: {
        first: 'Odile',
        last: 'Crok'
    },
    age: 23,
    //sayHello: ... 
    sayHello: () => console.log('Hello'),
    //sayMyName:...
    sayMyName: (first, last) => console.log(first, last),
    //sayMyAge:...
    sayMyAge: (age) => console.log('You are ' + age + ' years old'),
   
}

odile.sayHello()
odile.sayMyName('Odile', 'Crok')
odile.sayMyAge(23)