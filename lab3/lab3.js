let last = "0"
const keypad = document.querySelector(".keypad")
const display = document.getElementById("screen")
let prev = null
let operator = null
function calculate(a, b, op) {
    const x = Number(a)
    const y = Number(b)

    switch (op) {
        case "+": return x + y
        case "−": return x - y
        case "×": return x * y
        case "÷": return x / y
    }
}

keypad.addEventListener("click", (e) => {
    if (e.target.nodeName !== "BUTTON") return

    const key = e.target.textContent

    switch (key) {
        case "AC":
            last = "0"
            prev = null
            operator = null
            break
        case ".":
            if (!last.includes(".")) {
                last = last + key
            }
            break
        case "+":
        case "−":
        case "×":
        case "÷":
            prev = last
            operator = key
            last = "0"
            console.log(prev, operator)
            break
        case "=":
            if (operator === null) break
            last = String(calculate(prev, last, operator))
            prev = null
            operator = null

            break

        default:
            if (last === "0") {
                last = key

            } else {
                last = last + key
            }
    }

    display.textContent = last
})