const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarinformacoesGlobais(){
  cost res =await fetch(URL)
  const dado = await res.jon()
  console.log(dados);
  cost paragrafo = document.createElement('p')  
  prargrafo.classlist.add('graficos-container_texto')

paragrafo.innerHTML = 'Você sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas e que aproximadamente ${dados.total_pessoas_conectadas} estão conectadas em alguma rede social e passam em média ${dados.tempo_medio} horas conectados.'    
const container = doument = Document.grtElementById('graficos_container')    
container.appendChild(paragrafo)                                                                                                                                                                                                               "
}

vizualizarinformacoesGlobais()