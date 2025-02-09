const jsonPersonagem = `{
    "pesonagem": {
        "nome": "Prodigio",
        "np": 12
    },
    "habilidades": [
        {
            "id": "FOR",
            "nome": "Força",
            "valor": 8,
            "bonus": [],
            "ausente": false
        },
        {
            "id": "VIG",
            "nome": "Vigor",
            "valor": 2,
            "bonus": [],
            "ausente": false
        },
        {
            "id": "AGI",
            "nome": "Agilidade",
            "valor": 6,
            "bonus": [],
            "ausente": false
        },
        {
            "id": "DES",
            "nome": "Destreza",
            "valor": 4,
            "bonus": [],
            "ausente": false
        },
        {
            "id": "LUT",
            "nome": "Luta",
            "valor": 5,
            "bonus": [],
            "ausente": false
        },
        {
            "id": "INT",
            "nome": "Intelecto",
            "valor": 2,
            "bonus": [],
            "ausente": false
        },
        {
            "id": "PRO",
            "nome": "Prontidão",
            "valor": -1,
            "bonus": [],
            "ausente": false
        },
        {
            "id": "PRE",
            "nome": "Presença",
            "valor": 2,
            "bonus": [],
            "ausente": false
        }
    ],
    "defesas": [
        {
            "id": "D001",
            "nome": "Esquiva",
            "valor": 2,
            "bonus": [],
            "idHabi": "AGI",
            "idOpDefesa": "D004",
            "imune": false
        },
        {
            "id": "D002",
            "nome": "Aparar",
            "valor": 4,
            "bonus": [],
            "idHabi": "LUT",
            "idOpDefesa": "D004",
            "imune": false
        },
        {
            "id": "D003",
            "nome": "Fortitude",
            "valor": 1,
            "bonus": [],
            "idHabi": "VIG",
            "idOpDefesa": "D005",
            "imune": false
        },
        {
            "id": "D004",
            "nome": "Resistência",
            "valor": 3,
            "bonus": [],
            "idHabi": "VIG",
            "idOpDefesa": "",
            "imune": false
        },
        {
            "id": "D005",
            "nome": "Vontade",
            "valor": 2,
            "bonus": [],
            "idHabi": "PRO",
            "idOpDefesa": "D003",
            "imune": false
        }
    ],
    "poderes": [
        {
            "nome": "Treinado",
            "idCriacao": "P193e0ffb4ef",
            "e_id": "E020",
            "efeito": "Imunidade",
            "graduacao": 11,
            "acao": 0,
            "alcance": 0,
            "duracao": 0,
            "modificadores": [],
            "descricao": "",
            "defAtaque": false,
            "opt": [
                {
                    "ID": "OP08",
                    "desc": "descritor raro de poder",
                    "valor": 1,
                    "espec": true,
                    "text_desc": "Medo"
                },
                {
                    "ID": "OP21",
                    "desc": "suporte vital",
                    "valor": 10,
                    "espec": false
                }
            ],
            "class": "EfeitoCompra",
            "custo": 6
        },
        {
            "nome": "Repertório da Porrada",
            "efeito": "Efeitos Alternativos",
            "tipo": "E",
            "removivel": 0,
            "custo": 0,
            "classe_manipulacao": "PacotesEfeitos",
            "efeitos": [
                {
                    "nome": "Pancada",
                    "e_id": "E013",
                    "idCriacao": "P193e10070f9",
                    "efeito": "Dano",
                    "graduacao": 10,
                    "acao": 1,
                    "alcance": 1,
                    "duracao": 1,
                    "modificadores": [
                        {
                            "m_id": "E010",
                            "nome": "Descritor Variável",
                            "fixo": true,
                            "custo_base": 1,
                            "limite": 2,
                            "desc": true,
                            "grad": 1,
                            "text_desc": "Marcial"
                        }
                    ],
                    "descricao": "",
                    "defAtaque": false,
                    "class": "EfeitoDano",
                    "bonus": [],
                    "critico": 0,
                    "acerto": 0,
                    "cd": 25,
                    "custo": 11
                },
                {
                    "nome": "Ponto de Pressão",
                    "idCriacao": "P193e117ee34",
                    "e_id": "E001",
                    "efeito": "Aflição",
                    "graduacao": 1,
                    "acao": 1,
                    "alcance": 1,
                    "duracao": 1,
                    "modificadores": [],
                    "descricao": "",
                    "defAtaque": false,
                    "class": "EfeitoAflicao",
                    "acerto": 0,
                    "bonus": [],
                    "critico": 0,
                    "cd": 11,
                    "condicoes": [
                        "Tonto",
                        "Atordoado",
                        "Incapacitado"
                    ],
                    "custo": 1
                }
            ]
        }
    ],
    "pericias": [
        {
            "id": "P001",
            "nome": "Acrobacias",
            "valor": 4,
            "idHab": "AGI",
            "treinado": true,
            "bonus": [],
            "classe": "Pericia"
        },
        {
            "id": "P002",
            "nome": "Atletismo",
            "valor": 0,
            "idHab": "FOR",
            "treinado": true,
            "bonus": [],
            "classe": "Pericia"
        },
        {
            "id": "P003",
            "nome": "Enganação",
            "valor": 2,
            "idHab": "PRE",
            "treinado": false,
            "bonus": [],
            "classe": "Pericia"
        },
        {
            "id": "P004",
            "nome": "Furtividade",
            "valor": 6,
            "idHab": "AGI",
            "treinado": false,
            "bonus": [],
            "classe": "Pericia"
        },
        {
            "id": "P005",
            "nome": "Intimidação",
            "valor": 1,
            "idHab": "PRE",
            "treinado": false,
            "bonus": [],
            "classe": "Pericia"
        },
        {
            "id": "P006",
            "nome": "Intuição",
            "valor": 8,
            "idHab": "PRO",
            "treinado": false,
            "bonus": [],
            "classe": "Pericia"
        },
        {
            "id": "P007",
            "nome": "Investigação",
            "valor": 0,
            "idHab": "INT",
            "treinado": true,
            "bonus": [],
            "classe": "Pericia"
        },
        {
            "id": "P008",
            "nome": "Percepção",
            "valor": 1,
            "idHab": "PRO",
            "treinado": false,
            "bonus": [],
            "classe": "Pericia"
        },
        {
            "id": "P009",
            "nome": "Persuasão",
            "valor": 0,
            "idHab": "PRE",
            "treinado": false,
            "bonus": [],
            "classe": "Pericia"
        },
        {
            "id": "P010",
            "nome": "Prestidigitação",
            "valor": 0,
            "idHab": "DES",
            "treinado": true,
            "bonus": [],
            "classe": "Pericia"
        },
        {
            "id": "P011",
            "nome": "Tecnologia",
            "valor": 0,
            "idHab": "INT",
            "treinado": true,
            "bonus": [],
            "classe": "Pericia"
        },
        {
            "id": "P012",
            "nome": "Tratamento",
            "valor": 0,
            "idHab": "INT",
            "treinado": true,
            "bonus": [],
            "classe": "Pericia"
        },
        {
            "id": "P013",
            "nome": "Veículos",
            "valor": 0,
            "idHab": "DES",
            "treinado": true,
            "bonus": [],
            "classe": "Pericia"
        },
        {
            "id": "PA01",
            "idCriacao": "S193dbb873b6",
            "nome": "Ataque a Corpo-a-Corpo",
            "valor": 8,
            "idHab": "LUT",
            "treinado": false,
            "bonusPoderes": [
                "F1"
            ],
            "escopo": "Golpe de Misericordia",
            "range": false,
            "classe": "PericiaAddAcerto"
        }
    ],
    "vantagens": [
        {
            "id": "V010",
            "nome": "ASSUSTAR",
            "desc": false,
            "txtDec": "",
            "graduado": false,
            "graduacao": 1,
            "limite": 0,
            "idOrigem": "",
            "bonus": [],
            "addByPower": false,
            "alvo_bonus": [],
            "class": "Vantagem"
        },
        {
            "id": "V017",
            "nome": "ATAQUE DE EQUIPE VARIÁVEL",
            "desc": false,
            "txtDec": "",
            "graduado": false,
            "graduacao": 1,
            "limite": 0,
            "idOrigem": "",
            "bonus": [],
            "addByPower": false,
            "alvo_bonus": [],
            "class": "Vantagem"
        },
        {
            "id": "V021",
            "nome": "ATAQUE PODEROSO",
            "desc": false,
            "txtDec": "",
            "graduado": false,
            "graduacao": 1,
            "limite": 0,
            "idOrigem": "",
            "bonus": [],
            "addByPower": false,
            "alvo_bonus": [],
            "class": "Vantagem"
        },
        {
            "id": "V032",
            "nome": "CRÍTICO APRIMORADO",
            "desc": false,
            "txtDec": "",
            "graduado": true,
            "graduacao": 4,
            "limite": 4,
            "idOrigem": "",
            "bonus": [],
            "addByPower": true,
            "alvo_bonus": [],
            "class": "Vantagem"
        },
        {
            "id": "V033",
            "nome": "DE PÉ",
            "desc": false,
            "txtDec": "",
            "graduado": false,
            "graduacao": 1,
            "limite": 0,
            "idOrigem": "",
            "bonus": [],
            "addByPower": false,
            "alvo_bonus": [],
            "class": "Vantagem"
        }
    ],
    "complicacoes": [
        {
            "titulo": "sou ",
            "desc": "forte"
        },
        {
            "titulo": "Desqualificado",
            "desc": "As vezes tem baixa estima por não ser o melhor no que faz"
        }
    ]
}`

