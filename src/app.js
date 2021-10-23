//console.log('Merhaba Kodlama.io')

let dolarBugun = 9.30

let dolarDun = 9.20

//console.log(dolarDun)
//array
let konutKredileri = ['Konut Kredisi','Emlak Konut Kredisi','Kamu Konut Kredisi','Özel Konut Kreisi']

console.log('<ul>')
for(let i = 0;i<konutKredileri.length;i++){
    console.log('<li>'+konutKredileri[i]+'</li>')
}
//console.log('</ul>')

//console.log(konutKredileri)
//console.log(konutKredileri)

let sayi1 = 10
sayi1 = 'Engin Demiroğ'
let student = {id:1, name:'Engin'}

function save(puan=10,ogrenci) {
    console.log(ogrenci.name + ' : '+puan)
}
//save(undefined,student)

let students = ['Engin Demiroğ','Aynur Erkalayci','Burcu Baş','Şirin Yük.' ]
//console.log(students)

let students2 = [student,{id:2,name:'Aynur'}]
console.log(students2)

let showProducts = function (id,...products) {
console.log(id)
console.log(products)    
} 

//console.log(typeof showProducts)
// showProducts(10,'Elma','Armt','Karpz')

let points = [1,2,3,4,50,4,60,14]
console.log(...points)
console.log(Math.max(...points))
console.log(...'ABC','D',...'EFG','H')

let populations = [10000,20000,30000,[40000,100000]]
let [small,medium,high,[veryHigh,maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number) {
    console.log(small1)
}
someFunction(populations)

let category = {id:1, name:'İçeçek'}
console.log(category.id)
console.log(category['name'])

let{id,name} = category
console.log(id)
console.log(name)