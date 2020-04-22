const colors = ['red', 'orange', 'white', 'blue', 'gold', 'yellow', 'violet'];

const colorLoop = () => {
    let domString = '';
    for (let i = 0; i < colors.length; i++) {
        //console.log(colors[i]);
        domString += `<h2>${colors[i]}</h2>`;
    }
    //return domString;
    console.log(domString);
}

const init = () => {
//colorLoop();
instructorsLoop();
}

const instructors = [{
    firstName:  'Jay',
    lastName:'Ibrahim'
},
{
    firstName: 'Luke',
    lastName: 'Lancaster'
},
{
    firstName: 'Elias',
    lastName: 'Ibrahim',
}];

const instructorsLoop = () => {
    let domString = '';
    for (let i = 0; i < instructors.length; i++) {
        
        domString += `<h2>${instructors[i].firstName} ${instructors[i].lastName}</h2> `;
    }
    console.log(domString);
}

init();