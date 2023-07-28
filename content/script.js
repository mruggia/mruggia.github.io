parent.iframe_resize();

function navigate(name) {
	parent.navigate(name, true);
}

const projects_button = document.getElementsByClassName("projects_button");
for (var i = 0; i < projects_button.length; i++) {
	var name = projects_button[i].id;
	var anchor = projects_button[i].getElementsByTagName('a')[0];

	projects_button[i].style.backgroundImage = "url('resources/projects_button/"+name+".jpg')";
	anchor.onclick = function() {
		navigate("projects_"+event.currentTarget.parentElement.id, true);
	};
}