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
	/*Get label Text*/
	choreOneLabel =  document.getElementsByClassName("choreOneClass")
	choreOneLabel = choreOneLabel.innerText;
	/*display results as string*/
	choreOneTotal = choreOneTotal.toString();
	finalDisplayString = choreOneTotal + " " + "(" + choreOneLabel + ")";


	displayy = document.getElementById('totalTime')
	displayy.innerText =  finalDisplayString;
	
}