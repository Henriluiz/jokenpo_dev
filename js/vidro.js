document.getElementById("inicial").onclick = function() {
    this.style.display = 'none'; // Esconde o botão
    document.getElementById("content").style.display = "none";
    document.getElementById("jogo").style.display = "flex";
    // Chama a função para mostrar o input da idade
}

function recarregarPagina() {
    location.reload(); // Recarrega a página
}



let rodada = 0
let perdeu = false
function jogar(jogada) {
    event.preventDefault(); // Impede o envio do formulários

    pisoQuebrado = Math.floor(Math.random()*3) + 1

    if (rodada == 10){
        document.getElementById("resultado").innerHTML = `<style>.resultado {
            background-color: #8FBC8F;
            margin-inline: 1rem;
            font-size: medium;
            h2 {
                margin-botton: 0.2rem;
            }
            p {
                color: green;
            }
            .perdeu {    
                text-decoration:line-through;
            }
            }</style><h2>Você ganhou! Parabêns!</h2><p>Você chegou até ao nível 10<br>Jogue novamente!</p>`
            rodada = 0
            perdeu = false
    } else {

        if (jogada == pisoQuebrado) {
            document.getElementById("resultado").innerHTML = `<style>.resultado {
                background-color: #4F4F4F;
                margin-inline: 1rem;
                font-size: medium;
                h2 {
                    margin-botton: 0.2rem;
                }
                p {
                    color: red;
                }
                .perdeu {    
                    text-decoration:line-through;
                }
                }</style><h2>Resultado:</h2><p>Sua escolha: ${jogada}<br>Vidro quebrado: ${pisoQuebrado}<br>Máximo: ${rodada-1} nível</p><p class="perdeu">Você caiu! e perdeu!</p>`

            rodada = 0
            perdeu = false
        }
        else {
            document.getElementById("resultado").innerHTML = `<style>.resultado {
            background-color: #4F4F4F;
            margin-inline: 1rem;
            font-size: medium;
            h2 {
                margin-botton: 0.1rem;
            }
            }</style><h2>Resultado:</h2><p>Você passou por nível <strong>${rodada}</strong><br> o vidro quebrado estava em ${pisoQuebrado}</p>`
        }
    }
    rodada += 1
}
