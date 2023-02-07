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

  

  
  const passarStatsNoArray = (array) => {
    array.push(this.stats)
  }
  passarStatsNoArray(arrayStats)
  

  const passarImgsNoArrray = (array) => {
     
    array.push( this.img)
    
  }
  passarImgsNoArrray(arrayImgs)

  const passarNameParaArray = (array) => { array.push( this.name)  }
  
    passarNameParaArray(arrayName)
    
 



  const funcBack=()=>{
    nameType.map( (i) => {
      
    
    if (i == 'water' || i == 'ice' || i == 'flying') {
    
      estiloBackGroud.push( 'background-image:var(--backGroud-water-ice-flying);');
    
    
    }
    if (i == 'fire') {
     estiloBackGroud.push( 'background-image:var(--backGroud-fire);')
    
    }
    if (i == 'electric' || i == 'fairy') {
    
      estiloBackGroud.push('background-image:va(--backGroud-eletric-fairy);')
    
    }
    if (i == 'grass' || i == 'dragon' || i == 'bug') {
    
      estiloBackGroud.push('background-image:var(--backGroud-gass-dragon-bug);')
    
    }
    if (i == 'ghost' || i == 'rock') {
    
      estiloBackGroud.push('background-image:var(  --backGroud-ghost-rock);')
    
    }
    if (i == 'dark' || i == 'psychic') {
    
      estiloBackGroud.push('background-image:var(   --backGroud-dark-psychic);')
    
    }
    if (i == 'poison' || i == 'fighting') {
    
      estiloBackGroud.push('background-image:var(   --backGroud-poison-fighting);')
    
    }
    if (i == 'normal') {
    
      estiloBackGroud.push('background-image:var(     --backGroud-normal);')
    
    }
    if (i == 'ground' || i == 'stell') {
    
      estiloBackGroud.push('background-image:var(       --backGroud-ground-stell);')
    
    }
    
    
    
    })}
    funcBack()
    


 
    
    
   
  return` 
    
  <a class='linkCard' id='${this.id}' >
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
      
    
      return `   
   
      <div class = 'container_conteudo'> 
 
      <div> <a href="moreCard.html"> <i class="icon-arrow fa-solid fa-chevron-left"></i> </a> </div>


   <div class = 'div_conteudo_left'>
  
      <span> <img  class='img_more_poke'src="${this.img}" alt=""></span>
      
      <span class = 'span_id_name'>

      <p>#${this.id}</p>  
       <p>${this.name}</p> 
     
    
     </span>
   </div>


    <div class = 'div_conteudo_right'>

     
      
      
     
      
      <ul class = 'list_base_states'>

      <h1 class = 'base_states'> Base states</h1>
       <li> <b>Hp</b> <p>${this.arrayStats[0].base_stat
       }</p>  </li>
       <li> <b>Attack</b> <p>${this.arrayStats[1].base_stat
       }</p>  </li>
       <li> <b>Defense</b> <p>${this.arrayStats[2].base_stat
       }</p>  </li>
       <li> <b>spacial-Attack </b> <p>${this.arrayStats[3].base_stat
       }</p>  </li>
       <li> <b>spacial-Defense </b> <p>${this.arrayStats[4].base_stat
       }</p>  </li>
      <li> <b>speed </b> <p>${this.arrayStats[5].base_stat
      }</p>  </li>

      </ul>
      
    </div>

    <div> <a href="moreCard.html"> <i class="icon-arrow fa-solid fa-angle-right"></i> </a> </div>


    </div> 
   `
    }


  }
   
   