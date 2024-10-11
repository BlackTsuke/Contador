const numero = document.querySelector('.numero')
const btns = document.querySelectorAll('.btn')

let num = 0

class Buttons {
  constructor() {
    btns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList
        if (styles.contains('decrementar')) {
          num--
        } else if (styles.contains('incrementar')) {
          num++
        } else {
          num = 0
        }
        numero.textContent = num
        if (num > 0) {
          numero.style.color = 'green'
        } else if (num < 0) {
          numero.style.color = 'red'
        } else {
          numero.style.color = 'black'
        }
      })
    })
  }
}

const buttons = new Buttons()