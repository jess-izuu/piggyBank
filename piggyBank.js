const displayy = document.getElementById('totalTime')
const displayyList = document.getElementById('totalTimeList')
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
  function determineEndDate(choreOne,choreTwo,choreThree,choreFour,choreFive){
    var minWeeks = Math.min(choreOne,choreTwo,choreThree,choreFour,choreFive);
    var today = new Date();
    var minDays = minWeeks * 7;
    today.setDate(today.getDate()+ minDays);
    return today;

}
  /*get form input */
  /*parse input to ints*/
  const choreOneInt = parseInt(document.getElementById('choreOne').value, 10)
  const choreTwoInt = parseInt(document.getElementById('choreTwo').value, 10)
  const choreThreeInt = parseInt(document.getElementById('choreThree').value,10)
  const choreFourInt = parseInt(document.getElementById('choreFour').value, 10)
  const choreFiveInt = parseInt(document.getElementById('choreFive').value, 10)
  const goalInt = parseInt(document.getElementById('goal').value, 10)
  
  /* input validation */
  if(inputVerify(choreOneInt,choreTwoInt,choreThreeInt,choreFourInt,choreFiveInt,goalInt) == true){

  }
  else{
    alert("Error,a negative number was entered(or blank field).Please try again.")
    return;
  }

  /*calculate hours based on goal*/
  let choreOneTotal = goalInt / choreOneInt
  let choreTwoTotal = goalInt / choreTwoInt
  let choreThreeTotal = goalInt / choreThreeInt
  let choreFourTotal = goalInt / choreFourInt
  let choreFiveTotal = goalInt / choreFiveInt

 /*Find end date*/
  let minDate = determineEndDate(choreOneTotal,choreTwoTotal,choreThreeTotal,choreFourTotal,choreFiveTotal);
  /*display results as string*/
  choreOneTotal = choreOneTotal.toString()
  choreTwoTotal = choreTwoTotal.toString()
  choreThreeTotal = choreThreeTotal.toString()
  choreFourTotal = choreFourTotal.toString()
  choreFiveTotal = choreFiveTotal.toString()

  let choreOneResults =
    choreOneTotal + ' - ' + '<i class="fas fa-broom"></i> week(s) Vacumming' + '\n'
  let choreTwoResults =
    choreTwoTotal + ' - ' + '<i class="fas fa-utensils"></i>week(s) Dishes' + '\n'
  let choreThreeResults =
    choreThreeTotal +
    ' - ' +
    '<i class="fas fa-tshirt"></i>week(s) Folding Clothes' +
    '\n'
  let choreFourResults =
    choreFourTotal + ' - ' + '<i class="fas fa-broom"></i>week(s) Mopping' + '\n'
  let choreFiveResults =
    choreFiveTotal + ' - ' + '<i class="fas fa-car"></i>week(s) Wash Car' + '\n'

  let finalDisplayString =
    choreOneResults +
    `<br>` +
    choreTwoResults +
    `<br>` +
    choreThreeResults +
    `<br>` +
    choreFourResults +
    `<br>` +
    choreFiveResults

  displayy.innerHTML = minDate.toLocaleDateString("en-US")
  displayyList.innerHTML = finalDisplayString
  todaysDate.innerHTML = today

  // LocalStorage - Save
  // Save goal input
  localStorage.setItem('goal', JSON.stringify(goalInt))
  // Save chores inputs
  localStorage.setItem('choreOne', JSON.stringify(choreOneInt))
  localStorage.setItem('choreTwo', JSON.stringify(choreTwoInt))
  localStorage.setItem('choreThree', JSON.stringify(choreThreeInt))
  localStorage.setItem('choreFour', JSON.stringify(choreFourInt))
  localStorage.setItem('choreFive', JSON.stringify(choreFiveInt))
})
function inputVerify(choreOne,choreTwo,choreThree,choreFour,choreFive,goal){
    if(choreOne < 0 || !/^\d+(\.\d+)?/.exec(choreOne)){
      return false
    }else if(choreTwo < 0 || !/^\d+(\.\d+)?/.exec(choreTwo)){
      return false
    }else if(choreThree< 0 || !/^\d+(\.\d+)?/.exec(choreThree)){
      return false
    }else if(choreFour < 0 || !/^\d+(\.\d+)?/.exec(choreFour)){
      return false
    }else if(choreFive < 0 || !/^\d+(\.\d+)?/.exec(choreFive)){
      return false
    }else if(goal < 0 || !/^\d+(\.\d+)?/.exec(goal)){
      return false
    }
    return true
}


//LocalStorage - Get saved items
const goalAmount = JSON.parse(localStorage.getItem('goal'))
const choreOneAmount = JSON.parse(localStorage.getItem('choreOne'))
const choreTwoAmount = JSON.parse(localStorage.getItem('choreTwo'))
const choreThreeAmount = JSON.parse(localStorage.getItem('choreThree'))
const choreFourAmount = JSON.parse(localStorage.getItem('choreFour'))
const choreFiveAmount = JSON.parse(localStorage.getItem('choreFive'))
console.log(today)
console.log(goalAmount)
console.log(choreOneAmount)
console.log(choreTwoAmount)
console.log(choreThreeAmount)
console.log(choreFourAmount)
console.log(choreFiveAmount)

//Add stored data to date in dropdown
