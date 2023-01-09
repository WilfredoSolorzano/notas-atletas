let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];
   let MatrizDeNotas = atletas.map(function(atleta){
       return atleta.notas.sort()
   })
   let MediasDasNotas = MatrizDeNotas.map(function(notas){
       let NotasAtleta = notas.slice(1,4)
       let soma= 0 
       NotasAtleta.forEach(function(nota){
           soma = nota +soma 
       })
       return soma/(NotasAtleta.length)
   
   })
   for (let i = 0; i < atletas.length; i++){
       console.log(`Atleta: ${atletas[i].nome}`)
       console.log(`Notas Obtidas: ${MatrizDeNotas[i]}` )
       console.log( `Notas Obtidas: ${MediasDasNotas[i]}` )
       console.log( '----------------')
   }