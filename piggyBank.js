const displayy = document.getElementById('totalTime')
const saveButton = document.getElementById('saveButton')

/*get form input */
// const choreOneInput = Number(document.querySelector('.choreOne').value)
// const choreTwoInput = document.getElementById('choreTwo').value
// const choreThreeInput = document.getElementById('choreThree').value
// const choreFourInput = document.getElementById('choreFour').value
// const choreFiveInput = document.getElementById('choreFive').value
// const goalInput = document.getElementById('goal').value

//console.log(choreOneInput)

/*Get label Text*/
let choreOneLabel = document.getElementsByClassName('choreOneClass')
let choreTwoLabel = document.getElementsByClassName('choreTwoClass')
let choreThreeLabel = document.getElementsByClassName('choreThreeClass')
let choreFourLabel = document.getElementsByClassName('choreFourClass')
let choreFiveLabel = document.getElementsByClassName('choreFiveClass')

/*Calculate today's date*/
var today = new Date()
var dd = String(today.getDate()).padStart(2, '0')
var mm = String(today.getMonth() + 1).padStart(2, '0')
var yyyy = today.getFullYear()
today = mm + '/' + dd + '/' + yyyy
const todaysDate = document.getElementById('todaysDate')
const endDate = document.getElementById('endDate')

/*Save Button Event Listener*/
saveButton.addEventListener('click', function () {
  /*get form input */
  /*parse input to ints*/
  const choreOneInt = parseInt(document.getElementById('choreOne').value, 10)
  const choreTwoInt = parseInt(document.getElementById('choreTwo').value, 10)
  const choreThreeInt = parseInt(
    document.getElementById('choreThree').value,
    10
  )
  const choreFourInt = parseInt(document.getElementById('choreFour').value, 10)
  const choreFiveInt = parseInt(document.getElementById('choreFive').value, 10)
  const goalInt = parseInt(document.getElementById('goal').value, 10)

  /*calculate hours based on goal*/
  let choreOneTotal = goalInt / choreOneInt / 7
  let choreTwoTotal = goalInt / choreTwoInt / 7
  let choreThreeTotal = goalInt / choreThreeInt / 7
  let choreFourTotal = goalInt / choreFourInt / 7
  let choreFiveTotal = goalInt / choreFiveInt / 7

  choreOneLabel.innerText = choreOneLabel
  choreTwoLabel.innerText = choreTwoLabel
  choreThreeLabel.innerText = choreThreeLabel
  choreFourLabel.innerText = choreFourLabel
  choreFiveLabel.innerText = choreFiveLabel

  /*display results as string*/
  choreOneTotal = choreOneTotal.toString()
  choreTwoTotal = choreTwoTotal.toString()
  choreThreeTotal = choreThreeTotal.toString()
  choreFourTotal = choreFourTotal.toString()
  choreFiveTotal = choreFiveTotal.toString()

  let choreOneResults = choreOneTotal + ' - ' + '(Vacumming)' + '\n'
  let choreTwoResults = choreTwoTotal + ' - ' + '(Dishes)' + '\n'
  let choreThreeResults = choreThreeTotal + ' - ' + '(Folding Clothes)' + '\n'
  let choreFourResults = choreFourTotal + ' - ' + '(Mopping)' + '\n'
  let choreFiveResults = choreFiveTotal + ' - ' + '(Wash Car)' + '\n'

  let finalDisplayString =
    choreOneResults +
    choreTwoResults +
    choreThreeResults +
    choreFourResults +
    choreFiveResults

  displayy.innerHTML = finalDisplayString
  todaysDate.innerHTML = today
})
