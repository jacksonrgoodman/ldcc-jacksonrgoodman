export const cakeDropDownHTML = (snackObj) => {
    return `<option value="${snackObj.toppingId}">${snackObj.topping.name}</option>`
}