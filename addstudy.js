var studies = [];
function createStudy()
{
	studies[studies.length] = 
	{
		studyName: document.getElementById("studyName").value,
		studyType: document.getElementById("studyType").value,
		studyAim: document.getElementById("aim").value,
		description: document.getElementById("description").value,
		method: document.getElementById("method").value,
		risks: document.getElementById("risks").value,
		time: document.getElementById("time").value,
		num_participants: document.getElementById("participants").value,
		compensation: document.getElementById("compensation").value,
		location: document.getElementById("location").value,
		dates: document.getElementById("dates").value,
		IRB: document.getElementById("irb").value,
		min_age: document.getElementById("min").value,
		max_age: document.getElementById("max").value,
		sex: document.getElementById("sex").value,
		gender: document.getElementById("gender").value,
		ethnicity: document.getElementById("ethnicity").value,
		condition1: document.getElementById("condition1").value,
		condition2: document.getElementById("condition2").value,
		condition3: document.getElementById("condition3").value,
		condition4: document.getElementById("condition4").value,
		condition5: document.getElementById("condition5").value,
	}
		

	if(localStorage.getItem("studies")==null)
	{
		var jsonText = JSON.stringify(studies[studies.length-1],null,"\t");

		var studies_strings = [];

		studies_strings[studies_strings.length] = jsonText;

		var jsonText = JSON.stringify(studies_strings);

		localStorage.setItem("studies") = jsonText;
	}

	else
	{
		var jsonText = JSON.stringify(studies[studies.length-1],null,"\t");

		var newArr = JSON.parse(localStorage.getItem("studies"));

		newArr[newArr.length] = jsonText;

		var jsonText = JSON.stringify(newArr);

		localStorage.setItem("studies", jsonText);
	}

}

function printStudies()
{
	if(localStorage.getitem("studies")==null)
	{
		console.log("No studies to display");
	}

	else
	{

		var newArr = JSON.parse(localStorage.getItem("studies"));

		var studies_local = [];

		for(var k = 0; k < newArr.length; k++)
		{
			studies_local[k] = JSON.parse(newArr[k]);
		}

		console.log(studies_local);

	}
}