
function navigate(name, push) {
	const menus = ["projects", "publications", "about"];
	var menu = name.match(/^([^_]*)_?.*/); menu = menu[1];

	if (push) {
		window.history.pushState({}, '', '?'+name);
	}

	if (!menus.includes(menu)) {
		name = "projects"; menu = "projects";
	}
	
	for (let i = 0; i < menus.length; i++) {
		var button = document.getElementById(menus[i]);
		if (menu===menus[i]) {
			button.classList.add('button_selected');
		} else {
			button.classList.remove('button_selected');
		}
	}

	if (!(name === menu)) { document.getElementById("iframe_anchor").scrollIntoView({ behavior: 'smooth', block: 'start'}); }
	setTimeout( function() { document.getElementById("iframe").contentWindow.location.replace( "/content/"+name ); }, 200);
}

document.getElementById("iframe").src = "about:blank";
document.getElementById("iframe").onload = function() {
	document.title = "Marco Ruggia - " + document.getElementById("iframe").contentWindow.document.title;
	iframe_resize();
}

window.onload = function() {
	navigate(window.location.search.slice(1), false);
}

window.addEventListener('popstate', function(event) {
	navigate(window.location.search.slice(1), false);
}, false);

const buttons = document.getElementsByClassName("button");
for (var i = 0; i < buttons.length; i++) {
	buttons[i].onclick = function() {
		var name = event.currentTarget.id;
		navigate(name, true);
	};
}



document.body.onscroll = function() {
	var scroll = document.scrollingElement.scrollTop;
	document.body.style.backgroundPosition = "center " + (scroll * 0.5) + "px";
}

new ResizeObserver(iframe_resize).observe(document.getElementById("iframe"));
function iframe_resize() {
	var obj = document.getElementById("iframe");
	var scroll = document.scrollingElement.scrollTop;
	obj.style.height = '0px';
	obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
	document.scrollingElement.scrollTop = scroll;
}