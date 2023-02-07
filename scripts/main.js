const sectionCard = document.querySelector('#sectionCard')

let arrayImgs = []
let arrayStats = []
let arrayName = []





const gerarCard = async () => {

  for( let i = 0 ; i < 150; i++){
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

  

   const passarArrayStatsLocalstorege = (array) => {
    localStorage.setItem('arrayStats', JSON.stringify(array))
   }
   passarArrayStatsLocalstorege(arrayStats)


  const passarArrayImgsParaLocalstorege = (array) => {
      localStorage.setItem('arrayImgs', JSON.stringify(array))
  }
  passarArrayImgsParaLocalstorege(arrayImgs)

  const passarArrayNameParaLocalstorege = (array) => {
    localStorage.setItem('arrayName', JSON.stringify(array))
}
passarArrayNameParaLocalstorege(arrayName)


  
 

  const passarChaveLocalStoregePelaURL = (valor) => {
    window.location = `moreCard.html?minhaVariavel=${valor}`
  }
  passarChaveLocalStoregePelaURL(chaveLocalStorege)


}




const gerarMoreCard =  () => {
  
  const moreContainer = document.querySelector('.container')

  let chaveLocal; 

  function queryString(parameter) {  
    let loc = location.search.substring(1, location.search.length);   
    let param_value = false;   
    let params = loc.split("&");   


    for (i=0; i<params.length;i++) {   
        param_name = params[i].substring(0,params[i].indexOf('='));
        param_nameStats =  params[i].substring(0,params[i].indexOf('='));

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



  const idLocal = parseInt(localStorage.getItem(chaveLocal) - 1 )


  const arrayStruingRecuperado= localStorage.getItem('arrayImgs') 

  const arrayRecuperadoLocal = JSON.parse( arrayStruingRecuperado);

  const arrayStats_struingRecuperado = localStorage.getItem('arrayStats')

  const arrayStats_recuperadoLocal = JSON.parse(arrayStats_struingRecuperado)

  const arrayName_struingRecuperado = localStorage.getItem('arrayName')

  const arrayName_recuperadoLocal = JSON.parse(arrayName_struingRecuperado)
    
  const imgDoPokemonSelecionado = arrayRecuperadoLocal[idLocal]



  console.log(idLocal);


  const valoresParaConstrutorMore = new MoreCardClass(
    idLocal + 1,
    arrayName_recuperadoLocal[idLocal],
    arrayStats_recuperadoLocal[idLocal],
    imgDoPokemonSelecionado


  )

    moreContainer.innerHTML = valoresParaConstrutorMore.moreInfor()
    
}