document.addEventListener('DOMContentLoaded', () => {

const formInput = document.querySelectorAll('.form-input')
const form = document.querySelector('form')

function validation(forms) {
    let result = true

    forms.querySelectorAll('.form-input').forEach(item => {
        
        if(item.value == ''){
            item.classList.add('form-input--invalid')
            item.classList.remove('form-input--valid')
            result = false
        }else{
            item.classList.add('form-input--valid')
            item.classList.remove('form-input--invalid')
        }

    });

    return result
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if(validation(form) == true){
        form.reset()
    }

})


const cookie = document.querySelector('.cookie')
const cookieBtn = document.querySelector('.cookie__button')

cookieBtn.addEventListener('click', (e) => {
    e.preventDefault()

    cookie.classList.remove('cookie--active')
})


const cookieShow = setInterval(() => {
    cookie.classList.add('cookie--active')

    clearInterval(cookieShow)
}, 2000);



})

