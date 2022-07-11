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


export { monthToMonth };