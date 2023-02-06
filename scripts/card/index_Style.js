 
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
    