function() calcWeeks(){
	/*get form input */
	choreOneInput = document.getElementById('choreOne').value;
	choreTwoInput = document.getElementById('choreTwo').value;
	choreThreeInput = document.getElementById('choreThree').value;
	choreFourInput = document.getElementById('choreFour').value;
	choreFiveInput = document.getElementById('choreFive').value;
	goalInput = document.getElementById('goal').value;

	/*parse input to ints*/
	choreOneInt = parseInt(choreOneInput,10);
	choreTwoInt = parseInt(choreTwoInput,10);
	choreThreeInt = parseInt(choreThreeInput,10);
	choreFourInt = parseInt(choreFourInput,10);
	choreFiveInt = parseInt(choreFiveInput,10);
	goalInt = parseInt(goalInput,10);

	/*calculate hours based on goal*/
	choreOneTotal = (goalInt / choreOneInt)/7;
	choreTwoTotal = (goalInt / choreTwoInt)/7;
	choreThreeTotal = (goalInt / choreThreeInt)/7;
	choreFourTotal = (goalInt / choreFourInt)/7;
	choreFiveTotal = (goalInt / choreFiveInt)/7;

	/*Get label Text*/
	choreOneLabel =  document.getElementsByClassName("choreOneClass");
	choreTwoLabel =  document.getElementsByClassName("choreTwoClass");
	choreTwoLabel =  document.getElementsByClassName("choreThreeClass");
	choreFourLabel =  document.getElementsByClassName("choreFourClass");
	choreFiveLabel =  document.getElementsByClassName("choreFiveClass");

	choreOneLabel = choreOneLabel.innerText;
	choreTwoLabel = choreTwoLabel.innerText;
	choreTwoLabel = choreTwoLabel.innerText;
	choreFourLabel = choreFourLabel.innerText;
	choreFiveLabel = cchoreFiveLabel.innerText;

	/*display results as string*/
	choreOneTotal = choreOneTotal.toString();
	choreTwoTotal = choreTwoTotal.toString();
	choreThreeTotal = choreThreeTotal.toString();
	choreFourTotal = choreFourTotal.toString();
	choreFiveTotal = choreFiveTotal.toString();

	finalDisplayString = choreOneTotal + " " + "(" + choreOneLabel + ")";


	displayy = document.getElementById('totalTime')
	displayy.innerText =  finalDisplayString;
	
}