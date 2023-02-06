  let api;
  let arrayUrlPokemon = [];

  const resultApi = async () => {

    await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').then((res) =>
    {
      res.json().then((response) => {

        const arrayResults = response.results

        arrayResults.map((obj) => arrayUrlPokemon.push(obj.url))

      })

    }).catch((error) => alert(` Error de conexão com o servidor: ${error}
 `))
 
  } // fim da função 
  resultApi()






  setTimeout(() => {
    
    
    if (arrayUrlPokemon.length != 0) {
      gerarCard()
    };
    
  }, 100)