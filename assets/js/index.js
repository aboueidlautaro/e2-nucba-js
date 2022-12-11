import pizzas from "./pizzas.js"

const btnSubmit = document.querySelector("#btnSubmit")
const inputNumberId = document.querySelector(".numberId")
const pizzaContainer = document.querySelector(".pizzaResult__container")
const background = document.querySelector(".result__container")

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault()
  renderPizzas(pizzas)
})

const renderPizzas = (pizzas) => {
  background.style.display = "block"

  pizzas.forEach((pizza) => {
    if (inputNumberId.value.toString() === pizza.id.toString()) {
      background.style.background = "rgba(247, 223, 30, 0.1)"
      pizzaContainer.innerHTML = `
        <img src="${pizza.image}" alt="${pizza.name}"/>
        <h2>Pizza ${pizza.name}</h2>
        <h3>$${pizza.price}</h3>
        `
    } else if (inputNumberId.value === "") {
      background.style.background = "rgba(255,0,0,0.1)"
      pizzaContainer.innerHTML = `
            <h2>Por favor, ingresa un número</h2>
            `
    } else if (inputNumberId.value > pizzas.length) {
      background.style.background = "rgba(255,0,0,0.1)"
      pizzaContainer.innerHTML = `
            <h2>No se encontró la pizza con id ${inputNumberId.value}</h2>
            `
    }
  })
}
