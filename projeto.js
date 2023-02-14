const livrosDisp = ["Percy jackson", "Jantar Secreto", "Harry Potter"];
const livrosPend = [];
totalDev = 0;

saida()

function saida() {
    let disponiveis = "";
    let pendentes = "";
    let levelLeitor = "";
    for (let i = 0; i < livrosDisp.length; i++) {
        disponiveis += (i + 1) + " - " + livrosDisp[i] + "<br>";
    }
    for (let i = 0; i < livrosPend.length; i++) {
        pendentes += (i + 1) + " - " + livrosPend[i] + "<br>";
    }

    switch(totalDev){
        case 0:
        case 1:
        case 2:
            levelLeitor = "Iniciante"
            break
        case 3:
        case 4:
        case 5:
            levelLeitor = "Experiente"
            break
        case 6:
        case 7:
        case 8:
            levelLeitor = "Profissional"
            break
        default:
            levelLeitor = "Mestre" 
    }

    document.getElementById("levelLeitor").innerHTML = levelLeitor;
    document.getElementById("pendentes").innerHTML = pendentes;
    document.getElementById("disponiveis").innerHTML = disponiveis;
    document.getElementById("totalDev").innerHTML = totalDev;
    document.getElementById("totalDisp").innerHTML = livrosDisp.length;
    document.getElementById("totalPend").innerHTML = livrosPend.length;
}

function cadLivro() {
    let continuar = "";
    do {
        let novoLivro = prompt("Digite o nome do livro que vai ser cadastrado")
        livrosDisp.push(novoLivro);
        continuar = prompt("Deseja continuar?[s/n]")
    } while (continuar == "s")
    saida()
}

function pegarLivro() {
    let nLivro = Number(prompt("Digite o número livro que deseja pegar"));
    if (nLivro < livrosDisp.length + 1 && nLivro > 0) {
        livrosPend.push(livrosDisp[nLivro - 1]);
        livrosDisp.splice(nLivro - 1, 1);
        saida()
    } else {
        alert("Número invalido")
        saida()
    }

}

function devolverLivro() {
    let nLivro = Number(prompt("Digite o número do livro que deseja devolver"));
    if (nLivro < livrosPend.length + 1 && nLivro > 0) {
        livrosDisp.push(livrosPend[nLivro - 1])
        livrosPend.splice(nLivro - 1, 1)
        totalDev++;
        saida()
    } else {
        alert("Número Invalido")
        saida()
    }
}
