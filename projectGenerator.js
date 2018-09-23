"use strict";

const repos = [ // Title, repository name.
	["Color Pop", "colorPop"],
	["Times Tables", "timesTables"],
	["Snake", "snake"],
	["Maze Generation", "mazeGeneration"],
	["Algae", "algae"],
	["Shuuter", "shuuter"],
	["Bezier Curve", "bezierCurve"],
	["Minesweeper", "minesweeper"],
	["Quadtree", "quadtree"],
	["A* Pathfinder", "aStar"],
	["Project Page", "tombez.github.io"]
];

let frag = document.createDocumentFragment();
for (const [title, name] of repos) {
	let proj = document.createElement("div");
	proj.className = "project";
	proj.innerHTML += `
		<p class="projTitle">${title}</p>
		<img class="projImage" src="./images/${name}.png">
		<a class="link" href="https://tombez.github.io/${name}">Working Demo <img class="linkPNG" src="./images/link.png"></a>
		<hr class="separator">
		<a class="link" href="https://github.com/tombez/${name}">Github Repository <img class="linkPNG" src="./images/link.png"></a>
	`;
	frag.appendChild(proj);
}
document.body.appendChild(frag);
document.body.removeChild(document.getElementById("projectGenerator"));
