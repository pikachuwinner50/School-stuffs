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