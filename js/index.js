const data = {
    "Tubarão-Baleia": {
      "Curiosities": [
        "O tubarão-baleia é o maior peixe do mundo, podendo atingir até 12 metros de comprimento.",
        "Apesar de seu tamanho, eles se alimentam principalmente de plâncton, pequenos peixes e krill.",
        "Possui uma pele coberta por padrões únicos de manchas que podem ser usados para identificação individual.",
        "É uma espécie de tubarão filtrador, usando suas brânquias para filtrar água e extrair alimentos.",
        "Os tubarões-baleia são conhecidos por migrações sazonais, seguindo padrões de alimentação e reprodução.",
        "Estima-se que eles possam viver até 70 anos.",
        "São uma espécie ameaçada devido à pesca indiscriminada para a obtenção de barbatanas.",
        "O tubarão-baleia é um peixe ovovivíparo, o que significa que os embriões se desenvolvem dentro do corpo da mãe antes de nascerem.",
        "São geralmente solitários, mas podem se reunir em grupos em áreas ricas em alimento."
      ],
      "Image": "img/sharks/Whale_Shark.svg"
    },
    "Tubarão-Martelo": {
      "Curiosities": [
        "Os tubarões-martelo são conhecidos por suas cabeças distintas em forma de 'T'.",
        "Essa forma única da cabeça ajuda na detecção de presas e proporciona uma melhor visão.",
        "Existem várias espécies de tubarões-martelo, incluindo o grande tubarão-martelo, o tubarão-martelo liso e o tubarão-martelo-panã.",
        "Eles são conhecidos por serem excelentes caçadores e nadadores ágeis.",
        "Os tubarões-martelo vivem em uma variedade de habitats, desde águas costeiras até o oceano aberto.",
        "São frequentemente encontrados em águas tropicais e temperadas.",
        "Esses tubarões podem formar grandes escolas durante a migração.",
        "São predadores oportunistas que se alimentam de peixes, raias, lulas e outros invertebrados marinhos.",
        "Algumas espécies de tubarões-martelo estão ameaçadas devido à pesca comercial."
      ],
      "Image": "img/sharks/Whale_Shark.svg"
    },
    "Tubarão-Tigre": {
      "Curiosities": [
        "O tubarão-tigre é conhecido por suas listras escuras e barriga amarelada.",
        "São encontrados em águas tropicais e subtropicais em todo o mundo.",
        "Possuem um comportamento noturno e são frequentemente ativos à noite.",
        "São conhecidos por serem vorazes comedores e se alimentam de uma variedade de presas, incluindo tartarugas marinhas, aves marinhas e outros peixes.",
        "São uma das espécies de tubarões mais agressivas em relação aos seres humanos.",
        "Podem crescer até 5 metros de comprimento.",
        "São vivíparos, com as fêmeas dando à luz filhotes vivos.",
        "Os tubarões-tigre são conhecidos por serem resistentes e podem sobreviver em diferentes tipos de ambientes marinhos."
      ],
      "Image": "img/sharks/Whale_Shark.svg"
    },
    "Tubarão-Limão": {
      "Curiosities": [
        "Os tubarões-limão têm uma coloração amarelo-brilhante e são frequentemente encontrados em águas rasas do Caribe.",
        "São conhecidos por suas grandes nadadeiras dorsais e peitorais.",
        "Geralmente preferem habitats costeiros, mas podem migrar para águas mais profundas.",
        "Possuem um comportamento mais pacífico em relação aos humanos, mas podem se tornar agressivos se provocados.",
        "São vivíparos e dão à luz ninhadas de filhotes que podem variar em tamanho.",
        "São excelentes nadadores e podem viajar longas distâncias em busca de alimento.",
        "Sua dieta inclui uma variedade de peixes, raias e crustáceos.",
        "A pesca comercial e a degradação do habitat são ameaças para a espécie."
      ],
      "Image": "img/sharks/Whale_Shark.svg"
    },
    "Tubarão-Mako": {
      "Curiosities": [
        "O tubarão-mako é um dos tubarões mais velozes, podendo atingir velocidades de até 70 km/h.",
        "São frequentemente encontrados em águas oceânicas profundas, mas também podem se aproximar da costa.",
        "Têm um corpo esguio e uma coloração azul metálica distintiva.",
        "São predadores ágeis que se alimentam principalmente de peixes, incluindo atuns e bonitos.",
        "São vivíparos, dando à luz filhotes já desenvolvidos.",
        "A carne do tubarão-mako é valorizada e é alvo de pesca comercial, o que levou a preocupações de sobrepesca."
      ],
      "Image": "img/sharks/Whale_Shark.svg"
    },
    "Tubarão-Zebra": {
      "Curiosities": [
        "O tubarão-zebra é conhecido por suas listras escuras em um fundo claro, semelhantes a uma zebra.",
        "São encontrados em recifes de coral e áreas costeiras em todo o Indo-Pacífico.",
        "São mais ativos durante o dia e se alimentam de presas como caranguejos, moluscos e pequenos peixes.",
        "São uma espécie relativamente dócil e raramente representam uma ameaça para os seres humanos.",
        "São ovovivíparos, com as fêmeas dando à luz filhotes que medem cerca de 30 centímetros de comprimento.",
        "A degradação dos recifes de coral representa uma ameaça significativa para o habitat do tubarão-zebra."
      ],
      "Image": "img/sharks/Whale_Shark.svg"
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function change(){
    let choose_shark = getRandomInt(Object.keys(data).length);
    let shark = Object.keys(data)[choose_shark];
    
    let choose_curiosity = getRandomInt(data[shark]['Curiosities'].length);
    let curiosity = data[shark]['Curiosities'][choose_curiosity];
    
    let image = data[shark]['Image'];
    
    let shark_name = document.getElementById('shark-name');
    let shark_curiosity = document.getElementById('shark-curiosity');
    let shark_image = document.getElementById('shark-image');

    shark_name.innerHTML  = shark;
    shark_curiosity.innerHTML  = curiosity;
    shark_image.src  = image;
}

change();

let button = document.getElementById('btn-next');

button.addEventListener("click", () => {
    change();
});