
//função para ler o tamanho da tela(Inicio)
var height = 0
var width = 0
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500

/*Obs: variavel para recuperar o parâmetro de nível desejado*/
/*obs: utilizando o método replace para excluir o sinal de (???)*/
var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    criaMosquitoTempo = 1500
} else if(nivel === 'dificil'){
    criaMosquitoTempo = 1000
}else if(nivel === 'chuck-norris'){
    criaMosquitoTempo = 750
}


function ajustaTamanhoPalcoJogo() {
    height = window.innerHeight
    width = window.innerWidth

    console.log(height, width)
}

ajustaTamanhoPalcoJogo()
//função para ler o tamanho da tela(Término)

/*Criação do cronometro com o setInterval

var cronometro = setinterval(acão, tempo de intervalo 
    recorrente para um determinado processo) {
}
Obs: o innerHTML insere um valor  entre as tag, neste caso o span*/
var cronometro = setInterval(function() {
    tempo -= 1
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
    }, 1000)

function posicaoRandomica() {

    //remover o mosquito anterior(caso exista)
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        if(vidas > 3) {
            //alert('Game Over')
            window.location.href = 'game_over.html'
        }else {
        /*Obs: selecionando elementos pelo ID para
        alterar o IMG após um evento(remocõa do mosquito)*/
        //console.log('life' + vidas)
        document.getElementById('life' + vidas).src = 'imagens/coracao_vazio.png'

         vidas++
        }
    }
        //console.log('Elemento selecionado foi: v' + vidas)
    // variaveis para ler cordenadas de modo dinâmico
    var posicaox = Math.floor(Math.random() * width)  - 90
    var posicaoy = Math.floor(Math.random() * height) - 90
    

    /**usando um operador ternario para imagem não sair
     dos limites da tela**/
    posicaox = posicaox < 0 ? 0 : posicaox
    posicaoy = posicaoy < 0 ? 0 : posicaoy
   

    console.log(posicaox, posicaoy)

    //Criar o elemento HTML, usando o DOM.
    var mosquito = document.createElement('img')

    //acessando o elemento através do atributo src
    mosquito.src = 'imagens/mosquito.png'

    //acessando a imagem com estilo css
    /*Obs: o espaço entre as classes é para o interpretador
    entender que são duas classes diferentes*/ 
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()

    //acessando os atributos de estilo do elemento html
    mosquito.style.left = posicaox + 'px'
    mosquito.style.top =  posicaoy + 'px'

    //Obs: para aplicar as cordenadas o elemento precisa ser absoluto
    mosquito.style.position = 'absolute'

    //id nosquito para controlar a criação e remoção do elemento
    mosquito.id = 'mosquito'

    /*Uso do onclick para matar o mosquito antes de um
    tempo pré-estabelecido Obs: o this 
    indica qual é o elemento*/
    mosquito.onclick = function() {
        this.remove()
    }
    

    //acessando o body e incluindo a imagem com o método append
    //Child = criando um filho para o body
    document.body.appendChild(mosquito)

    /**Obs: cria mosquitos de vários tamanhos
    console.log(tamanhoAleatorio())**/

    /** Obs: inverte a posição do eixo do mosquito
    console.log(ladoAleatorio())**/
}

//função para criar vários tamanhos de mosquito
function tamanhoAleatorio() {
    //Obs:math.random produz números aleatórios de 0 até 1
    var classe = Math.floor(Math.random() * 3)
    console.log(classe)

    /**switch para definir o tamanho de mosquito que irá 
    aparecer na tela**/
    switch(classe) {
        case 0:
            return 'mosquito1'
        
        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

//funcão para inverter a posicão do mosquito
function ladoAleatorio() {
   var classe = Math.floor(Math.random() * 2 )

   switch(classe) {
    case 0: 
    return 'ladoA'

    case 1:
        return 'ladoB'
   }
}
