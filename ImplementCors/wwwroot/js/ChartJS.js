// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

/*$(document).ready(function () {
    $.ajax({
        url: "https://localhost:44300/api/persons/GetPerson/",
        type: "GET"
    }).done((result) => {
        console.log(result);
        var female = result.data.filter(data => data.gender === "Female").length;
        var male = result.data.filter(data => data.gender === "Male").length;
        console.log(male);
        var options = {
            series: [{
                data: [male, female]
            }],
            chart: {
                height: 350,
                type: 'bar',
            },
            plotOptions: {
                bar: {
                    borderRadius: 10,
                    dataLabels: {
                        position: 'top', // top, center, bottom
                    }
                }
            },
            xaxis: {
                categories: ["Male", "Female"],
                position: 'bottom',
                labels: {
                    style: {
                        fontSize: '15px'
                    }
                },
                axisBorder: {
                    show: true
                },
                axisTicks: {
                    show: true
                },
                crosshairs: {
                    fill: {
                        type: 'gradient',
                        gradient: {
                            colorFrom: '#c8f6fb',
                            colorTo: '#e4e2ec',
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5,
                        }
                    }
                },
                tooltip: {
                    enabled: false,
                }
            },
            yaxis: {
                axisBorder: {
                    show: true
                },
                axisTicks: {
                    show: true,
                },
                labels: {
                    show: true,
                    style: {
                        fontSize: '15px'
                    },
                    formatter: function (val) {
                        return val;
                    }
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#chartgender"), options);
        chart.render();
    }).fail((error) => {
        Swal.fire({
            title: 'Error!',
            text: 'Data Cannot Deleted',
            icon: 'Error',
            confirmButtonText: 'Next'
        })
    });
});*/


//donut chart gender
$(document).ready(function () {
    $.ajax({
        url: "https://localhost:44300/api/persons/GetPerson/",
        type: "GET"
    }).done((result) => {
        console.log(result);
        var female = result.filter(data => data.gender === "Female").length;
        var male = result.filter(data => data.gender === "Male").length;
        console.log(male);
        var options = {
            series: [female, male],
            colors: ['#fc6cba','#1346f7'],
            chart: {
                type: 'donut'
            },
            labels: ['female', 'male'],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 50
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }],
            plotOptions: {
                pie: {
                    expandOnClick: true
                }
            }
        };

        var chart = new ApexCharts(document.querySelector("#chartgender"), options);
        chart.render();
    }).fail((error) => {
        Swal.fire({
            title: 'Error!',
            text: 'Data Cannot Deleted',
            icon: 'Error',
            confirmButtonText: 'Next'
        })
    });
});

//pie chart degree
$(document).ready(function () {
    $.ajax({
        url: "https://localhost:44300/api/persons/GetPerson/",
        type: "GET"
    }).done((result) => {
        console.log(result);
        var stanford = result.filter(data => data.universityId === 1).length;
        var harvard = result.filter(data => data.universityId === 2).length;
        var ntu = result.filter(data => data.universityId === 3).length;
        var itb = result.filter(data => data.universityId === 4).length;
        var london = result.filter(data => data.universityId === 5).length;
        var options = {
            series: [{
                data: [stanford, harvard, ntu, itb, london]
            }],
            labels: ['stanford', 'harvard', 'ntu', 'itb', 'london'],
            chart: {
                width: 700,
                height: 350,
                type: 'bar',
            },
            plotOptions: {
                bar: {
                    borderRadius: 10,
                    dataLabels: {
                        position: 'top', // top, center, bottom
                    }
                }
            },
            xaxis: {
                categories: ["Stanford","Harvard", "NTU",  "ITB",  "London"],
                position: 'bottom',
                labels: {
                    style: {
                        fontSize: '15px'
                    }
                },
                axisBorder: {
                    show: true
                },
                axisTicks: {
                    show: true
                },
                crosshairs: {
                    fill: {
                        type: 'gradient',
                        gradient: {
                            colorFrom: ' #c8f6fb',
                            colorTo: '#e4e2ec',
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5,
                        }
                    }
                },
                tooltip: {
                    enabled: false,
                }
            },
            yaxis: {
                axisBorder: {
                    show: true
                },
                axisTicks: {
                    show: true,
                },
                labels: {
                    show: true,
                    style: {
                        fontSize: '15px'
                    },
                    formatter: function (val) {
                        return val;
                    }
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#chartuniv"), options);
        chart.render();
    }).fail((error) => {
        Swal.fire({
            title: 'Error!',
            text: 'Data Cannot Deleted',
            icon: 'Error',
            confirmButtonText: 'Next'
        })
    });
});

//bar chart university
$(document).ready(function () {
    $.ajax({
        url: "https://localhost:44300/api/persons/GetPerson/",
        type: "GET"
    }).done((result) => {
        console.log(result);
        var bachelor = result.filter(data => data.degree === "Bachelor Degree").length;
        var master = result.filter(data => data.degree === "Master Degree").length;
        var doctoral = result.filter(data => data.degree === "Doctoral Degree").length;
        var options = {
            series: [bachelor, master, doctoral],
            chart: {
                width: 500,
                type: 'pie',
            },
            labels: ["Bachelor", "Master", "Doctoral"],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        };
        var chart = new ApexCharts(document.querySelector("#chartdegree"), options);
        chart.render();
    }).fail((error) => {
        Swal.fire({
            title: 'Error!',
            text: 'Data Cannot Deleted',
            icon: 'Error',
            confirmButtonText: 'Next'
        })
    });
});
