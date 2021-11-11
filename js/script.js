const classe44 = ['Anthony Barbagallo',
'Andrea Boni',
'Federico Cafiero',
'Cristian Campagna',
'Davide Carta',
'Alberto Ciufici',
'Mauro De stefano',
'Matteo Deias',
'Michele Di Gennaro',
'Matteo Fabio',
'Andrea Fontaneto',
'Simone Franzoni',
'Mattia Giacomini',
'Larisa Gimbu',
'Manuel Guariglia',
'Matteo Landriscina',
'Francesco Lucco',
'Morena Mastromarino',
'Mattia Mazzoni',
'Simone Pancione',
'Mariano Pidone',
'Vitali Pisani',
'Gianluca Polcino',
'Giuseppe Salis',
'Salvatore Sanzone',
'Giada Saputo',
'Giulia Sardelli',
'Benjamin Scalari',
'Giulia Sossai',
'Luca Sunseri',
'Davide Tavella',
'Luigi Verde',
'Luca Verthury'];

const btn = document.getElementById('btn');
const card = document.querySelector('.card');

btn.addEventListener('click',function(){

  // numero di studenti da estrarre
  const stdentiDaEstrarre = prompt('quanti studenti chiamo?');

  // chiamo la funzione che si occupa dell'estrazione e della stampa
  printStudents(stdentiDaEstrarre);

})

function printStudents(numStudenti){

  // resetto l'elemnto HTML che riceve il dato
  card.innerHTML = '';

  if(isNaN(numStudenti)) { 
    // se viene passata una stringa estraggo un solo studente
    numStudenti = 1;
  }else if( numStudenti > classe44.length - 1){
    // se chiedo un numero superiore all'elenco il numero sarà come l'elenco
    numStudenti = classe44.length - 1;
  }

  // per ogni studente da estrarre
  for(let i = 0; i < numStudenti; i++){
    // estraggo un numero randomo
    const randomNum = getRandomNumber(0, classe44.length - 1);
    // in base al numero estratto prendo lo studente dall'array
    const nomeEstratto = classe44[randomNum];
    // concateno l'innerHTML
    card.innerHTML += `<h2>${nomeEstratto}</h2>`;
  }
  
}

// estrattore di numeri random
function getRandomNumber(min, max){

  return Math.floor(Math.random() * (max - min + 1) + min);

}






