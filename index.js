// Variables
var primal = {
        count: document.getElementById("P").value,
        removal: document.getElementById("Pr").value,
        name: "Primal"
    },
    justice = {
        count: document.getElementById("J").value,
        removal: document.getElementById("Jr").value,
        name: "Justice"
    },
    time = {
        count: document.getElementById("T").value,
        removal: document.getElementById("Tr").value,
        name: "Time"
    },
    shadow = {
        count: document.getElementById("S").value,
        removal: document.getElementById("Sr").value,
        name: "Shadow"
    },
    fire = {
        count: document.getElementById("F").value,
        removal: document.getElementById("Fr").value,
        name: "Fire"
    },
    rakano = {
        count: document.getElementById("FJ").value,
        removal: document.getElementById("FJr").value,
        name: "Rakano",
        rec: 0,
        fix: document.getElementById("FJf").value
    },
    argenport = {
        count: document.getElementById("JS").value,
        removal: document.getElementById("JSr").value,
        name: "Argenport",
        rec: 0,
        fix: document.getElementById("JSf").value
    },
    hooru = {
        count: document.getElementById("JP").value,
        removal: document.getElementById("JPr").value,
        name: "Hooru",
        rec: 0,
        fix: document.getElementById("JPf").value
    },
    combrei = {
        count: document.getElementById("JT").value,
        removal: document.getElementById("JTr").value,
        name: "Combrei",
        rec: 0,
        fix: document.getElementById("JTf").value
    },
    stonescar = {
        count: document.getElementById("FS").value,
        removal: document.getElementById("FSr").value,
        name: "Stonescar",
        rec: 0,
        fix: document.getElementById("FSf").value
    },
    skycrag = {
        count: document.getElementById("FP").value,
        removal: document.getElementById("FPr").value,
        name: "Skycrag",
        rec: 0,
        fix: document.getElementById("FPf").value
    },
    praxis = {
        count: document.getElementById("FT").value,
        removal: document.getElementById("FTr").value,
        name: "Praxis",
        rec: 0,
        fix: document.getElementById("FTf").value
    },
    feln = {
        count: document.getElementById("PS").value,
        removal: document.getElementById("PSr").value,
        name: "Feln",
        rec: 0,
        fix: document.getElementById("PSf").value
    },
    xenan = {
        count: document.getElementById("ST").value,
        removal: document.getElementById("STr").value,
        name: "Xenan",
        rec: 0,
        fix: document.getElementById("STf").value
    },
    elysian = {
        count: document.getElementById("PT").value,
        removal: document.getElementById("PTr").value,
        name: "Elysian",
        rec: 0,
        fix: document.getElementById("PTf").value
    };
var ctx = document.getElementById("myChart");
var ctx2 = document.getElementById("dualChart");
var ctx3 = document.getElementById("fixChart");
var myChart, dualChart, bestCount, bestMono, bestRemoval, bestDual, fixingChart;

// Init
monoRec();
dualRec();
initialize();

// Chart.js Test
function initialize() {
    /********** MONO TABLE ************************/
    myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Fire", "Primal", "Time", "Justice", "Shadow"],
            datasets: [
                {
                    label: "Count",
                    data: [
                        fire.count,
                        primal.count,
                        time.count,
                        justice.count,
                        shadow.count
                    ],
                    backgroundColor: [
                        "rgba(255,99,132,0.4)",
                        "rgba(54, 162, 235, 0.4)",
                        "rgba(255, 206, 86, 0.4)",
                        "rgba(75, 192, 192, 0.4)",
                        "rgba(153, 102, 255, 0.4)"
                    ],
                    borderColor: [
                        "rgba(255,99,132,1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)"
                    ],
                    borderWidth: 1
                },
                {
                    label: "Removal",
                    data: [
                        fire.removal,
                        primal.removal,
                        time.removal,
                        justice.removal,
                        shadow.removal
                    ],
                    backgroundColor: [
                        "rgba(255,99,132,0.2)" /*R*/,
                        "rgba(54, 162, 235, 0.2)" /*U*/,
                        "rgba(255, 206, 86, 0.2)" /*W*/,
                        "rgba(75, 192, 192, 0.2)" /*G*/,
                        "rgba(153, 102, 255, 0.2)" /*B*/
                    ],
                    borderColor: [
                        "rgba(255,99,132,1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)"
                    ],
                    borderWidth: 1
                }
            ]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                xAxes: [
                    {
                        stacked: true
                    }
                ],
                yAxes: [
                    {
                        stacked: true,
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            }
        }
    });
    /********** DUAL TABLE ************************/
    dualChart = new Chart(ctx2, {
        type: "bar",
        data: {
            labels: [
                "Rakano",
                "Argenport",
                "Hooru",
                "Combrei",
                "Stonescar",
                "Skycrag",
                "Praxis",
                "Feln",
                "Xenan",
                "Elysian"
            ],
            datasets: [
                {
                    label: "Playables - Mono 1",
                    data: [
                        fire.count,
                        justice.count,
                        justice.count,
                        justice.count,
                        fire.count,
                        fire.count,
                        fire.count,
                        shadow.count,
                        shadow.count,
                        primal.count
                    ],
                    backgroundColor: [
                        "rgba(255,99,132,0.4)",
                        "rgba(75, 192, 192, 0.4)",
                        "rgba(75, 192, 192, 0.4)",
                        "rgba(75, 192, 192, 0.4)",
                        "rgba(255,99,132,0.4)",
                        "rgba(255,99,132,0.4)",
                        "rgba(255,99,132,0.4)",
                        "rgba(153, 102, 255, 0.4)",
                        "rgba(153, 102, 255, 0.4)",
                        "rgba(54, 162, 235, 0.4)"
                    ],
                    borderColor: [
                        "rgba(255,99,132,1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(255,99,132,1)",
                        "rgba(255,99,132,1)",
                        "rgba(255,99,132,1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(54, 162, 235,14)"
                    ],
                    borderWidth: 1
                },
                {
                    label: "Playable - Mono 2",
                    data: [
                        justice.count,
                        shadow.count,
                        primal.count,
                        time.count,
                        shadow.count,
                        primal.count,
                        time.count,
                        primal.count,
                        time.count,
                        time.count
                    ],
                    backgroundColor: [
                        "rgba(75, 192, 192, 0.4)" /*G*/,
                        "rgba(153, 102, 255,0.4)" /*B*/,
                        "rgba(54, 162, 235, 0.4)" /*U*/,
                        "rgba(255, 206, 86, 0.4)" /*W*/,
                        "rgba(153, 102, 255,0.4)" /*B*/,
                        "rgba(54, 162, 235, 0.4)" /*U*/,
                        "rgba(255, 206, 86, 0.4)" /*W*/,
                        "rgba(54, 162, 235, 0.4)" /*U*/,
                        "rgba(255, 206, 86, 0.4)" /*W*/,
                        "rgba(255, 206, 86, 0.4)" /*W*/
                    ],
                    borderColor: [
                        "rgba(75, 192, 192, 1)" /*G*/,
                        "rgba(153, 102, 255, 1)" /*B*/,
                        "rgba(54, 162, 235, 1)" /*U*/,
                        "rgba(255, 206, 86, 1)" /*W*/,
                        "rgba(153, 102, 255, 1)" /*B*/,
                        "rgba(54, 162, 235, 1)" /*U*/,
                        "rgba(255, 206, 86, 1)" /*W*/,
                        "rgba(54, 162, 235, 1)" /*U*/,
                        "rgba(255, 206, 86, 1)" /*W*/,
                        "rgba(255, 206, 86,12)" /*W*/
                    ],
                    borderWidth: 1
                },
                {
                    label: "Playables - Dual",
                    data: [
                        rakano.count,
                        argenport.count,
                        hooru.count,
                        combrei.count,
                        stonescar.count,
                        skycrag.count,
                        praxis.count,
                        feln.count,
                        xenan.count,
                        elysian.count
                    ],
                    backgroundColor: [
                        "rgba(75, 75, 75, 0.4)" /*Gray*/,
                        "rgba(75, 75, 75, 0.4)" /*Gray*/,
                        "rgba(75, 75, 75, 0.4)" /*Gray*/,
                        "rgba(75, 75, 75, 0.4)" /*Gray*/,
                        "rgba(75, 75, 75, 0.4)" /*Gray*/,
                        "rgba(75, 75, 75, 0.4)" /*Gray*/,
                        "rgba(75, 75, 75, 0.4)" /*Gray*/,
                        "rgba(75, 75, 75, 0.4)" /*Gray*/,
                        "rgba(75, 75, 75, 0.4)" /*Gray*/,
                        "rgba(75, 75, 75, 0.4)" /*Gray*/
                    ],
                    borderColor: [
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/
                    ],
                    borderWidth: 1
                },
                {
                    label: "Removal - Dual",
                    data: [
                        rakano.removal,
                        argenport.removal,
                        hooru.removal,
                        combrei.removal,
                        stonescar.removal,
                        skycrag.removal,
                        praxis.removal,
                        feln.removal,
                        xenan.removal,
                        elysian.removal
                    ],
                    backgroundColor: [
                        "rgba(75, 75, 75, 0.2)" /*Gray*/,
                        "rgba(75, 75, 75, 0.2)" /*Gray*/,
                        "rgba(75, 75, 75, 0.2)" /*Gray*/,
                        "rgba(75, 75, 75, 0.2)" /*Gray*/,
                        "rgba(75, 75, 75, 0.2)" /*Gray*/,
                        "rgba(75, 75, 75, 0.2)" /*Gray*/,
                        "rgba(75, 75, 75, 0.2)" /*Gray*/,
                        "rgba(75, 75, 75, 0.2)" /*Gray*/,
                        "rgba(75, 75, 75, 0.2)" /*Gray*/,
                        "rgba(75, 75, 75, 0.2)" /*Gray*/
                    ],
                    borderColor: [
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/
                    ],
                    borderWidth: 1
                }
            ]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                xAxes: [
                    {
                        stacked: true
                    }
                ],
                yAxes: [
                    {
                        stacked: true,
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            }
        }
    });

    /********** FIXING TABLE **********************/
    fixChart = new Chart(ctx3, {
        type: "bar",
        data: {
            labels: [
                "Rakano",
                "Argenport",
                "Hooru",
                "Combrei",
                "Stonescar",
                "Skycrag",
                "Praxis",
                "Feln",
                "Xenan",
                "Elysian"
            ],
            datasets: [
                {
                    label: "Fixing",
                    data: [
                        rakano.fix * 0.5,
                        argenport.fix * 0.5,
                        hooru.fix * 0.5,
                        combrei.fix * 0.5,
                        stonescar.fix * 0.5,
                        skycrag.fix * 0.5,
                        praxis.fix * 0.5,
                        feln.fix * 0.5,
                        xenan.fix * 0.5,
                        elysian.fix * 0.5
                    ],
                    backgroundColor: [
                        "rgba(255,99,132,0.4)",
                        "rgba(75, 192, 192, 0.4)",
                        "rgba(75, 192, 192, 0.4)",
                        "rgba(75, 192, 192, 0.4)",
                        "rgba(255,99,132,0.4)",
                        "rgba(255,99,132,0.4)",
                        "rgba(255,99,132,0.4)",
                        "rgba(153, 102, 255, 0.4)",
                        "rgba(153, 102, 255, 0.4)",
                        "rgba(54, 162, 235, 0.4)"
                    ],
                    borderColor: [
                        "rgba(255,99,132,1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(255,99,132,1)",
                        "rgba(255,99,132,1)",
                        "rgba(255,99,132,1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(54, 162, 235,14)"
                    ],
                    borderWidth: 1
                },
                {
                    label: "Fixing",
                    data: [
                        rakano.fix * 0.5,
                        argenport.fix * 0.5,
                        hooru.fix * 0.5,
                        combrei.fix * 0.5,
                        stonescar.fix * 0.5,
                        skycrag.fix * 0.5,
                        praxis.fix * 0.5,
                        feln.fix * 0.5,
                        xenan.fix * 0.5,
                        elysian.fix * 0.5
                    ],
                    backgroundColor: [
                        "rgba(75, 192, 192, 0.4)" /*G*/,
                        "rgba(153, 102, 255,0.4)" /*B*/,
                        "rgba(54, 162, 235, 0.4)" /*U*/,
                        "rgba(255, 206, 86, 0.4)" /*W*/,
                        "rgba(153, 102, 255,0.4)" /*B*/,
                        "rgba(54, 162, 235, 0.4)" /*U*/,
                        "rgba(255, 206, 86, 0.4)" /*W*/,
                        "rgba(54, 162, 235, 0.4)" /*U*/,
                        "rgba(255, 206, 86, 0.4)" /*W*/,
                        "rgba(255, 206, 86, 0.4)" /*W*/
                    ],
                    borderColor: [
                        "rgba(75, 192, 192, 1)" /*G*/,
                        "rgba(153, 102, 255, 1)" /*B*/,
                        "rgba(54, 162, 235, 1)" /*U*/,
                        "rgba(255, 206, 86, 1)" /*W*/,
                        "rgba(153, 102, 255, 1)" /*B*/,
                        "rgba(54, 162, 235, 1)" /*U*/,
                        "rgba(255, 206, 86, 1)" /*W*/,
                        "rgba(54, 162, 235, 1)" /*U*/,
                        "rgba(255, 206, 86, 1)" /*W*/,
                        "rgba(255, 206, 86,12)" /*W*/
                    ],
                    borderWidth: 1
                }
            ]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                xAxes: [
                    {
                        stacked: true
                    }
                ],
                yAxes: [
                    {
                        stacked: true,
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            }
        }
    });
}

// Mono Playable Functions
function monoIncrement(selector, indicator) {
    var inputField = document.getElementById(selector);
    inputField.stepUp();
    myChart.data.datasets[0].data[indicator] = inputField.value;
    myChart.update();
    monoRec();
    monoUpdateDual(selector);
}

function monoDecrement(selector, indicator) {
    var inputField = document.getElementById(selector);
    inputField.stepDown();
    myChart.data.datasets[0].data[indicator] = inputField.value;
    myChart.update();
    monoRec();
    monoUpdateDual(selector);
}

function monoPlayables(selector, indicator) {
    var inputField = document.getElementById(selector);
    myChart.data.datasets[0].data[indicator] = inputField.value;
    myChart.update();
    monoRec();
    monoUpdateDual(selector);
}

// Mono Removal Functions
function removalIncrement(selector, indicator) {
    var inputField = document.getElementById(selector);
    inputField.stepUp();
    myChart.data.datasets[1].data[indicator] = inputField.value;
    myChart.update();
    monoRec();
    monoUpdateDual(selector);
}

function removalDecrement(selector, indicator) {
    var inputField = document.getElementById(selector);
    inputField.stepDown();
    myChart.data.datasets[1].data[indicator] = inputField.value;
    myChart.update();
    monoRec();
    monoUpdateDual(selector);
}

function removalPlayables(selector, indicator) {
    var inputField = document.getElementById(selector);
    myChart.data.datasets[1].data[indicator] = inputField.value;
    myChart.update();
    monoRec();
    monoUpdateDual(selector);
}

// Dual Playable Functions
function dualIncrement(selector, indicator) {
    var inputField = document.getElementById(selector);
    var inOne = document.getElementById(selector[0]);
    var inTwo = document.getElementById(selector[1]);
    var inOneR = document.getElementById(selector[0] + "r");
    var inTwoR = document.getElementById(selector[1] + "r");

    inputField.stepUp();
    dualChart.data.datasets[2].data[indicator] = inputField.value;
    dualChart.data.datasets[0].data[indicator] =
        eval(inOne.value) + eval(inOneR.value);
    dualChart.data.datasets[1].data[indicator] =
        eval(inTwo.value) + eval(inTwoR.value);
    dualChart.update();
    dualRec();
}

function dualDecrement(selector, indicator) {
    var inputField = document.getElementById(selector);
    var inOne = document.getElementById(selector[0]);
    var inTwo = document.getElementById(selector[1]);
    var inOneR = document.getElementById(selector[0] + "r");
    var inTwoR = document.getElementById(selector[1] + "r");
    inputField.stepDown();
    dualChart.data.datasets[2].data[indicator] = inputField.value;
    dualChart.data.datasets[0].data[indicator] =
        eval(inOne.value) + eval(inOneR.value);
    dualChart.data.datasets[1].data[indicator] =
        eval(inTwo.value) + eval(inTwoR.value);
    dualChart.update();
    dualRec();
}

function dualPlayables(selector, indicator) {
    var inputField = document.getElementById(selector);
    var inOne = document.getElementById(selector[0]);
    var inTwo = document.getElementById(selector[1]);
    var inOneR = document.getElementById(selector[0] + "r");
    var inTwoR = document.getElementById(selector[1] + "r");
    dualChart.data.datasets[2].data[indicator] = inputField.value;
    dualChart.data.datasets[0].data[indicator] =
        eval(inOne.value) + eval(inOneR.value);
    dualChart.data.datasets[1].data[indicator] =
        eval(inTwo.value) + eval(inTwoR.value);
    dualChart.update();
    dualRec();
}

// Dual Removal Functions
function dualRemovalIncrement(selector, indicator) {
    var inputField = document.getElementById(selector);
    var inOne = document.getElementById(selector[0]);
    var inTwo = document.getElementById(selector[1]);
    var inOneR = document.getElementById(selector[0] + "r");
    var inTwoR = document.getElementById(selector[1] + "r");
    inputField.stepUp();
    dualChart.data.datasets[3].data[indicator] = inputField.value;
    dualChart.data.datasets[0].data[indicator] =
        eval(inOne.value) + eval(inOneR.value);
    dualChart.data.datasets[1].data[indicator] =
        eval(inTwo.value) + eval(inTwoR.value);

    dualChart.update();
    dualRec();
}

function dualRemovalDecrement(selector, indicator) {
    var inputField = document.getElementById(selector);
    var inOne = document.getElementById(selector[0]);
    var inTwo = document.getElementById(selector[1]);
    var inOneR = document.getElementById(selector[0] + "r");
    var inTwoR = document.getElementById(selector[1] + "r");
    inputField.stepDown();
    dualChart.data.datasets[3].data[indicator] = inputField.value;
    dualChart.data.datasets[0].data[indicator] =
        eval(inOne.value) + eval(inOneR.value);
    dualChart.data.datasets[1].data[indicator] =
        eval(inTwo.value) + eval(inTwoR.value);

    dualChart.update();
    dualRec();
}

function dualRemovalPlayables(selector, indicator) {
    var inputField = document.getElementById(selector);
    var inOne = document.getElementById(selector[0]);
    var inTwo = document.getElementById(selector[1]);
    var inOneR = document.getElementById(selector[0] + "r");
    var inTwoR = document.getElementById(selector[1] + "r");
    dualChart.data.datasets[3].data[indicator] = inputField.value;
    dualChart.data.datasets[0].data[indicator] =
        eval(inOne.value) + eval(inOneR.value);
    dualChart.data.datasets[1].data[indicator] =
        eval(inTwo.value) + eval(inTwoR.value);

    dualChart.update();
    dualRec();
}

// Dual Fixing Functions
function fixRemovalIncrement(selector, indicator) {
    var inputField = document.getElementById(selector);
    inputField.stepUp();
    fixChart.data.datasets[0].data[indicator] = inputField.value * 0.5;
    fixChart.data.datasets[1].data[indicator] = inputField.value * 0.5;
    fixChart.update();
    fixRec();
}

function fixRemovalDecrement(selector, indicator) {
    var inputField = document.getElementById(selector);
    inputField.stepDown();
    fixChart.data.datasets[0].data[indicator] = inputField.value * 0.5;
    fixChart.data.datasets[1].data[indicator] = inputField.value * 0.5;
    fixChart.update();
    fixRec();
}

function fixRemovalPlayables(selector, indicator) {
    var inputField = document.getElementById(selector);
    fixChart.data.datasets[0].data[indicator] = inputField.value * 0.5;
    fixChart.data.datasets[1].data[indicator] = inputField.value * 0.5;
    fixChart.update();
    fixRec();
}

// Recommended Functions
function monoRec() {
    // Playables
    primal.count = document.getElementById("P").value;
    justice.count = document.getElementById("J").value;
    time.count = document.getElementById("T").value;
    shadow.count = document.getElementById("S").value;
    fire.count = document.getElementById("F").value;

    // Removal
    primal.removal = document.getElementById("Pr").value;
    justice.removal = document.getElementById("Jr").value;
    time.removal = document.getElementById("Tr").value;
    shadow.removal = document.getElementById("Sr").value;
    fire.removal = document.getElementById("Fr").value;

    //  the data that powers the chart (legacy for D3; May not need? )
    chartdata = [primal, justice, time, shadow, fire];
    bestCount = chartdata.reduce(
        (max, objectIn) =>
            Math.max(eval(objectIn.count) + eval(objectIn.removal), max),
        0
    );
    bestMono = "";
    for (var i = 0; i < chartdata.length; i++) {
        if (
            eval(chartdata[i].count) + eval(chartdata[i].removal) ==
            bestCount
        ) {
            bestMono = chartdata[i].name;
        }
    }
    document.getElementById("bestMono").innerHTML =
        "<h2>Recommended: </br>" + bestMono + "</h2>";
    return bestMono;
}

function dualRec() {
    // Set Recs
    rakano.rec =
        eval(document.getElementById("FJ").value) +
        eval(document.getElementById("J").value) +
        eval(document.getElementById("F").value) +
        eval(document.getElementById("FJr").value) +
        eval(document.getElementById("Jr").value) +
        eval(document.getElementById("Fr").value);
    argenport.rec =
        eval(document.getElementById("JS").value) +
        eval(document.getElementById("J").value) +
        eval(document.getElementById("S").value) +
        eval(document.getElementById("JSr").value) +
        eval(document.getElementById("Jr").value) +
        eval(document.getElementById("Sr").value);
    hooru.rec =
        eval(document.getElementById("JP").value) +
        eval(document.getElementById("J").value) +
        eval(document.getElementById("P").value) +
        eval(document.getElementById("JPr").value) +
        eval(document.getElementById("Jr").value) +
        eval(document.getElementById("Pr").value);
    combrei.rec =
        eval(document.getElementById("JT").value) +
        eval(document.getElementById("J").value) +
        eval(document.getElementById("T").value) +
        eval(document.getElementById("JTr").value) +
        eval(document.getElementById("Jr").value) +
        eval(document.getElementById("Tr").value);
    stonescar.rec =
        eval(document.getElementById("FS").value) +
        eval(document.getElementById("F").value) +
        eval(document.getElementById("S").value) +
        eval(document.getElementById("FSr").value) +
        eval(document.getElementById("Fr").value) +
        eval(document.getElementById("Sr").value);
    skycrag.rec =
        eval(document.getElementById("FP").value) +
        eval(document.getElementById("F").value) +
        eval(document.getElementById("P").value) +
        eval(document.getElementById("FPr").value) +
        eval(document.getElementById("Fr").value) +
        eval(document.getElementById("Pr").value);
    praxis.rec =
        eval(document.getElementById("FT").value) +
        eval(document.getElementById("F").value) +
        eval(document.getElementById("T").value) +
        eval(document.getElementById("FTr").value) +
        eval(document.getElementById("Fr").value) +
        eval(document.getElementById("Tr").value);
    feln.rec =
        eval(document.getElementById("PS").value) +
        eval(document.getElementById("S").value) +
        eval(document.getElementById("P").value) +
        eval(document.getElementById("PSr").value) +
        eval(document.getElementById("Sr").value) +
        eval(document.getElementById("Pr").value);
    xenan.rec =
        eval(document.getElementById("ST").value) +
        eval(document.getElementById("S").value) +
        eval(document.getElementById("T").value) +
        eval(document.getElementById("STr").value) +
        eval(document.getElementById("Sr").value) +
        eval(document.getElementById("Tr").value);
    elysian.rec =
        eval(document.getElementById("PT").value) +
        eval(document.getElementById("P").value) +
        eval(document.getElementById("T").value) +
        eval(document.getElementById("PTr").value) +
        eval(document.getElementById("Pr").value) +
        eval(document.getElementById("Tr").value);

    //  the data that powers the chart (legacy for D3; May not need? )
    chartdata = [
        rakano,
        argenport,
        hooru,
        combrei,
        stonescar,
        skycrag,
        praxis,
        feln,
        xenan,
        elysian
    ];
    bestCount = chartdata.reduce(
        (max, objectIn) => Math.max(eval(objectIn.rec), max),
        0
    );
    bestDual = "";
    for (var i = 0; i < chartdata.length; i++) {
        if (eval(chartdata[i].rec) == bestCount) {
            bestDual = chartdata[i].name;
        }
    }
    document.getElementById("bestDual").innerHTML =
        "<h2>Recommended: </br>" + bestDual + "</h2>";
    return bestDual;
}

function fixRec() {
    return "to be continued";
}

function monoUpdateDual(selector) {
    if (selector[0] == "F") {
        var inOne = document.getElementById(selector[0]);
        var inOneR = document.getElementById(selector[0] + "r");
        var total = eval(inOne.value) + eval(inOneR.value);
        dualChart.data.datasets[0].data[0] = total;
        dualChart.data.datasets[0].data[4] = total;
        dualChart.data.datasets[0].data[5] = total;
        dualChart.data.datasets[0].data[6] = total;
    } else if (selector[0] == "J") {
        var inOne = document.getElementById(selector[0]);
        var inOneR = document.getElementById(selector[0] + "r");
        var total = eval(inOne.value) + eval(inOneR.value);
        dualChart.data.datasets[0].data[1] = total;
        dualChart.data.datasets[0].data[2] = total;
        dualChart.data.datasets[0].data[3] = total;
        dualChart.data.datasets[1].data[0] = total;
    } else if (selector[0] == "T") {
        var inOne = document.getElementById(selector[0]);
        var inOneR = document.getElementById(selector[0] + "r");
        var total = eval(inOne.value) + eval(inOneR.value);
        dualChart.data.datasets[1].data[3] = total;
        dualChart.data.datasets[1].data[6] = total;
        dualChart.data.datasets[1].data[8] = total;
        dualChart.data.datasets[1].data[9] = total;
    } else if (selector[0] == "S") {
        var inOne = document.getElementById(selector[0]);
        var inOneR = document.getElementById(selector[0] + "r");
        var total = eval(inOne.value) + eval(inOneR.value);
        dualChart.data.datasets[0].data[7] = total;
        dualChart.data.datasets[0].data[8] = total;
        dualChart.data.datasets[2].data[1] = total;
        dualChart.data.datasets[2].data[4] = total;
    } else if (selector[0] == "P") {
        var inOne = document.getElementById(selector[0]);
        var inOneR = document.getElementById(selector[0] + "r");
        var total = eval(inOne.value) + eval(inOneR.value);
        dualChart.data.datasets[0].data[9] = total;
        dualChart.data.datasets[1].data[7] = total;
        dualChart.data.datasets[1].data[5] = total;
        dualChart.data.datasets[1].data[2] = total;
    } else {
        console.log("ERROR UPDATING DUAL CHART");
    }
    dualChart.update();
}
