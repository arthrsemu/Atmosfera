console.log("JavaScript conectado!");

alert("Pagina está funcionando! ");

const botao = document.getElementById("botao-surpresa");
const mensagem = document.getElementById("mensagem-surpresa");

let aberta = false;

botao.addEventListener("click", function() {

    if (aberta === false) {

        mensagem.textContent =
            "Se eu pudesse guardar um lugar favorito, seria qualquer lugar ao teu lado. ❤️";

        botao.textContent = "Fechar surpresa";

        aberta = true;

    } else {

        mensagem.textContent = "";

        botao.textContent = "Descobrir ";

        aberta = false;

    }

});


const inicio = new Date(2026, 6, 30, 9, 34, 58);

const contador = document.getElementById("tempo-juntos");


function atualizarContador() {

    const agora = new Date();

    const diferenca = agora - inicio;

    const segundosTotais = Math.floor(diferenca / 1000);

    const dias = Math.floor(segundosTotais / 86400);

    const horas = Math.floor((segundosTotais % 86400) / 3600);

    const minutos = Math.floor((segundosTotais % 3600) / 60);

    const segundos = segundosTotais % 60;


    contador.textContent =
        `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos `;

}


atualizarContador();

setInterval(atualizarContador, 1000);
