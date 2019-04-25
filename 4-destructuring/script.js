//4.1 Découverte

const [a, b] = [1, 2, 3, 4] //on assigne les variables a et b aux deux première valeurs du tableau
console.log(a) //on affiche la variable a dans la console, sa valeur est 1
console.log(b) //on affiche la variable b dans la console, sa valeur est 2

const {first, last, age} = {first: 'Paul', last: 'Henta', age: 35} //assignation de valeurs à l'objet
console.log(first) // affichage dans la console de la valeur de first
console.log(last) // affichage dans la console de la valeur de last
console.log(age) //affichage dans la console de la valeur de age



//4.2 Application

console.log(data)

for (let element in data) {
    const { dateDebut, texte, dateFin } = data[element]
    console.log(dateDebut, texte, dateFin)
 }
 
