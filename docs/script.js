let cosas = [
    "Tus ojos",
"Tu sonrisa",
"Tus cachetes",
"Tus labios",
"Tu pelo",
"Tu voz",
"Tu forma de ser",
"Tus abrazos",
"Tus besos",
"Tu amabilidad",
"Tu cariño",
"Tu ternura",
"Tu amor",
"Tu bondad",
"Tu belleza",
"Tu humor",
"Tu brillo",
"Tu sinceridad",
"Tus enojos boludos pero tiernos",
"Tu inteligencia",
"Tus palabras",
"Tu honestidad",
"Tu nariz",
"Tu presencia",
"Tu aura",
"Tus manos",
"Tus piernas",
"Tu sentir",
"Tu forma de amar",
"Tus regalos",
"Tus mimitos",
"Tus acciones",
"Tu felicidad",
"Tu pasión",
"Tu personalidad",
"Tu paz",
"Tus celos",
"Tus ganas",
"Tu olor",
"Tu tacto",
"Tus sentidos",
"Vos",
"Tu cantar",
"Tu consideración ",
"Tu respeto",
"Tu aceptación ",
"Tu perdón ",
"Tus miedos",
"Tu forma de ser posesiva",
"Tus sentimientos",
"Tus alegrías ",
"Tus pasiones ",
"Tus gustos",
"Cuando jugamos roblox",
"Tu ropa",
"Tu calma",
"Tu talento",
"Tus boludeces",
"Cuando salimos a comer panchos",
"Nuestros hijos",
"Tus sueños",
"Tus cambios de humor",
"Tus preguntas boludas",
"Las llamadas que hacemos",
"Las horas de chat que tenemos",
"Las salidas a cualquier lugar",
"Cuando caminamos de la mano",
"Cuando me miras a los ojos (que hermosa que sos)",
"Tu lealtad",
"El brillo de tus ojos",
"Dormir juntitos",
"Tu aroma",
"Cuando cocinamos (cocinas)",
"Cuando miramos stranger things",
"Cuando te hago enojar a propósito (tierna)",
"Cuando me decís te amo",
"Cuando venís a mi casa",
"Cuando voy a tu casa",
"Cuando sueño con vos",
"Tu imaginacion",
"Tu suavidad",
"Cuando te mando franuis",
"Tu encanto",
"Te amo",
"Tu gato",
"Tu hermano (mentira)",
"Cuando me contas tu dia",
"Tus ataques de besos",
"Bueno ahora viene lo bueno",
"Tu cuerpo",
"Tus tetas",
"Tu culo",
"Mentira basta de obscenidades",
"Tu carita hermosa",
"Siempre que me ayudas con cualquier cosa",
"Tu cintura",
"Tu comida",
"Tus gemidos",
"Tu concha",
"basta",
"Tu saber",
"Y bueno podria poner mil cosas mas pero no quiero q te quedes por 2 horas",
"Llegaste hasta el final",
"Te amo mucho mi princesita hermosa",
"Espero que te haya gustado",
"Te amooooooooooooooooooooooooooooooooooo",
""
]

let container = document.getElementById('container');
console.log(container)

let numero = 1;
cosas.forEach(cosa => {
    let a = document.createElement('p');
    a.textContent = `${numero}. ${cosa}`;
    a.classList.add('cosa')

    if (cosa === "") {
        a.classList.add('final')
    }
    if (cosa === "Cuando te hago enojar a propósito (tierna)") {
        let img = document.createElement('img');
        console.log()
        img.src = 'strangerthings.png'
        img.style.width = '100px'

        container.appendChild(img)
    }

    if (cosa === "Tu ropa") {
        let img = document.createElement('img');
        console.log()
        img.src = 'roblox.png'
        img.style.width = '100px'

        container.appendChild(img)
    }

    if (cosa === "Nuestros hijos") {
        let img = document.createElement('img');
        console.log()
        img.src = 'pancho.png'
        img.style.width = '100px'

        container.appendChild(img)
    }

    container.appendChild(a)
    numero += 1
})