function printDate() {
    let d = new Date();
    let time = d.toLocaleDateString();
    console.log(time);
}

setInterval(printDate, 1000);