const displayy = document.getElementById('totalTime')
const saveButton = document.getElementById('saveButton')

/*get form input */
const choreOneInput = document.getElementById('choreOne').value
const choreTwoInput = document.getElementById('choreTwo').value
const choreThreeInput = document.getElementById('choreThree').value
const choreFourInput = document.getElementById('choreFour').value
const choreFiveInput = document.getElementById('choreFive').value
const goalInput = document.getElementById('goal').value

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
  /*parse input to ints*/
  const choreOneInt = parseInt(choreOneInput, 10)
  const choreTwoInt = parseInt(choreTwoInput, 10)
  const choreThreeInt = parseInt(choreThreeInput, 10)
  const choreFourInt = parseInt(choreFourInput, 10)
  const choreFiveInt = parseInt(choreFiveInput, 10)
  const goalInt = parseInt(goalInput, 10)

  /*calculate hours based on goal*/
  let choreOneTotal = goalInt / choreOneInt / 7
  let choreTwoTotal = goalInt / choreTwoInt / 7
  let choreThreeTotal = goalInt / choreThreeInt / 7
  let choreFourTotal = goalInt / choreFourInt / 7
  let choreFiveTotal = goalInt / choreFiveInt / 7

  choreOneLabel = choreOneLabel.innerText
  choreTwoLabel = choreTwoLabel.innerText
  choreThreeLabel = choreThreeLabel.innerText
  choreFourLabel = choreFourLabel.innerText
  choreFiveLabel = choreFiveLabel.innerText

  /*display results as string*/
  choreOneTotal = choreOneTotal.toString()
  choreTwoTotal = choreTwoTotal.toString()
  choreThreeTotal = choreThreeTotal.toString()
  choreFourTotal = choreFourTotal.toString()
  choreFiveTotal = choreFiveTotal.toString()

  finalDisplayString = choreOneTotal + ' ' + '(' + choreOneLabel + ')'

  displayy.innerHTML = ' test'
  todaysDate.innerHTML = today
})
