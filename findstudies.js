var studies = [];
function printStudies()
{
	var jsonText = localStorage["studies"];
	var newArr = JSON.parse(jsonText);
	for(int i = 0; i < newArr.length; i++)
	{
		studies[i] = JSON.parse(newArr[i]);
	}

	var num_studies = studies.length;

	for(int j = 0; j < num_studies; j++)
	{
		document.getElementById("studyName").innerHTML = studies[j].name;
		document.getElementById("studyType").innerHTML = studies[j].type;
		document.getElementById("studyAim").innerHTML = studies[j].aim;
		document.getElementById("time").innerHTML = studies[j].time;
		document.getElementById("compensation").innerHTML = studies[j].compensation;
		document.getElementById("location").innerHTML = studies[j].location;
		document.getElementById("dates").innerHTML = studies[j].dates;
	}

}