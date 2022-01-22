const bodyTag = document.querySelector("body")
const colorButton = document.querySelector(`input[type="color"]`)

colorButton.addEventListener("input", function() {
  bodyTag.style.backgroundColor = this.value
  
})