
// Google tag (gtag.js)
var imported = document.createElement('script');
imported.async = true;
imported.src = 'https://www.googletagmanager.com/gtag/js?id=G-QW9M1EJB20';
document.head.appendChild(imported);
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-QW9M1EJB20');



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