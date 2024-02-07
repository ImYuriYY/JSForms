// TASK 1

const genres = document.getElementById("genres")
console.log(`Значение: ${genres.value}\nТекст: ${genres.options[genres.selectedIndex].innerText}`)

let classicOpt = new Option('Классика', 'classic', true, true)
genres.append(classicOpt)





// TASK 2

const finishedText = document.getElementById("finishedText")
const myTextarea = document.getElementById("myTextarea")


finishedText.addEventListener("click", () => {
    finishedText.style.display = 'none'
    myTextarea.style.display = 'block'
    myTextarea.value = finishedText.innerText
})

function saveText() {
    finishedText.innerText = myTextarea.value
    myTextarea.style.display = 'none'
    finishedText.style.display = 'block'
}

myTextarea.addEventListener('focusout', saveText)
myTextarea.addEventListener('keydown', (event) => {
    event.key === 'Enter' ? saveText() : null
})






// TASK 3

const blocks = document.querySelectorAll('.block')
const blockText = document.querySelectorAll("#blockText")


let isEdit = false

for(let i = 0; i < blocks.length; i++) {
    blockText[i].addEventListener('click', () => {
        if(!isEdit) {
            isEdit = true
            const changeTextarea = document.createElement('textarea')
            changeTextarea.id = 'changeTextarea'

            blockText[i].style.display = 'none'
            
            blocks[i].appendChild(changeTextarea)
            changeTextarea.value = blockText[i].innerHTML

            const buttonsWrapper = document.createElement('div')
            buttonsWrapper.id = 'buttonsWrapper'

            const OKbutton = document.createElement('button')
            const CANCELbutton = document.createElement('button')

            OKbutton.id = 'OKbutton'
            CANCELbutton.id = 'CANCELbutton'

            OKbutton.innerText = 'OK'
            CANCELbutton.innerText = 'CANCEL'

            buttonsWrapper.appendChild(OKbutton)
            buttonsWrapper.appendChild(CANCELbutton)

            blocks[i].appendChild(buttonsWrapper)

            OKbutton.addEventListener('click', () => {
                blockText[i].innerHTML = changeTextarea.value
                blocks[i].removeChild(changeTextarea)
                blocks[i].removeChild(buttonsWrapper)
                blockText[i].style.display = 'flex'
                isEdit = false
            })

            CANCELbutton.addEventListener('click', () => {
                blocks[i].removeChild(changeTextarea)
                blocks[i].removeChild(buttonsWrapper)
                blockText[i].style.display = 'flex'
                isEdit = false
            })
        }
    })
}





// TASK 4

const perviousDep = document.getElementById("perviousDep")
const period = document.getElementById('period')
const yearPercent = document.getElementById('yearPercent')

const beforeSum = document.getElementById("beforeSum")
const afterSum = document.getElementById("afterSum")

const beforeLine = document.getElementById("beforeLine")
const afterLine = document.getElementById("afterLine")



const goButton = document.getElementById("goButton")

goButton.addEventListener("click", () => {
    let userDep = Number(perviousDep.value)
    const userPeriod = Number(period.options[period.selectedIndex].value)
    const userYearPercent = Number(yearPercent.value)

    beforeSum.innerText = `Было: ${userDep}`
    beforeLine.style.height = `${userDep / 1000}px`

    for(let i = 1; i <= userPeriod; i++) {
        userDep += (userDep * userYearPercent) / 100
    }
    userDep = Math.round(userDep * 100) / 100

    afterSum.innerText = `Стало: ${userDep}`
    afterLine.style.height = `${userDep / 1000}px`
})


