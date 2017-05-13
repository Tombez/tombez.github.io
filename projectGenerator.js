var repos = [ // Title, repository name.
	["Snake", "snake"],
	["Maze Generation", "mazeGeneration"],
	["A* Pathfinder", "aStar"],
	["Minesweeper", "minesweeper"],
	["Quadtree", "quadtree"],
	["Bezier Curve", "bezierCurve"],
	["Project Page", "tombez.github.io"]
];

for (var n = 0; n < repos.length; n++) {
	var project = document.createElement("div");
	project.className = "project";
	project.innerHTML = `
		<p class="projTitle">` + repos[n][0] + `</p>
		<img class="projImage" src="./images/` + repos[n][1] + `.png"/>
		<a class="link" href="https://tombez.github.io/` + repos[n][1] + `">Working Demo <img class="linkPNG" src="./images/link.png"/></a>
		<hr class="separator" />
		<a class="link" href="https://github.com/tombez/` + repos[n][1] + `">Github Repository <img class="linkPNG" src="./images/link.png"/></a>
	`;
	document.body.appendChild(project);
	var list = document.getElementsByClassName("projImage");
	list[list.length - 1].addEventListener("click", function(event) {
		event.target.outerHTML = "<iframe width=480 height=270 class='projImage' src='" + event.target.nextSibling.nextSibling.href + "'></iframe>";
	});
}
document.body.removeChild(document.getElementById("projectGenerator"));