const buttons = document.querySelectorAll('.btn')

const ratingPage = document.querySelector('.container')
const thanksPage = document.querySelector('.thanks')
const submitBtn = document.querySelector('.submit-btn')
const selectedText = document.querySelector('.selected')

let selectedRating = null

buttons.forEach(button => {
    button.addEventListener('click', function(){
        buttons.forEach(b => b.classList.remove('selected-btn'))
        button.classList.add('selected-btn')
        selectedRating = button.textContent;
    })
})

submitBtn.addEventListener('click', function(){

    setTimeout(() => {
        if (selectedRating) {
            selectedText.textContent = `You selected ${selectedRating} out of 5`
            ratingPage.style.display = 'none';
            thanksPage.style.display = 'flex'
        }
    }, 100)
    
})