const sectionCard = document.querySelector('#sectionCard')

let arrayImgs = []
let arrayStats = []



const gerarCard = async () => {

  for( let i = 0 ; i < 150 ; i++){
    let pokemonsInformçãoDaApi = await fetch(arrayUrlPokemon[i]).then(
    (promisePokemon) => promisePokemon.json().then((infor) => infor))
    
    
   
    
   let ValoresParaContrutor = new Card(
      pokemonsInformçãoDaApi.sprites.other.dream_world.front_default
      ,pokemonsInformçãoDaApi.name
      ,pokemonsInformçãoDaApi.types
      ,pokemonsInformçãoDaApi.id
      ,pokemonsInformçãoDaApi.stats
      ) ;
    
    
  
   sectionCard.innerHTML += ValoresParaContrutor.criarCard()
   
    addEventCard()
  
  }
}

const addEventCard = () => {
  
  const cardEvent = document.querySelectorAll('.linkCard')
  
  
  for (const event of cardEvent){
    event.addEventListener('click', uploadLocalStorege)
  }
}





const uploadLocalStorege = (e) =>{ 
  
  const target = e.target;
  
  const parent = target.parentNode;
  
  const parent_id = Number(parent.id);
  
  const chaveLocalStorege =`id${parent_id}`;

  localStorage.setItem( chaveLocalStorege , parent_id);




  


  const passarArrayImgsParaLocalstorege = (array) => {
      localStorage.setItem('arrayImgs', JSON.stringify(array))
  }
  passarArrayImgsParaLocalstorege(arrayImgs)


  
 

  const passarChaveLocalStoregePelaURL = (valor) => {
    window.location = `moreCard.html?minhaVariavel=${valor}`
  }
  passarChaveLocalStoregePelaURL(chaveLocalStorege)


}




const gerarMoreCard =  () => {
  
  const moreContainer = document.querySelector('.container')

  let chaveLocal; 

  function queryString(parameter) {  
    var loc = location.search.substring(1, location.search.length);   
    var param_value = false;   
    var params = loc.split("&");   
    for (i=0; i<params.length;i++) {   
        param_name = params[i].substring(0,params[i].indexOf('='));   
        if (param_name == parameter) {                                          
            param_value = params[i].substring(params[i].indexOf('=') + 
            1)   
        }   
    }   
    if (param_value) {   
        return chaveLocal = param_value ;   
    }   
    else {   
        return undefined ;   
    }   
} //pegar valores pela url
queryString("minhaVariavel");



  const idLocal = parseInt(localStorage.getItem(chaveLocal) - 1)


  const arrayStruingRecuperado= localStorage.getItem('arrayImgs') 

  const arrayRecuperadoLocal = JSON.parse( arrayStruingRecuperado);


    console.log(arrayRecuperadoLocal[idLocal]);
  const imgDoPokemonSelecionado = arrayRecuperadoLocal[idLocal]






  const valoresParaConstrutorMore = new MoreCardClass(
      2,
      2,
      2,
      imgDoPokemonSelecionado


  )

    moreContainer.innerHTML = valoresParaConstrutorMore.moreInfor()
    
}