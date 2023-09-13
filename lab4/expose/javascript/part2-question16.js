let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (const i in statistics) {
    if (i.charAt(0) == 'r' || statistics[i] % 2 == 1) {
        console.log(statistics[i]);
    }
}