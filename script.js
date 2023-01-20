// ==================================Theme part=========================================
const themeBtns = document.querySelectorAll('.toggle-btn')
const root = document.documentElement.classList


themeBtns.forEach(themeBtn => {
    themeBtn.addEventListener('click', e => {
        const currentBtn = e.currentTarget.classList
        if(currentBtn.contains('toggle-btn2')) {
            root.add('theme-2')
            root.remove('theme-3')
        } else if(currentBtn.contains('toggle-btn3')) {
            root.add('theme-3')
            root.remove('theme-2')
        } else {
            root.remove('theme-2')
            root.remove('theme-3')
        }
        themeBtns.forEach(item => {
            if(item !== themeBtn) {
                item.classList.add('hide')
            } else{
                item.classList.remove('hide')
            }
        })
    })
})

//==================================Calculations part===============================================

const screen = document.querySelector('.input-val')
const btns = document.querySelectorAll('.btn')

btns.forEach(btn =>  btn.addEventListener('click', e => {
        const btnValue = e.currentTarget.value
        screen.value += btnValue

        if(btnValue === 'RESET'){
            screen.value = ''
        }
        if(btnValue === 'DEL'){
            let removeDel = screen.value.slice(0, screen.value.length - 3)
            screen.value = removeDel.slice(0, removeDel.length - 1)      
        }
        if(btnValue === '='){
            evaluate()            
        }
  
    })
)

function evaluate() {
    const removeEquals = screen.value.slice(0, screen.value.length - 1)
    try {
        const solution = eval(removeEquals)
        if(Number.isInteger(solution)){
            screen.value = solution
        } else {
            screen.value = solution.toFixed(2)
        }
    } catch (error) {
        if(error instanceof SyntaxError) {
            screen.value = error.message
            setTimeout(() => screen.value = '', 2000)
        }
    }
}