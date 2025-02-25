class poderes{
    
    constructor(poderes){
        debugger;

        let table = document.createElement("table");
        $("#poderes").append(table)

        // Passa por todos os poderes
        for(let p in poderes){
            // classifica o tipo de poder
            switch(p.class){
                case "PacotesEfeitos":
                    switch(p.tipo){
                        case "E":
                            break;
                        default:
                            table.appendChild(this.pacoteEfeitos(p))
                    }
                    break;
                case "": 
                    break;
                default:

            }
        }

    }


    pacoteEfeitos(efeito){
        let pacote = document.createElement("table")

        // Cabeçalho
        let header = $("<h1>")
        header.append($("<strong>").text(`${p.nome}`))

    }

    efeitosAlternativos(efeito){
        // cria o main
    }
}