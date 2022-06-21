

const domOn = (selector, event, callback) => {
    document.querySelectorAll(selector).forEach(el => el.addEventListener(event, callback))
}

domOn("#plus", "click", evt => {
    document.querySelector("#global-page").classList.add("hidden");
    document.querySelector("#add-movie").classList.remove("hidden");
})

// formatage de la date
const months = {
    1: "Janvier",
    2: "Février",
    3: "Mars",
    4: "Avril",
    5: "Mai",
    6: "Juin",
    7: "Juillet",
    8: "Août",
    9: "Septembre",
    10: "Octobre",
    11: "Novembre",
    12: "Décembre",
}

const monthToMonth = (date) => {

    const JSdate = new Date(date);
    const day = JSdate.getDate();
    const month = JSdate.getMonth() + 1;
    const year = JSdate.getFullYear();

    const alpahbeticalMonth = months[month]

    const finalDate = {
        day: day,
        month: alpahbeticalMonth,
        year: year
    }

    return finalDate
}


//templating
const template = ({ template: OnWorkingTemp, selectors: selectors, vars: vars }) => {

    const tempToDress = OnWorkingTemp.querySelectorAll(selectors)
    for (const part of tempToDress) {
        Object.keys(vars).forEach(variable => {
            if (part.textContent === variable) {
                part.textContent = vars[variable]
            }
        })
    }
    return OnWorkingTemp
}

const TEMP_MOVIE = document.querySelector("#temp-movie");



domOn("#add-movie-button", "click", () => {
    //attention toujours mettre le clone dans la fonction pour qu'il fasse une copie à chaque fois !
    const clone = TEMP_MOVIE.content.cloneNode(true)
    //récupération formulaire
    const movieTitle = document.querySelector('#title-movie').value
    const viewingDate = document.querySelector('#date').value
    //vous pouvez console.log pour voir ce que vous recevez mais on verra ça dans un autre temps
    const picture = document.querySelector('#picture').files[0];
    const stars = document.querySelector('#star').value

    const finalDate = monthToMonth(viewingDate);

    //templating suite
    const vars = {
        title: movieTitle,
        day: finalDate.day,
        month: finalDate.month,
        year: finalDate.year,
    }

    const templateDone = template({ template: clone, selectors: "p, span", vars: vars })
    //pour une image générique
    templateDone.querySelector(".image").src = "./assets/grave.jpg"
    document.querySelector("#home").appendChild(templateDone)

    //pour voir le résultat, c'est mieux quand même :)
    document.querySelector("#global-page").classList.remove("hidden");
    document.querySelector("#add-movie").classList.add("hidden");

})






