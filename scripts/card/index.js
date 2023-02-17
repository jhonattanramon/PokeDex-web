class Card{constructor(a,b,c,d,e){this.img=a,this.name=b,this.type=c,this.id=d,this.stats=e}criarCard(){let a=[],b=[];for(let b=0;b<this.type.length;b++)a.push(this.type[b].type.name);(a=>{a.push(this.stats)})(arrayStats);(a=>{a.push(this.img)})(arrayImgs);(a=>{a.push(this.name)})(arrayName);return(()=>{a.map(a=>{("water"==a||"ice"==a||"flying"==a)&&b.push("background-image:var(--backGroud-water-ice-flying);"),"fire"==a&&b.push("background-image:var(--backGroud-fire);"),("electric"==a||"fairy"==a)&&b.push("background-image:va(--backGroud-eletric-fairy);"),("grass"==a||"dragon"==a||"bug"==a)&&b.push("background-image:var(--backGroud-gass-dragon-bug);"),("ghost"==a||"rock"==a)&&b.push("background-image:var(  --backGroud-ghost-rock);"),("dark"==a||"psychic"==a)&&b.push("background-image:var(   --backGroud-dark-psychic);"),("poison"==a||"fighting"==a)&&b.push("background-image:var(   --backGroud-poison-fighting);"),"normal"==a&&b.push("background-image:var(     --backGroud-normal);"),("ground"==a||"stell"==a)&&b.push("background-image:var(       --backGroud-ground-stell);")})})(),` 
    
  <a class='linkCard' id='${this.id}' >
  <div class = 'test'>  </div>
    <div style = '${b.map(a=>a)}' class = 'divCard'> 
     
     <div  class = 'headerCard'> <span>${this.name}</span> <span>#${this.id} </span> </div> 
      
      <div class ='conteudoCard'>
      
      <div><img src= '${this.img}'> </div>
      
      <div class ='divSpanType'>  ${a.map(a=>`<span class ='spanType'>${a}</span> `)} </div> 
      </div> 
      
    </div> 
    
  </a>

    `}}class MoreCardClass{constructor(a,b,c,d){this.id=a,this.name=b,this.arrayStats=c,this.img=d}moreInfor(){return console.log("more"),`   
   
      <div class = 'container_conteudo'> 
 
      <div> <a href="index.html"> <i class="icon-arrow fa-solid fa-chevron-left"></i> </a> </div>


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
       <li> <b>Hp</b> <p>${this.arrayStats[0].base_stat}</p>  </li>
       <li> <b>Attack</b> <p>${this.arrayStats[1].base_stat}</p>  </li>
       <li> <b>Defense</b> <p>${this.arrayStats[2].base_stat}</p>  </li>
       <li> <b>spacial-Attack </b> <p>${this.arrayStats[3].base_stat}</p>  </li>
       <li> <b>spacial-Defense </b> <p>${this.arrayStats[4].base_stat}</p>  </li>
      <li> <b>speed </b> <p>${this.arrayStats[5].base_stat}</p>  </li>

      </ul>
      
    </div>

    <div> <a href="index.html"> <i class="icon-arrow fa-solid fa-angle-right"></i> </a> </div>


    </div> 
   `}}