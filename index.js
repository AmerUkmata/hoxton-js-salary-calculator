let salery=500
let Contribution=(0.05*salery)
console.log(Contribution)
console.log(salery-(Contribution))

let taxunder80=(0/100)*(80-0)
console.log(taxunder80)

let taxunder250=(4/100)*(250-80)
console.log(taxunder250)

let taxunder450=(8/100)*(450-250)
console.log(taxunder450)

let taxover450=(10/100)*(450+25-450)
console.log(taxover450)

let alltax=(taxunder80+taxunder250+taxunder450+taxover450)
console.log(alltax)