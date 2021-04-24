function getElementById(variavel){
  return document.getElementById(variavel);
}

const divOne = getElementById("div1");
const divTwo = getElementById("div2");
const divthree = getElementById("div3");
const divFour = getElementById("div4");
const divFive = getElementById("div5");
const divSix = getElementById("div6");
const divSeven = getElementById("div7");
const divEight = getElementById("div8");
const divNine = getElementById("div9");
const divTen = getElementById("div10");
const divEleven = getElementById("div11");
const divTwelve = getElementById("div12");
const divThirteen = getElementById("div13");
const divFourteen = getElementById("div14");
const divFiveteen = getElementById("div15");
const divSixteen = getElementById("div16");
const divSeventeen = getElementById("div17");
const divEightteen = getElementById("div18");

let state = new Array();//auxiliar para determinar se houve onclick, ou seja, se já foi selecionado ou não
let html = new Array();//pega as divs selecionadas
let increment = 0;// detertmina se todas as figura foram comparadas corretamente
let divId = null;//recebe a 1º figura selecionada
let divId1 = null;// recebe a 2º figura selecionada

//--------------- funções auxiliares------------------------//
function anulaElementosDoArray(){
  for(let i = 0; i < html.length; i++){
    html[i] = null;
  }
}

function anulaElementosSelecionadosDoArray(variavel){
  for(let i = 1; i < html.length; i++){
    if(html[i] === variavel){
      console.log("remover elemnto selecionado do array " + variavel);
          html[i] = undefined;
         console.log(html[i],html);
    }
  }
}

function verificaSeDuasForamSelecionadas(){
  let count = 0;
  for(let i = 0; i < html.length; i++){
    if(html[i] != undefined){
      count++;
    }
  }
  return count;
}
// ---------------------------------------------------//


/* 
Função modifca o html e css da DOM(árvore de elementos html)
*/
function modOver(divAll,key){

  if(state[parseInt(divAll.className)] === true && !verificaSeDuasForamSelecionadas() < 2){
      divAll.addEventListener("dblclick",function clicks(){
        state[parseInt(divAll.className)] = false;
        divAll.style.background = "black";
        divAll.style.color = "transparent";
        anulaElementosSelecionadosDoArray(divAll.id);
        return;
  });
  }

  if(verificaSeDuasForamSelecionadas() == 2)
    return alert("duas figuras já foram selecionadas");
 
  divAll.addEventListener("click",function click(){
    
          divAll.style.background = "#f317f3dc";
          divAll.style.color = "black";
          state[parseInt(divAll.className)] = true;
          html[key] = divAll.id;
  });
}

/* 
desfaz o que a função modOver fez
*/
function modOut(divAll){
  if(state[parseInt(divAll.id)] === true){
      return;
  }
  divAll.style.background = "black";
  divAll.style.color = "transparent";  
}



  

  const gestos = [
  { event: 'tap' } // 1 toque
]


function touchEventsByHammer(data){
   const mv = new Hammer(data);
   mv.add(new Hammer.Tap({ event: 'doubletap', taps: 2 }))//incluir evento de dois toques
   mv.get('doubletap').recognizeWith('tap')


  for(let gesto of gestos){
     mv.on(gesto.event,(event) => {
        event.preventDefault()

        switch(data.id){
        case "div1":
            modOver(divOne,0);
            break;
        case "div2":
            modOver(divTwo,1);
            break;
        case "div3":
            modOver(divthree,2);
            break;
        case "div4":
            modOver(divFour,3);
            break;
        case "div5":
            modOver(divFive,4);
            break;
        case "div6":
            modOver(divSix,5);
            break;
        case "div7":
            modOver(divSeven,6);
            break;
        case "div8":
            modOver(divEight,7);
            break;
        case "div9":
            modOver(divNine,8);
            break;
        case "div10":
            modOver(divTen,9);
            break;
        case "div11":
            modOver(divEleven,10);
            break;
        case "div12":
            modOver(divTwelve,11);
            break;
        case "div13":
            modOver(divThirteen,12);
            break;
        case "div14":
            modOver(divFourteen,13);
            break;
        case "div15":
            modOver(divFiveteen,14);
            break;
        case "div16":
            modOver(divSixteen,15);
            break;
        case "div17":
            modOver(divSeventeen,16);
            break;
        case "div18":
            modOver(divEightteen,17);
            break;
       /* default:
            alert("não selecionou nenhuma");*/
        }
   })
}
}

  

touchEventsByHammer(divOne);
touchEventsByHammer(divTwo);
touchEventsByHammer(divthree);
touchEventsByHammer(divFour);
touchEventsByHammer(divFive);
touchEventsByHammer(divSix);
touchEventsByHammer(divSeven);
touchEventsByHammer(divEight);
touchEventsByHammer(divNine);
touchEventsByHammer(divTen);
touchEventsByHammer(divEleven);
touchEventsByHammer(divTwelve);
touchEventsByHammer(divThirteen);
touchEventsByHammer(divFourteen);
touchEventsByHammer(divFiveteen);
touchEventsByHammer(divSixteen);
touchEventsByHammer(divSeventeen);
touchEventsByHammer(divEightteen);

function execute(){
 
  for(var i = 0; i < html.length; i++){
    if(html[i] != undefined){
       if(divId == null){
         divId = document.getElementById(html[i]);
       }else if(divId1 == null){
         divId1 = document.getElementById(html[i]);
       }
    }
  }
  console.log(divId, divId1)
 
  if(divId === null || divId1 === null){
     return alert("selecione duas palavras");
  }

  if(divId.innerHTML === divId1.innerHTML){
    
     console.log(divId.id,divId1.id);//enviar log para o browser

     document.getElementById(divId.id).remove(this);
     document.getElementById(divId1.id).remove(this);

     anulaElementosDoArray();
     
     divId = null;
     divId1 = null;
     increment++;
     if(increment === 9){
          parar();
          var end = document.getElementById("end");

          end.innerHTML = "jogo finalizado. A página será recarregada";

        end.style.textAlign = 'center';
        end.style.width = '480px';
        end.style.height = '200px';
        end.style.background = '#f317f3dc';
        end.style.lineHeight = '200px';
        end.style.fontSize = '17px';
          
        return reloadPage();        
    }
  }else{

  for(let i = 0; i < state.length; i++){
    state[i] = false;
  }

  
  modOut(divId);
  modOut(divId1);
  

   
   divId = null;
   divId1 = null;
   anulaElementosDoArray();
   
   console.log("comparação finalizada")
   }
   }


   //reload page
   function reloadPage(){
     setInterval(function(){
        console.log(intervalo)
     },180000000);
         window.location.reload(1);
   }




// -----------------------conômetro---------------------\\
const miliseg = document.querySelector('.milissegundos')
const seg = document.querySelector('.segundos')
const min = document.querySelector('.minutos')

let miliNum = 0
let segNum = 0
let minNum = 0
let INTERVALO

function milissegundos() {
  miliNum++
  if (miliNum < 10) {
    miliseg.innerHTML = '0' + miliNum
  } else {
    miliseg.innerHTML = miliNum
  }

  if (miliNum == 99) {
    miliNum = 0
    segundos()
  }
}

function segundos() {
  segNum++
  if (segNum < 10) {
    seg.innerHTML = '0' + segNum
  } else {
    seg.innerHTML = segNum
  }

  if (segNum == 59) {
    segNum = 0
    minutos()
  }
}

function minutos() {
  minNum++
  if (minNum < 10) {
    min.innerHTML = '0' + minNum
  } else {
    min.innerHTML = minNum
  }
}

function iniciar() {
  clearInterval(INTERVALO)
  INTERVALO = setInterval(() => {
    milissegundos()
  }, 10)
}

function parar() {
  clearInterval(INTERVALO)
}

function resetar() {
  clearInterval(INTERVALO)
  miliNum = 0
  segNum = 0
  minNum = 0
  miliseg.innerHTML = '00'
  seg.innerHTML = '00'
  min.innerHTML = '00'
  reloadPage();
}
//--------------------------------------------\\