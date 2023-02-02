class Card {
  constructor(img,name,type,id,arrayStats) {
    this.img = img;
    this.name = name;
    this.type = type; 
    this.id = id
    this.arrayStats = arrayStats
  }
  
  criarCard(){
    
   

  let estiloBackGroud = [];

  
  for( let i = 0 ; i < this.type.length ; i++){

   nameType.push(this.type[i].type.name)
   arrayImgs.push(this.img)
   
  
   
  
  }
  //console.log(arrayImgs);
  console.log(nameType);

  
  
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
    
  <a href = 'moreCard.html' class='linkCard' id = '${this.id}'>
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





    moreInfor(){
      
      let baseStats = []
      
      for (let i = i ; arrayStats.length; i++) {
        
        baseStats.push( arrayStats[i].base_stat)
      }
      console.log(baseStats);
      
      
      
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
       <li> <b>Hp</b> <p>36</p>  </li>
       <li> <b>Attack</b> <p>52</p>  </li>
       <li> <b>Defense</b> <p>43</p>  </li>
       <li> <b>spacial-Attack </b> <p>60</p>  </li>
       <li> <b>spacial-Defense </b> <p>59</p>  </li>
      <li> <b>speed </b> <p>65</p>  </li>

      </ul>
      
    </div>
   `
    }

  }
  
 
   
   