
// ----------------------------- ABRIR EDITOR DE VALORES --------------------------

let y = 0

function abrir() {

if (y === 0) {
    document.getElementById("alt_gastos").style="transition: 1s;  display: flex;"
    
    y += 1
} else {
    document.getElementById("alt_gastos").style="transition: 60s one all;  display: none;"
    y -= 1
}
}

//--------------------------------- VARIAÇÃO DO GRAFICO ------------------------------------

// PEGAR VALORES

let mon_amount = parseFloat(document.getElementById("mon_input").value)
let tue_amount = parseFloat(document.getElementById("tue_input").value)
let wed_amount = parseFloat(document.getElementById("wed_input").value)
let thu_amount = parseFloat(document.getElementById("thu_input").value)
let fri_amount = parseFloat(document.getElementById("fri_input").value)
let sat_amount = parseFloat(document.getElementById("sat_input").value)
let sun_amount = parseFloat(document.getElementById("sun_input").value)


/**
 * @Description VERIFICAR SE VALORES SÃO VALIDOS (valor > 0 OU valor == number)
 * @returns {0.00} retorna ' 0 ' caso o valor inserido for diferente de um numero ou vazio
 */
function vazio() {
    
    isNaN(mon_amount) == true || mon_amount < 0 ? mon_amount = 0.00 : mon_amount
    isNaN(tue_amount) == true || tue_amount < 0 ? tue_amount = 0.00 : tue_amount
    isNaN(wed_amount) == true || wed_amount < 0 ? wed_amount = 0.00 : wed_amount
    isNaN(thu_amount) == true || thu_amount < 0 ? thu_amount = 0.00 : thu_amount
    isNaN(fri_amount) == true || fri_amount < 0 ? fri_amount = 0.00 : fri_amount
    isNaN(sat_amount) == true || sat_amount < 0 ? sat_amount = 0.00 : sat_amount
    isNaN(sun_amount) == true || sun_amount < 0 ? sun_amount = 0.00 : sun_amount
    
}

vazio()


/**
 * @description Atualiza os valores que são inseridos pelo usuário e recomeça o Ciclo
 */
function valo() {

    mon_amount = parseFloat(document.getElementById("mon_input").value)
    tue_amount = parseFloat(document.getElementById("tue_input").value)
    wed_amount = parseFloat(document.getElementById("wed_input").value)
    thu_amount = parseFloat(document.getElementById("thu_input").value)
    fri_amount = parseFloat(document.getElementById("fri_input").value)
    sat_amount = parseFloat(document.getElementById("sat_input").value)
    sun_amount = parseFloat(document.getElementById("sun_input").value)

    vazio()

    carrinho = { //essa variavel serve como banco de dados
    segunda: {day: "segunda", amount: mon_amount},
    terca: {day: "terça", amount: tue_amount},
    quarta: {day: "quarta", amount: wed_amount},
    quinta: {day: "quinta", amount: thu_amount},
    sexta: {day: "sexta", amount: fri_amount},
    sabado: {day: "sabado", amount: sat_amount},
    domingo: {day: "domingo", amount: sun_amount}
    }

    repetiu = true
    maiorNumero = 0
    total = 0
    repetidor() // Recomeça o ciclo
}



let carrinho = { //essa variavel serve como banco de dados
    segunda: {day: "segunda", amount: mon_amount},
    terca: {day: "terça", amount: tue_amount},
    quarta: {day: "quarta", amount: wed_amount},
    quinta: {day: "quinta", amount: thu_amount},
    sexta: {day: "sexta", amount: fri_amount},
    sabado: {day: "sabado", amount: sat_amount},
    domingo: {day: "domingo", amount: sun_amount}
}



let repetiu = false // Confirma se o usuario editou os valores

let x = 0 // contador da semana

const diaSemana = ["segunda", "terça", "quarta", "quinta", "sexta", "sabado", "domingo"] //foi uma forma de transformar a srting em um numero puxando pela lista, sendo 0 = "segunda"

let total = 0 // valor acomulado
let maiorNumero = 0 // maior gasto
let corMa0ior = 0
let numeroAnt = 0

/**
 * @description essa função pega todos os gastos em cada dia da semana e faz a sua soma e coleta o maior valor entre eles
 * @returns {number} retorna o total dos gastos gerados ap longo da semana.
 */
function repetidor() {
    document.getElementById("mon").style="background-color: black;";
    switch (diaSemana[x]) {
        case "segunda":
            total = total + carrinho.segunda.amount
            if (carrinho.segunda.amount > maiorNumero) {maiorNumero = carrinho.segunda.amount;}
        break
        case "terça":
            total = total + carrinho.terca.amount
            if (carrinho.terca.amount > maiorNumero) {maiorNumero = carrinho.terca.amount}
        break
        case "quarta":
            total = total + carrinho.quarta.amount
            if (carrinho.quarta.amount > maiorNumero) {maiorNumero = carrinho.quarta.amount}
        break
        case "quinta":
            total = total + carrinho.quinta.amount
            if (carrinho.quinta.amount > maiorNumero) {maiorNumero = carrinho.quinta.amount}
        break
        case "sexta":
            total = total + carrinho.sexta.amount
            if (carrinho.sexta.amount > maiorNumero) {maiorNumero = carrinho.sexta.amount}
        break
        case "sabado":
            total = total + carrinho.sabado.amount
            if (carrinho.sabado.amount > maiorNumero) {maiorNumero = carrinho.sabado.amount}
        break
        case "domingo":
            total = total + carrinho.domingo.amount
            if (carrinho.domingo.amount > maiorNumero) {maiorNumero = carrinho.domingo.amount}
        break
    }

    if (maiorNumero > numeroAnt) {
        corMaior = x
        numeroAnt = maiorNumero
    }

    x = x + 1;

    // enquanto o contador nao passar os 7 dias ele ira repetir-se chamando a funçao novamente


    if (x<=7) {
        repetidor()
    } else {x = 0}

    if (repetiu == true) {//para quando repetir, atualizar o grafico 
        segundaWidth = carrinho.segunda.amount/maiorNumero
        tercaWidth = carrinho.terca.amount/maiorNumero
        quartaWidth = carrinho.quarta.amount/maiorNumero
        quintaWidth = carrinho.quinta.amount/maiorNumero
        sextaWidth = carrinho.sexta.amount/maiorNumero
        sabadoWidth = carrinho.sabado.amount/maiorNumero
        domingoWidth = carrinho.domingo.amount/maiorNumero
        porcentagem()
        atualizarValor()
        corAzul()
        repetiu = false

    }

    return console.log(maiorNumero, total, corMaior)
}

repetidor()

// variaveis cujo o valor sera gerado uma porcentagem em relação ao maior valor para que se organizem de forma proporcional no grafico
let segundaWidth = carrinho.segunda.amount/maiorNumero
let tercaWidth = carrinho.terca.amount/maiorNumero
let quartaWidth = carrinho.quarta.amount/maiorNumero
let quintaWidth = carrinho.quinta.amount/maiorNumero
let sextaWidth = carrinho.sexta.amount/maiorNumero
let sabadoWidth = carrinho.sabado.amount/maiorNumero
let domingoWidth = carrinho.domingo.amount/maiorNumero

/**
 * @description Pega os valores gerados em relação ao 'Maior Numero' e o multiplica do total, criando uma proporção no grafico, e por fim adiciona as informações no CSS (o total nesse caso é 65%)
 * @example maiorNumero = 10; segunda = 2.5 => segundaWidth = (height: 25%;) //do total 
 */
function porcentagem() {
    document.getElementById("mon").style="height: " + segundaWidth*65 + "%;"
    document.getElementById("tue").style="height: " + tercaWidth*65 + "%;"
    document.getElementById("wed").style="height: " + quartaWidth*65 + "%;"
    document.getElementById("thu").style="height: " + quintaWidth*65 + "%;"
    document.getElementById("fri").style="height: " + sextaWidth*65 + "%;"
    document.getElementById("sat").style="height: " + sabadoWidth*65 + "%;"
    document.getElementById("sun").style="height: " + domingoWidth*65 + "%;"
}

porcentagem()

/**
 * @description Insere nas Tags/Textos os novos valores 
 */
function atualizarValor() {
    document.getElementById("valor_mon").innerText="$ " + mon_amount
    document.getElementById("valor_tue").innerText="$ " + tue_amount
    document.getElementById("valor_wed").innerText="$ " + wed_amount
    document.getElementById("valor_thu").innerText="$ " + thu_amount
    document.getElementById("valor_fri").innerText="$ " + fri_amount
    document.getElementById("valor_sat").innerText="$ " + sat_amount
    document.getElementById("valor_sun").innerText="$ " + sun_amount
    document.getElementById("total").innerText="$ " + (total + 250.39).toFixed(2)
    document.getElementById("mesAnterior").innerText=(( (total+250.39)*100 / 466.85 )- 100).toFixed(1) + "%"
}



atualizarValor()
console.log(maiorNumero)

function corAzul() {
    let colorSemana = ["mon","tue","wed","thu","fri","sat","sun"]
    document.getElementById(colorSemana[corMaior]).style="background-color: hsl(186, 34%, 60%)"
}

corAzul()