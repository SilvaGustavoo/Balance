# Frontend Mentor - Solução do Desafio Expenses chart component
Esta é uma solução para o desafio do [Expenses chart component no Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Os desafios do Frontend Mentor ajudam você a melhorar suas habilidades de codificação criando projetos realistas.

## Índice
- [Visão geral](#Visão-geral)
  - [O desafio](#O-desafio)
  - [Captura de tela](#Captura-de-tela)
  - [Links](#Links)
- [Meu processo](#Meu-Processo)
  - [Construído com](#Construído-com)
  - [O que eu aprendi](#O-que-aprendi)
  - [Desenvolvimento contínuo](#Desenvolvimento-contínuo)
  - [Recursos úteis](#Recursos-úteis)
- [Autor](#Author)
- [Agradecimentos](#Agradecimentos)


## Visão geral
### O desafio
Os usuários devem ser capazes de:

- Visualizar o gráfico de barras e passar o mouse sobre as barras individuais para ver os valores corretos de cada dia
- Estar com destaque a barra do dia com maiores gastos, com uma cor diferente das outras barras
- Visualizar o layout ideal do conteúdo, independente do tamanho da tela do dispositivo
- **Bônus**: usar o arquivo de dados JSON fornecido para dimensionar dinamicamente as barras no gráfico
- **Bônus**: criar interatividade com os novos dados inseridos pelo o usuário

### Captura de tela

<div align="center"><img src="https://user-images.githubusercontent.com/86896848/195672824-f2b301f5-baf0-47d7-9f32-bf77c67b1133.png" alt="My Design" text-align="center" align="center" f/></div>

### Links
- URL da solução: [Solução e comparação com o modelo proposto](https://www.frontendmentor.io/solutions/pagina-responsiva-e-com-interao-ao-usuario-com-js-0MxRbcxZE9)
- URL do site ao vivo: [Balance](https://silvagustavoo.github.io/Balance/)

## Meu processo
### Construído com
- Marcação semântica HTML5
- Propriedades personalizadas de CSS
- Flexbox
- Fluxo de trabalho para dispositivos móveis
- Página responsiva e interativa
- Javascript - DOM (Eventos, Funções, etc.)
- Componentes estilizados - para estilos

### O que eu aprendi
Foi nesse projeto que comecei a compreender as funcionalidades do DOM com o javascript, utilizando as funções de localização, como, `document.getElementById(" ")` e fazendo o uso de metodos sobre essas funções. Poderia fazer uma lista enorme de todas as funções e métodos usados, mas descreverei os que gostei mais:

- Comentarios na função:
```js
/**
 * @description essa função pega todos os gastos em cada dia da semana e faz a sua soma e coleta o maior valor entre eles
 * @returns {number} retorna o total dos gastos gerados ap longo da semana.
 */
function repetidor() {...}
```
- <span id="js">Utilização de métodos `.indexOf` para ler palavras de um _**array**_ e Utilizar o _Switch Case_</span>

```js
const diaSemana = ["segunda", "terça", "quarta", "quinta", "sexta", "sabado", "domingo"]
let x = 0
switch (diaSemana[x]) {case "segunda": ...}
```

- Ciclo de repetição com a própria função<span id="ciclo"></span>

```js
function repetidor() {...
      if (x<=7) {
        repetidor()
    } else {x = 0}
...}
```
- Inserção de Texto e Estilo com o Javascript e muito mais

```js
document.getElementById("valor_mon").innerText="$ " + mon_amount
document.getElementById(colorSemana[corMaior]).style="background-color: hsl(186, 34%, 60%)"
```


### Desenvolvimento contínuo

Desejo compreender melhor o uso do Javascript e tambem do CSS, ainda falta muito para aprender tanto pelo o que reconheço como o que desconheço.
Sendo mais especifico, aprender sobre CSS Grid e entender melhor sobre transição mais suave dos elementos através do JS. Mas semn duvidas o que eu quero seguir aprendendo é o desenvolvimento de um código mais coerente e clean, para que quando eu ou terceiros decidirmos realizar uma retificação/manutenção do código, ter ciência do objetivo de cada função, variavel, condições e ciclos de repetição.

### Recursos úteis
<dl>
  <dt><a href="#js">Usar `indexOF()` para coletar uma string de array's</a></dt>
  <dd>Isso me ajudou com a ideia de que o ciclo realizasse 7 repetições e nelas passando por cada um dos 7 dias da semana, oque eu fiz foi adicionar os **dias da semana em um _array_** e puxa-los pelo _indexOf()_ e assim poderia criar um incremento na variavel **_x++_**. Gostei muito deste modelo e caso ele for de bom uso gostaria de usá-lo quando necessário.</dd>
  
  <dt><a href="#ciclo">Usar a própria função como repetidor</a></dt>
  <dd>Pode parecer irônico usar a função dentro dela mesmo, porém ela funciona corretamente. Sim, assim como no <strong>While</strong> de se não for bem controlado seu fim se repetirá infinitamente, mas ainda assim achei bem mais coerente deixa o repetidor da propria função do que um While confuso no meio do código</dd>
  
 </dl>


## Autor
- Site - [Gustavo Santos Silva](https://www.linkedin.com/in/gustavo-santos-628b07191/)
- Mentor de front-end - [@SilvaGustavoo](https://www.frontendmentor.io/profile/SilvaGustavoo)
- Facebook - [Gustavo Santos](https://www.facebook.com/profile.php?id=100004755151572)

## Agradecimentos
Bom sou muito grato aos professores da [Stackx] por me auxiliarem muito sobre programação principalmente a Ghalba e o João os dois que me trouxeram toda a idéia por tras do uso do CSS e Javascript de maneira bem simplória, e por eles me guiarem tenho  certeza que estarei quanto antes no mercado de trabalho.

Agradeço muito mais a vocês que leram meu projeto, fico muito feliz em pensar que chegaram até aqui... Foi um prazer imenso participar dessa.
<br>
<br>
<h3 align="right" font-size="204px"><em>Atenciosamente, Gustavo Silva</em></h3>

