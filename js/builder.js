

class builder{
    personageJs = JSON.parse(jsonPersonagem)
    constructor(){
        this.metaInfo()
        const hab = new habilidades(this.personageJs.habilidades)
        const def = new defesas(this.personageJs.defesas)
        const van = new vantagem(this.personageJs.vantagens)
        const per = new pericias(this.personageJs.pericias)

        this.customCSS()
    }

    metaInfo(){
        var personage = this.personageJs.pesonagem
        // Nome, NP e Imagem
        document.title = personage.nome;
        $(".name").text(personage.nome)
        $(".np").text(personage.np)
    }

    customCSS(){
        $('h2').css("text-transform", "uppercase")
    }
}

class habilidades{
    constructor(habilidades){
        const table = document.createElement("table");
        $("#habilidades").append(table)

        var h1 = document.createElement('tr')
        var content = document.createElement('tr')
        habilidades.forEach((hab, index) => {
            if(index == habilidades.length / 2 || index == 0){
                h1 = document.createElement('tr')
                content = document.createElement('tr')

                table.appendChild(h1);
                table.appendChild(content);
            }

            $(h1).append(`<th>${hab.nome}</th>`)
            $(content).append(`<td>${hab.valor}</td>`)
        });
        
    }
}

class defesas{
    constructor(defesas){
        var table = document.createElement("table");
        $("#defesas").append(table)

        var h1 = document.createElement('tr')
        var content = document.createElement('tr')
        table.appendChild(h1);
        table.appendChild(content);

        defesas.forEach((def) => {
            $(h1).append(`<th>${def.nome}</th>`)
            $(content).append(`<td>${def.valor}</td>`)
        });
    }
}

class vantagem{
    constructor(vantagens){
        const girVant = document.createElement("div")
        const title = document.createElement('h2')

        $("#vantagens").append(title)
        $("#vantagens").append(girVant)        

        $(title).text('Vantagens')        

        $(girVant).addClass('splitGrid')
        const leftGrid = document.createElement('div')
        const rightGrid = document.createElement('div')
        girVant.appendChild(leftGrid)
        girVant.appendChild(rightGrid)


        vantagens.forEach((van, index) => {
            var itemVan = document.createElement('p');

            $(itemVan).text(`${van.nome}
                ${van.graduado ? `[${van.graduacao}]` : ''          /* Inclui Graduação*/}
                ${van.txtDec.length > 0 ? `(${van.txtDec})` : ''    /* Inclui Descrição*/}
            `)

            if(index < vantagens.length / 2){
                leftGrid.appendChild(itemVan);
            }else{
                rightGrid.appendChild(itemVan);
            }
        });
    }
}

class pericias{
    constructor(pericias){
        const girVant = document.createElement("div")
        const title = document.createElement('h2')

        $("#pericias").append(title)
        $("#pericias").append(girVant)        

        $(title).text('Pericias')        

        $(girVant).addClass('splitGrid')
        const leftGrid = document.createElement('div')
        const rightGrid = document.createElement('div')
        girVant.appendChild(leftGrid)
        girVant.appendChild(rightGrid)

        // Ordenação por nome
        pericias = pericias.sort((a, b) => (a.nome).localeCompare(b.nome))

        pericias.forEach((per, index) => {
            let itemPeri = document.createElement('p');

            $(itemPeri).text(` ${per.nome}
                ${per.escopo ? `(${per.escopo})` : '' /* Incementa especificação */}
                [${per.valor}]
            `)

            if(index < pericias.length / 2){
                leftGrid.appendChild(itemPeri);
            }else{
                rightGrid.appendChild(itemPeri);
            }
        });
    }
}

$(document).on("DOMContentLoaded", () => new builder())