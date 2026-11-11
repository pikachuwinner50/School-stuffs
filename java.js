for (let i = 1; i <= 3; i++) {
    if (i === 2) continue;
    console.log(i);
}

const score = 85; // Change this value to test a different score

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else if (score >= 60) {
    console.log("D");
} else {
    console.log("F");
}

const project1 = [
    { title: "Portfolio", tech: "HTML/CSS", year: 2021, description: "A personal portfolio website showcasing my projects and skills." },
    { title: "Game", tech: "JS", year: 2020, description: "A simple game built with JavaScript." },
    { title: "App", tech: "React", year: 2022, description: "A responsive web application built with React." }
];
project1[0].title; // "Portfolio"
project1[0].year; // 2021
project1[0].description; // "A personal portfolio website showcasing my projects and skills."
project1.push({ title: "Blog", tech: "Node.js", year: 2023, description: "A simple blog built with Node.js." });