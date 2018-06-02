var person = [];
function createObject(){
	person[person.length] = {
		firstName: document.getElementById("firstName").value,
		lastName: document.getElementById("lastName").value,
		username: document.getElementById("username").value,
		email: document.getElementById("email").value,
		phone: document.getElementById("phone").value,
		password: document.getElementById("password").value,
		birthday: document.getElementById("birthday").value,
		gender: document.getElementById("gender").value,
		ethnicity: document.getElementById("ethnicity").value,
		nationality: document.getElementById("nationality").value,
		pincode: document.getElementById("pincode"),
		maritalStatus: document.getElementById("maritalStatus").value,
		sex: document.getElementById("sex").value,
		diet: document.getElementById("diet").value,
		exercise: document.getElementById("exercise").value,
		alcohol: document.getElementById("alcohol").value,
		tobacco: document.getElementById("tobacco").value,
		diabetes: document.getElementById("diabetes").checked,
		hypertension: document.getElementById("hypertension").checked,
		hyperlipidemia: document.getElementById("hypertension").checked,
		backPain: document.getElementById("backPain").checked,
		anxiety: document.getElementById("anxiety").checked,
		obesity: document.getElementById("obesity").checked,
		respiratoryProblems: document.getElementById("respiratoryProblems").checked,
		hypothyroidism: document.getElementById("hypothyroidism").checked,
		painInJoint: document.getElementById("painInJoint").checked,
		depression: document.getElementById("depression").checked,
		bronchitis: document.getElementById("bronchitis").checked,
		asthma: document.getElementById("asthma").checked
	}


	var check = (localStorage["empty"] == "false");
	if(check==false)
	{


		var jsonText = JSON.stringify(person[person.length-1],null,"\t");

		var person_strings = [];

		person_strings[person_strings.length] = jsonText;

		var jsonText = JSON.stringify(person_strings);



		localStorage.setItem("data", jsonText);
		localStorage.setItem("empty","false");


	}

	else
	{

		var jsonText = JSON.stringify(person[person.length-1],null,"\t");

		var newArr = JSON.parse(localStorage.getItem("data"));

		newArr[newArr.length] = jsonText;

		var jsonText = JSON.stringify(newArr);

		localStorage.setItem("data", jsonText);
	}

}

function deleteObject(){

	var newArr = JSON.parse(localStorage.getItem("data"));

	var person_strings = [];

	var person_local = [];


	for(var k = 0; k < newArr.length; k++)
		{
			person_local[k] = JSON.parse(newArr[k]);
		}

		for(var k = 0; k < person_local.length; k++)
		{
			if(person_local[k].username==document.getElementById("deleteObject").value)
			{	
				person_local.splice(k,1);
			}
		}



	for(var m = 0; m < person_local.length; m++)
	{
		person_strings[m] = JSON.stringify(person_local[m],null,"\t");
	}

	var jsonText = JSON.stringify(person_strings);

	localStorage.setItem("data",jsonText);





}

function deleteAllObjects()
{
	localStorage.clear();

}

function printObject(){
	

		var check = (localStorage["empty"] == "false");
	if(check==false)
	{
		console.log("No objects to display");
	}

	else
	{



		var newArr = JSON.parse(localStorage.getItem("data"));

		var person_local = [];

		for(var k = 0; k < newArr.length; k++)
		{
			person_local[k] = JSON.parse(newArr[k]);
		}

		console.log(person_local);

	}



	for(var i=0;i<person.length;i++){
		if(person[i].diabetes&&person[i].gender==="Male"){
			console.log(person[i].firstName);
		}
	}
}






