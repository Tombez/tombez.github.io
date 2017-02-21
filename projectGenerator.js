var repos = [ // Title, repository name.
	["Snake", "snake"],
	["Minesweeper", "minesweeper"],
	["Maze Generation", "mazeGeneration"],
	["A* Pathfinder", "aStar"],
	["Bezier Curve", "bezierCurve"]
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
}
document.body.removeChild(document.getElementById("projectGenerator"));