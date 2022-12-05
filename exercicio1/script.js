let maisCoxinhas = prompt("Deseja comer mais coxinhas? S: para sim N: para não.").toUpperCase()
let conta = 0
let valor = 2.50
let total = 0
while(maisCoxinhas === "S"){
    conta = conta + valor
    total++
    alert("MAIS UMA COXINHA SAINDO DO FORNO!!")
    maisCoxinhas = prompt("Deseja comer mais coxinhas? S: para sim N: para não.").toUpperCase()
   
}
console.log(`Foram ${total} coxinhas, Sua comanda fechou em ${conta.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}`)

//RESOLUÇÂO: Pedindo para clinete se ele quer mais coxinha, caso sim, some mais uma coxinha no valor total, caso não imprima ovalor total da comanda.










