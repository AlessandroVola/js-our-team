console.log(`JS OK!`);

// MILESTONE 0
// crea array dei members
const members = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg'
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg'
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg'
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        img: 'scott-estrada-developer.jpg'
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg'
    },
];

// MILESTONE 1
// stampa su console le informazione fornite dell'array

for (i = 0; i < members.length; i++) {
    console.log(members[i].name);
    console.log(members[i].role);
    console.log(members[i].img);
};

// MILESTONE 2
// stampa le informazioni nel dom

// prendo il container dal DOM
const containerElement = document.querySelector(`.container`);


for (i = 0; i < members.length; i++) {
    addedDom(members[i].name, members[i].role, members[i].img);
}


//funzione che crea le card per ogni persona
function addedDom(name, role, img) {
    let person = `          
    <div>
        <h4>${name}, ${role}</h4>
        <p>${img}</p>
    </div>`;

    // aggiungo al container nel DOM
    containerElement.innerHTML += person;
};


// BONUS 1
// Trasformare la stringa foto in una immagine effettiva

const containerElementPhotos = document.querySelector(`.container-photos`)

function addedDomPlusPhoto(name, role, img) {
    let person = `          
    <div>
        <h4>${name}, ${role}</h4>
        <img src="img/${img}" alt="">
    </div>`;

    // aggiungo al container nel DOM
    containerElementPhotos.innerHTML += person;
};

for (i = 0; i < members.length; i++) {
    addedDomPlusPhoto(members[i].name, members[i].role, members[i].img);
}
