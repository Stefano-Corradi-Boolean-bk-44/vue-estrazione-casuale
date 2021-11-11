

const app = new Vue({

  el: '#app',
  
  data:{
    classe44: ['Anthony Barbagallo',
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
'Luca Verthury'],
    studentiEstratti:[],
  },

  methods:{
    startPrompt(){
      console.log('prompt');
      // apro il prompt
      const numStudenti = prompt('quanti studenti chiamo?');
      // resetto il dato di partenza
      this.studentiEstratti = [];
      if(isNaN(numStudenti)) { 
        // se viene passata una stringa estraggo un solo studente
        numStudenti = 1;
      }else if( numStudenti > this.classe44.length - 1){
        // se chiedo un numero superiore all'elenco il numero sarà come l'elenco
        numStudenti = this.classe44.length - 1;
      }

      // per ogni studente da estrarre
      for(let i = 0; i < numStudenti; i++){
        // estraggo un numero randomo
        const randomNum = getRandomNumber(0, this.classe44.length - 1);
        // in base al numero estratto prendo lo studente dall'array
        const nomeEstratto = this.classe44[randomNum];
        // concateno l'innerHTML
        this.studentiEstratti.push(nomeEstratto);
      }
    }
  }

});


// estrattore di numeri random
function getRandomNumber(min, max){

  return Math.floor(Math.random() * (max - min + 1) + min);

}