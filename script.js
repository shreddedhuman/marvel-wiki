const superheroes = [
    { nombre: "Spider-Man", imagen: "./imagenes/spiderman.jpg", poder: "Telaraña", tipo: "heroe", clase: "cientifico", año: "2014", descripcion: "Peter Parker, un estudiante de secundaria, se convierte en Spider-Man después de ser picado por una araña radiactiva." },
    { nombre: "Iron Man", imagen: "./imagenes/ironman.webp", poder: "Tecnología", tipo: "heroe", clase: "tecnologico", año: "2014", descripcion: "Tony Stark, un genio multimillonario, se convierte en Iron Man después de crear un traje blindado de alta tecnología." },
    { nombre: "Capitán América", imagen: "./imagenes/captainamerica.jpg", poder: "Superfuerza", tipo: "heroe", clase: "fuerza", año: "2014", descripcion: "Steve Rogers se convierte en el super soldado conocido como Capitán América durante la Segunda Guerra Mundial." },
    { nombre: "Thor", imagen: "./imagenes/thor.jpg", poder: "Control del Trueno", tipo: "heroe", clase: "cosmico", año: "2014", descripcion: "Thor es el dios del trueno y el protector de Asgard." },
    { nombre: "Hulk", imagen: "./imagenes/hulk.jpg", poder: "fuerza Sobrehumana", tipo: "heroe", clase: "cientifico", año: "2014", descripcion: "Bruce Banner se convierte en Hulk después de ser irradiado por una explosión de rayos gamma." },
    { nombre: "Wolverine", imagen: "./imagenes/wolverine.jpg", poder: "Regeneración y Garras de Adamantium", tipo: "heroe", clase: "fuerza", año: "2014", descripcion: "Wolverine es un mutante con la capacidad de regenerar y garras retráctiles de adamantium." },
    { nombre: "Deadpool", imagen: "./imagenes/deadpool.jpg", poder: "Regeneración y Habilidades de Combate", tipo: "heroe", clase: "fuerza", año: "2014", descripcion: "Deadpool es conocido por su regeneración rápida y su sentido del humor irreverente." },
    { nombre: "Doctor Strange", imagen: "./imagenes/doctorstrange.jpg", poder: "Magia y Hechizos", tipo: "heroe", clase: "mistico", año: "2015", descripcion: "Stephen Strange es un cirujano que se convierte en el Hechicero Supremo después de un accidente." },
    { nombre: "Black Widow", imagen: "./imagenes/blackwidow.jpg", poder: "Habilidades de Espionaje", tipo: "heroe", clase: "tecnologico", año: "2015", descripcion: "Natasha Romanoff es una espía con habilidades de combate y espionaje excepcionales." },
    { nombre: "Black Panther", imagen: "./imagenes/blackpanther.jpg", poder: "Habilidades de Combate y Agilidad", tipo: "heroe", clase: "fuerza", año: "2014", descripcion: "T'Challa es el rey de Wakanda y tiene habilidades sobrehumanas debido a la hierba en forma de corazón." },
    { nombre: "Venom", imagen: "./imagenes/venom.jpg", poder: "Simbionte", tipo: "villano", clase: "cosmico", año: "2015", descripcion: "Venom es un simbionte alienígena que se une con varios huéspedes, incluido Eddie Brock." },
    { nombre: "Magneto", imagen: "./imagenes/magneto.jpg", poder: "Control del Magnetismo", tipo: "villano", clase: "mutante", año: "2015", descripcion: "Magneto es un mutante con la capacidad de controlar el magnetismo." },
    { nombre: "Star-Lord", imagen: "./imagenes/starlord.jpg", poder: "Tecnología y Combate", tipo: "heroe", clase: "tecnologico", año: "2014", descripcion: "Peter Quill es un aventurero espacial y líder de los Guardianes de la Galaxia." },
    { nombre: "Gamora", imagen: "./imagenes/gamora.jpg", poder: "Habilidades de Combate", tipo: "heroe", clase: "cosmico", año: "2014", descripcion: "Gamora es una asesina y miembro de los Guardianes de la Galaxia." },
    { nombre: "Rocket Raccoon", imagen: "./imagenes/rocket.jpg", poder: "Inteligencia y Tecnología", tipo: "heroe", clase: "tecnologico", año: "2015", descripcion: "Rocket es un mapache genéticamente mejorado con un talento para la tecnología." },
    { nombre: "Groot", imagen: "./imagenes/groot.jpg", poder: "Regeneración y Control de Plantas", tipo: "heroe", clase: "cosmico", año: "2015", descripcion: "Groot es un Flora Colossus con la habilidad de regenerarse y controlar las plantas." },
    { nombre: "Thanos", imagen: "./imagenes/thanos.jpg", poder: "Eternidad y Guantelete del Infinito", tipo: "villano", clase: "cosmico", año: "2016", descripcion: "Thanos es un supervillano cósmico obsesionado con el poder y el equilibrio en el universo." },
    { nombre: "Daredevil", imagen: "./imagenes/daredevil.jpg", poder: "Sentidos Mejorados y Combate", tipo: "heroe", clase: "fuerza", año: "2015", descripcion: "Matt Murdock, un abogado ciego, se convierte en Daredevil con sentidos mejorados." },
    { nombre: "Elektra", imagen: "./imagenes/elektra.jpg", poder: "Habilidades de Asesina", tipo: "heroe", clase: "fuerza", año: "2015", descripcion: "Elektra es una asesina letal con habilidades en artes marciales y sigilo." },
    { nombre: "Punisher", imagen: "./imagenes/punisher.jpg", poder: "Habilidades de Combate y Armas", tipo: "heroe", clase: "fuerza", año: "2014", descripcion: "Frank Castle, un ex-marine, busca venganza como Punisher usando habilidades de combate y armas avanzadas." },
    { nombre: "Storm", imagen: "./imagenes/storm.jpg", poder: "Control del Clima", tipo: "heroe", clase: "mutante", año: "2014", descripcion: "Storm es una mutante con la capacidad de controlar el clima y es miembro de los X-Men." },
    { nombre: "Cyclops", imagen: "./imagenes/cyclops.jpg", poder: "Rayos Ópticos", tipo: "heroe", clase: "mutante", año: "2016", descripcion: "Cyclops es el líder de los X-Men y emite rayos ópticos por sus ojos." },
    { nombre: "Vision", imagen: "./imagenes/vision.jpg", poder: "Sintezoides", tipo: "heroe", clase: "tecnologico", año: "2014", descripcion: "Vision es un sintezoide con habilidades sobrehumanas y miembro de los Vengadores." },
    { nombre: "Ultron", imagen: "./imagenes/ultron.jpg", poder: "Inteligencia y Tecnología", tipo: "villano", clase: "cientifico", año: "2015", descripcion: "Ultron es una inteligencia artificial maliciosa y enemigo de los Vengadores." },
    { nombre: "Loki", imagen: "./imagenes/loki.jpg", poder: "Trickster y Magia", tipo: "villano", clase: "mistico", año: "2016", descripcion: "Loki es el dios de la travesura y hermano adoptivo de Thor." },
    { nombre: "Hela", imagen: "./imagenes/hela.jpg", poder: "Diosa de la Muerte", tipo: "villano", clase: "cosmico", año: "2017", descripcion: "Hela es la diosa de la muerte y enemiga de Thor." },
    { nombre: "Thor (Jane Foster)", imagen: "./imagenes/thorjanefoster.jpg", poder: "Control del Trueno", tipo: "heroe", clase: "mistico", año: "2015", descripcion: "Jane Foster toma el manto de Thor y controla el trueno." },
    { nombre: "Doctor Octopus", imagen: "./imagenes/doctoroctopus.jpg", poder: "Tecnología y Tentáculos Mecánicos", tipo: "villano", clase: "tecnologico", año: "2017", descripcion: "Doctor Octopus es un villano con tentáculos mecánicos y enemigo de Spider-Man." },
    { nombre: "Green Goblin", imagen: "./imagenes/greengoblin.jpg", poder: "Tecnología y Locura", tipo: "villano", clase: "tecnologico", año: "2017", descripcion: "Green Goblin es un villano con tecnología avanzada y enemigo de Spider-Man." },
    { nombre: "Miles Morales", imagen: "./imagenes/milesmorales.jpg", poder: "Camuflaje y Telaraña", tipo: "heroe", clase: "cientifico", año: "2016", descripcion: "Miles Morales es otro Spider-Man con habilidades similares a las de Peter Parker." },
    { nombre: "Ghost Rider", imagen: "./imagenes/ghostrider.jpg", poder: "Espíritu de la Venganza", tipo: "heroe", clase: "mistico", año: "2016", descripcion: "Ghost Rider es un héroe con una calavera en llamas y el espíritu de la venganza." },
    { nombre: "Blade", imagen: "./imagenes/blade.jpg", poder: "Cazavampiros", tipo: "heroe", clase: "fuerza", año: "2017", descripcion: "Blade es un cazador de vampiros con habilidades sobrehumanas." },
    { nombre: "Captain Marvel (Carol Danvers)", imagen: "./imagenes/captainmarvelcaroldanvers.jpg", poder: "Poder Cósmico", tipo: "heroe", clase: "cosmico", año: "2019", descripcion: "Carol Danvers se convierte en Captain Marvel con poderes cósmicos." },
    { nombre: "Ms Marvel", imagen: "./imagenes/msmarvel.jpg", poder: "Cambios de Forma", tipo: "heroe", clase: "cosmico", año: "2015", descripcion: "Ms. Marvel tiene la capacidad de cambiar de forma y es una Vengadora." },
    { nombre: "Spider-Gwen", imagen: "./imagenes/spidergwen.jpg", poder: "Telaraña y Agilidad", tipo: "heroe", clase: "cientifico", año: "2015", descripcion: "Spider-Gwen es Gwen Stacy con habilidades similares a las de Spider-Man." },
    { nombre: "Archangel", imagen: "./imagenes/archangel.jpg", poder: "Alas Metálicas y Habilidades de Combate", tipo: "heroe", clase: "mutante", año: "2017", descripcion: "Archangel es un mutante con alas metálicas y miembro de los X-Men." },
    { nombre: "Quake", imagen: "./imagenes/quake.jpg", poder: "Control de Terremotos", tipo: "heroe", clase: "cientifico", año: "2016", descripcion: "Quake tiene la capacidad de controlar terremotos y trabaja para S.H.I.E.L.D." },
    { nombre: "Cable", imagen: "./imagenes/cable.jpg", poder: "Tecnología y Viaje en el Tiempo", tipo: "heroe", clase: "mutante", año: "2017", descripcion: "Cable es un mutante con tecnología avanzada y la capacidad de viajar en el tiempo." },
    { nombre: "Domino", imagen: "./imagenes/domino.jpg", poder: "Suerte y Habilidades de Combate", tipo: "heroe", clase: "mutante", año: "2018", descripcion: "Domino tiene una suerte sobrenatural y es experta en combate." },
    { nombre: "Red Hulk", imagen: "./imagenes/redhulk.jpg", poder: "fuerza y Durabilidad", tipo: "heroe", clase: "cientifico", año: "2016", descripcion: "Red Hulk es una versión de Hulk con inteligencia estratégica." },
    { nombre: "Taskmaster", imagen: "./imagenes/taskmaster.jpg", poder: "Habilidades de Copia", tipo: "villano", clase: "fuerza", año: "2017", descripcion: "Taskmaster tiene la habilidad de copiar las habilidades de sus oponentes." },
];

function mostrarSuperheroes(superheroes) {
    const superheroesSection = document.getElementById("superheroesLista");
    superheroesSection.innerHTML = "";

    superheroes.forEach(superheroe => {
        const superheroeCard = document.createElement("div");
        superheroeCard.classList.add("superheroe-card");

        superheroeCard.classList.add(superheroe.tipo === 'heroe' ? 'herocard' : 'villanocard');

        superheroeCard.innerHTML = `
            <img src="${superheroe.imagen}" alt="${superheroe.nombre}">
            <h3>${superheroe.nombre}</h3>
            <img id="clase-logo" src="${superheroe.clase}.png" alt="${superheroe.clase}">
            <img id="clase-tipo" src="${superheroe.tipo === 'heroe' ? 'heroe.png' : 'villano.png'}" alt="${superheroe.tipo}">
            <p>Poder: ${superheroe.poder}</p>
            <p>Año de Aparición: ${superheroe.año}</p>
            <p>${superheroe.descripcion}</p>
        `;

        superheroesSection.appendChild(superheroeCard);
    });
}

function filtrarSuperheroes(superheroes, filtroNombre, filtroTipo, filtroClase, filtroAño) {
    const filtroNombreLowerCase = filtroNombre.toLowerCase();
    const filtroTipoLowerCase = filtroTipo.toLowerCase();
    const filtroClaseLowerCase = filtroClase.toLowerCase();
    const filtroAñoLowerCase = filtroAño.toLowerCase();

    return superheroes.filter(superheroe => {
        const nombre = superheroe.nombre.toLowerCase();
        const tipo = superheroe.tipo.toLowerCase();
        const clase = superheroe.clase.toLowerCase();
        const año = superheroe.año.toLowerCase();

        return (
            nombre.includes(filtroNombreLowerCase) &&
            tipo.includes(filtroTipoLowerCase) &&
            clase.includes(filtroClaseLowerCase) &&
            año.includes(filtroAñoLowerCase)
        );
    });
}

document.getElementById("filtroNombre").addEventListener("input", () => {
    const filtroAño = document.getElementById("filtroAño").value;
    const filtroNombre = document.getElementById("filtroNombre").value;
    const filtroTipo = document.getElementById("filtroTipo").value;
    const filtroClase = document.getElementById("filtroClase").value;

    const superheroesFiltrados = filtrarSuperheroes(superheroes, filtroNombre, filtroTipo, filtroClase, filtroAño);

    mostrarSuperheroes(superheroesFiltrados);
});

document.getElementById("filtroTipo").addEventListener("change", () => {
    const filtroAño = document.getElementById("filtroAño").value;
    const filtroNombre = document.getElementById("filtroNombre").value;
    const filtroTipo = document.getElementById("filtroTipo").value;
    const filtroClase = document.getElementById("filtroClase").value;

    const superheroesFiltrados = filtrarSuperheroes(superheroes, filtroNombre, filtroTipo, filtroClase, filtroAño);

    mostrarSuperheroes(superheroesFiltrados);
});

document.getElementById("filtroClase").addEventListener("change", () => {
    const filtroAño = document.getElementById("filtroAño").value;
    const filtroNombre = document.getElementById("filtroNombre").value;
    const filtroTipo = document.getElementById("filtroTipo").value;
    const filtroClase = document.getElementById("filtroClase").value;

    const superheroesFiltrados = filtrarSuperheroes(superheroes, filtroNombre, filtroTipo, filtroClase, filtroAño);

    mostrarSuperheroes(superheroesFiltrados);
});

document.getElementById("filtroAño").addEventListener("input", () => {
    const filtroAño = document.getElementById("filtroAño").value;
    const filtroNombre = document.getElementById("filtroNombre").value;
    const filtroTipo = document.getElementById("filtroTipo").value;
    const filtroClase = document.getElementById("filtroClase").value;

    const superheroesFiltrados = filtrarSuperheroes(superheroes, filtroNombre, filtroTipo, filtroClase, filtroAño);

    mostrarSuperheroes(superheroesFiltrados);
});

mostrarSuperheroes(superheroes);