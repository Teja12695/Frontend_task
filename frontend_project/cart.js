function show(selectedBox) {
    document.querySelectorAll('.cards').forEach(box => {
      if (box === selectedBox) {
        box.classList.toggle('visible')
      }
      else {
        box.classList.remove('visible')
      }
    })}

const cards = document.querySelectorAll('.cards')

cards.forEach(card => {
    card.addEventListener('click', function () {
      const radio = this.querySelector('input[type="radio"]')
      if (radio) {
        radio.checked = true
      }
  })})
