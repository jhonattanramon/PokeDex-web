class Card {
  constructor(img,name,type,id, stats) {
    this.img = img;
    this.name = name;
    this.type = type; 
    this.id = id;
    this.stats = stats
   
  }
  
  criarCard(){
    
   
  let nameType = [];
  let estiloBackGroud = [];



    
  for( let i = 0 ; i < this.type.length ; i++){

    nameType.push(this.type[i].type.name) 
  
  }

  funcBack()
  
  const colocarStatsNoArray = (array) => {
    array.push(this.stats)
  }
  colocarStatsNoArray(arrayStats)
  

  const colocarImgsNoArrray = (array) => {
     
    array.push( this.img)
    
  }
  colocarImgsNoArrray(arrayImgs)
  
  
  


 
    
    
   
  return` 
    
  <a class='linkCard' id = '${this.id}'>
  <div class = 'test'>  </div>
    <div style = '${ estiloBackGroud.map( (y) => { return y})}' class = 'divCard'> 
     
     <div  class = 'headerCard'> <span>${this.name}</span> <span>#${this.id} </span> </div> 
      
      <div class ='conteudoCard'>
      
      <div><img src= '${this.img}'> </div>
      
      <div class ='divSpanType'>  ${ nameType.map( (x) => { return `<span class ='spanType'>${x}</span> `})} </div> 
      </div> 
      
    </div> 
    
  </a>

    `
}

  }
  
 
  class MoreCardClass {

    constructor(id, name, arrayStats,img){
      
      this.id = id;
      this.name = name;
      this.arrayStats = arrayStats;
      this.img = img
    }

    moreInfor(){
        
      
      console.log('more');
      let baseStats = []
      
      //for (let i = i ; arrayStats.length; i++) {
        
        //baseStats.push( arrayStats[i].base_stat)
      //}
     
      
      
      
      return `   
      <div> <a href="#"></a> </div>
   
   <div>
      
      <span> <img src="${this.img}" alt=""></span>
      
      <span> 
      <p>#${this.id}</p>
      <h3>${this.name}</h3>
      <span></span>
      
      </span>
      
   </div>


    <div>
      
      
      <h1> Base states</h1>
      
      <ul>
       <li> <b>Hp</b> <p></p>  </li>
       <li> <b>Attack</b> <p></p>  </li>
       <li> <b>Defense</b> <p></p>  </li>
       <li> <b>spacial-Attack </b> <p></p>  </li>
       <li> <b>spacial-Defense </b> <p></p>  </li>
      <li> <b>speed </b> <p></p>  </li>

      </ul>
      
    </div>
   `
    }


  }
   
   