const sectionCard = document.querySelector('#sectionCard')

let arrayImgs = []
let nameType = [];

const gerarCard = async () => {

  for( let i = 0 ; i < arrayUrlPokemon.length ; i++){
    let pokemonsInformçãoDaApi = await fetch(arrayUrlPokemon[i]).then(
    (promisePokemon) => promisePokemon.json().then((infor) => infor))
    
    
    
   let return_ = new Card(
     pokemonsInformçãoDaApi.sprites.other.dream_world.front_default,pokemonsInformçãoDaApi.name,pokemonsInformçãoDaApi.types
       ,pokemonsInformçãoDaApi.id
       ,pokemonsInformçãoDaApi.stats);
   
  
  
   sectionCard.innerHTML += return_.criarCard()
   
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
  
  const parent = target.parentNode
  
  const parent_id = Number( parent.id)
  
  localStorage.setItem(`id${parent_id}`, parent_id)
   
}

const gerarMoreCard = () => {
  
  
  const moreContainer = document.querySelector('.container')
  
  moreContainer.innerHTML = moreInfor()
  
}