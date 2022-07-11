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

export { template };