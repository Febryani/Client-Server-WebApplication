/*let cats = [];
const animals = [
    {
        name: 'fluffy',
        species: 'cat',
        class: { name: 'mamalia' }
    },
    {
        name: 'nemo',
        species: 'fish',
        class: { name: 'vertebrata' }
    },
    {
        name: 'ursa',
        species: 'cat',
        class: { name: 'mamalia' }
    },
    {
        name: 'puppy',
        species: 'dog',
        class: { name: 'mamalia' }
    },
    {
        name: 'seal',
        species: 'fish',
        class: { name: 'vertebrata' }
    },
    {
        name: 'snout moths',
        species: 'butterfly',
        class: { name: 'arthropods' }
    }
];


//---- method 1 (for)
for (i = 0; i < animals.length; i++)
{
    if (animals[i].species == 'cat') {
        cats.push(animals[i]);
    }
    else
    {
        animals[i].class.name = 'non mamalia';
    }
    
}

//---- method 2 (array filter)
cats = animals.filter(Animal => Animal.species == 'cat');
animals.forEach((Animal) => {
    if (Animal.species != 'cat') {
        Animal.class.name = 'non mamalia';
    }
})

//show data
console.log(cats);
console.log(animals);*/


/*function loadDoc(key) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.getElementById("detail").innerHTML = this.responseText;
        xhttp.open("get", "https://swapi.dev/api/people/" + key);
        xhttp.send();
    }
}

function showDetail() {
    url: "https://swapi.dev/api/people/" + key;
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.data);
        })
        .catch(error => {
            console.log(error);
        });
}*/

/*(function () {
    document.getElementById('detailInfo').addEventListener('click', showDetail(key), true);
})();*/

/*$.ajax({
    url: "https://swapi.dev/api/people/"
}).done((result) => {
var text = "";
$.each(result.results, function (key, val) {
    text += `<tr>
                <td>${key + 1}</td>
                <td>${val.name}</td>
                <td>${val.gender}</td>
                <td>${val.height}</td>
                <td>${val.mass}</td>
                <td>
                    <button type ="button" class="btn btn-primary" data-toggle ="modal" data-target="#exampleModal${key + 1}">More
                    </button>
                    <div class= "modal fade" id="exampleModal${key + 1}" tabindex="-1" aria-labelledby="exampleModal${key + 1}Label" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="#exampleModal${key + 1}Label">Detail of ${val.name}</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-label="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <ul>
                                        <li>Lahir : ${val.birth_year}</li>
                                        <li>Warna Kulit : ${val.skin_color}</li>
                                        <li>Warna Mata: ${val.eye_color}</li>
                                        <li>Warna Rambut: ${val.hair_color}</li>
                                    </ul>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                     </div>
                </td>
            </tr>`;
    });
$("#starwars").html(text);
}).fail((result) => {
    console.log(result);
});*/
/*
$(document).ready(function () {
    $.ajax({
        url: "https://swapi.dev/api/people/"
    }).done((result) => {
        var text = "";
        $.each(result.results, function (key, val) {
            text += `<tr>
                        <td>${key + 1}</td>
                        <td>${val.name}</td>
                        <td>${val.gender}</td>
                        <td>${val.height}</td>
                        <td>${val.mass}</td>
                        <td>
                            <button type ="button" class="btn btn-primary" data-toggle ="modal" data-target="#exampleModal" onclick = "detail('${val.url}')">More
                            </button>
                        </td>
                    </tr>`;
        });
        $("#starwars").html(text);
    }).fail((result) => {
        console.log(result);
    });
});

function detail(url) {
    $.ajax({
        url: url
    }).done((result) => {
        var text = "";
        text += `<ul>
                    <li>Nama        : ${result.name}</li>
                    <li>Lahir       : ${result.birth_year}</li>
                    <li>Warna Kulit : ${result.skin_color}</li>
                    <li>Warna Mata  : ${result.eye_color}</li>
                    <li>Warna Rambut: ${result.hair_color}</li>
                </ul>`;
        $("#starwarsDetail").html(text);
    }).fail((result) => {
        console.log(result);
    });
}*/
/*
$(document).ready(function () {
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon"
    }).done((result) => {
        var text = "";
        $.each(result.results, function (key, val) {
            text += `<tr>
                        <td>${key + 1}</td>
                        <td>${val.name}</td>
                        <td>
                            <button type ="button" class="btn btn-primary" data-toggle ="modal" data-target="#exampleModal" onclick = "detail('${val.url}')">More
                            </button>
                        </td>
                    </tr>`;
        });
        $("#pokemon").html(text);
    }).fail((result) => {
        console.log(result);
    });
});

function detail(url) {
    console.log(url);
    $.ajax({
        url: url
    }).done((result) => {
        var badges="";
        for (var i = 0; i < result.types.length; i++){
            if (result.types[i].type.name === 'water') {
                badges += `<span class="badge badge-pill badge-primary">Water</span>`;
            }
            else if (result.types[i].type.name === 'poison') {
                badges += `<span class="badge badge-pill badge-danger">Poison</span>`;
            }
            else if (result.types[i].type.name === 'grass') {
                badges += `<span class="badge badge-pill badge-success">Grass</span>`;
            }
            else if (result.types[i].type.name === 'fire') {
                badges += `<span class="badge badge-pill badge-dark">Fire</span>`;
            }
            else if (result.types[i].type.name === 'flying') {
                badges += `<span class="badge badge-pill badge-info">Flying</span>`;
            }
            else if (result.types[i].type.name === 'bug') {
                badges += `<span class="badge badge-pill badge-warning">Bug</span>`;
            }
            else if (result.types[i].type.name === 'normal'){
                badges += `<span class="badge badge-pill badge-secondary">Normal</span>`;
            }
        };
        var moves="";
        for (var i = 0; i < 5; i++) {
            moves += `<li>${result.moves[i].move.name}</li>`;
        }
        console.log(result);
        var text = "";
        text += `<div class="container">
                    <div class="row justify-content-md-center">
                        <div class="col">
                            <img src = "${result.sprites.other.dream_world.front_default}" alt = "${result.forms[0].name}" width= 150px>
                        </div>
                    </div>
                    <div class="row justify-content-md-center">
                        <div class="col">
                            ${badges}
                        </div>
                    </div>
                    <div class="row justify-content-md-center">
                        <div class="col-sm-3">Name</div>
                        <div class="col-sm-2">:</div>
                        <div class="col-sm-5">${result.forms[0].name}</div>
                    </div>
                    <div class="row justify-content-md-center">
                        <div class="col-sm-3">Moves</div>
                        <div class="col-sm-2">:</div>
                        <div class="col-sm-5">
                             ${moves}
                        </div>
                    </div>
                </div>`
        $("#pokemonDetail").html(text);
    }).fail((result) => {
        console.log(result);
    });
}*/

/*$(document).ready(function () {
    $.ajax({
        url: "https://localhost:44300/api/persons/GetPerson/"
    }).done((result) => {
        console.log(result);
        var text = "";
        $.each(result.data, function (key, val) {
            text += `<tr>
                        <td>${result.data[key].nik}</td>
                        <td>${result.data[key].fullName}</td>
                        <td>${result.data[key].gender}</td>
                        <td>${result.data[key].birthDate}</td>
                        <td>${result.data[key].phoneNumber}</td>
                        <td>${result.data[key].email}</td>
                    </tr>`;
        });
        $("#getallvm").html(text);
    }).fail((result) => {
        console.log(result);
    });
});*/


$.ajax({
    url: "/persons/getallperson"
}).done((result) => {
    console.log(result);
})

//Data table filled//
$(document).ready(function () {

    $('#dataTable').DataTable({
        dom: 'Bfrtip',
        buttons: [
            {
                extend: 'collection',
                text: 'Export',
                buttons: [
                    'copy',
                    {
                        extend: 'excelHtml5',
                        exportOptions: {
                            columns: [1, 2, 3, 4, 5]
                        }
                    },

                    {
                        extend: 'pdfHtml5',
                        exportOptions: {
                            columns: [1, 2, 3, 4, 5]
                        }
                    },
                ]
            }
        ],
        filter: true,
        ajax: {
            "url": "/persons/getallperson",
            "datatype": "json",
            "dataSrc": ""
        },
        columns: [
            {
                "orderable": false,
                "data": "id",
                "render": function (data, type, row, meta) {
                    return meta.row + meta.settings._iDisplayStart + 1;
                }
            },
            { "data": "nik" },
            { "data": "fullName"},
            {
                "data": "gender",
                "render": function (data, type, row) {
                    if (data === 0) {
                        return data = "Male";
                    }
                    else {
                        return data = "Female";
                    }
                }
            },
            {
                "data": "phoneNumber",
                "render": function (data, type, row) {

                    return "+62" + data.substr(1);
                },
                "autoWidth": true
            },
            {"data": "email" },
            {
                "orderable": false,
                "data": null,
                "render": function (data, type, row) {
                    return `<button type="button" class="btn btn-primary"
                             data-toggle="modal" data-target="#showDetail"
                             onclick="detail('${row["nik"]}')">Show</button>
                            <button type = "button" class="btn btn-danger"
                             id="btnDelete"
                             onclick = "deleted('${row["nik"]}')">Delete</button ></td>`;
                }
            }
        ]
    });
});

function detail(nik) {
    console.log(nik);
    $.ajax({
        url: "/Persons/GetPersonByNik/" + nik
    }).done((result) => {
        console.log(result);
        var university = "";
        if (result[0].universityId == '1') {
            university = "NTU"
        }
        else if (result[0].universityId == '2') {
            university = "Harvard University"
        }
        else if (result[0].universityId == '3') {
            university = "ITB"
        }
        else if (result[0].universityId == '4') {
            university = "Stanford University"
        }
        else {
            university = "London University"
        }
        var text = "";
        text += `
                    <div class="containerData">
                        <div class="row">
                            <div class="col-sm-3">Fullname</div>
                            <div class="col-sm-1">:</div>
                            <div class="col-sm-5">${result[0].fullName}</div>
                        </div>
                        <div class="row">
                            <div class="col-sm-3">Birthdate</div>
                            <div class="col-sm-1">:</div>
                            <div class="col-sm-5">${result[0].birthDate.substr(0, 10)}</div>
                        </div>
                        <div class="row">
                            <div class="col-sm-3">University</div>
                            <div class="col-sm-1">:</div>
                            <div class="col-sm-5"> ${university}</div>
                        </div>
                        <div class="row">
                            <div class="col-sm-3">Degree</div>
                            <div class="col-sm-1">:</div>
                            <div class="col-sm-5">${result[0].degree}</div>
                        </div>
                        <div class="row">
                            <div class="col-sm-3">GPA</div>
                            <div class="col-sm-1">:</div>
                            <div class="col-sm-5">${result[0].gpa}</div>
                        </div>
                        <div class="row">
                            <div class="col-sm-3">Salary</div>
                            <div class="col-sm-1">:</div>
                            <div class="col-sm-5"> Rp ${result[0].salary}</div>
                        </div>
                    </div>
                `;
        $("#personDetail").html(text);
    }).fail((result) => {
        console.log(result);
    })
};

function deleted(nik) {
    console.log(nik);
    Swal.fire({
        title: 'Do you want to remove this?',
        showCancelButton: true,
        confirmButtonText: 'Yes, i do!',
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        console.log(result);
        if (result.isConfirmed) {
            $.ajax({
                type: "DELETE",
                /*url: "https://localhost:44300/api/Persons/" + nik,*/
                url: "/Persons/Deleted/" + nik,
                success: function (result) {
                    $('#dataTable').DataTable().ajax.reload();
                    Swal.fire({
                        title: "Remove Success!",
                        text: "Data has been removed",
                        icon: "success",
                        button: "Ok"
                    });
                },
                error: function (xhr, status, error) {
                    Swal.fire({
                        title: "Oh no...",
                        text: "Removing data unsuccessful ...",
                        icon: "error",
                        button: "OK"
                    });
                }
            });
        } else if (result.isDismissed) {
            Swal.fire('Remove data canceled!', '', 'info')
        }
    })
};

$("#submitData").click(post => {
    var obj = DataInsert();
    console.log(obj);
    var email = $('#email').val();
    console.log(email);
    post.preventDefault();
    $.ajax({
        /*url: "https://localhost:44300/API/Persons/InsertVM",*/
        url: "/Persons/Register",
        type: 'POST',
        data: obj,
        dataType: 'json',
        /*data: $('#regisForm').serialize(),*/
        /*contentType: "application/json; charset=utf-8",*/
        /*contentType: 'application/json',
        Accept: 'application/json',*/
        success: function (data, x, xhr) {
            if (data.statusCode == 200) {
                Swal.fire({
                                title: "Welcome!",
                                text: "Register successful ...",
                                icon: "success",
                                button: "OK"
                });
                $('#dataTable').DataTable().ajax.reload();
                Reset();
            }
            else {
                Swal.fire({
                    title: "Oh no...",
                    text: "Register unsuccessful ...",
                    icon: "error",
                    button: "OK"
                });
            }
            console.log(data);
            /* $('#insertData').modal('hide');*/
        },
        fail: function (data) {
            Swal.fire({
                title: "Oh no...",
                text: "Register unsuccessful ...",
                icon: "error",
                button: "OK"
            });
            console.log(data.message)
        },
        error: function (xhr, status, error) {
            /*var err = eval("(" + xhr.responseJSON + ")");
            alert(xhr.responseJSON);
            console.log(obj);
            console.log(JSON.stringify(obj));*/
            Swal.fire({
                title: "Oh no...",
                text: "Register unsuccessful ...",
                icon: "error",
                button: "OK"
            });
            console.log(error);
            Reset();
        }
    });
})

function DataInsert() {
    var obj = {
        "NIK": $('#nik').val(),
        "Firstname": $('#firstname').val(),
        "Lastname": $('#lastname').val(),
        "PhoneNumber": $('#phonenumber').val(),
        "BirthDate": $('#birthdate').val(),
        "Salary": parseInt($('#salary').val()),
        "Email": $('#email').val(),
        "Gender": parseInt($('#gender').val()),
        "Password": $('#password').val(),
        "UniversityId": parseInt($('#universityId').val()),
        "Degree": $('#degree').val(),
        "GPA": $('#gpa').val()
    };
    return obj;
}

//for clear form//
function Reset() {
        $('#regisForm')[0].reset();
    }










//show or hide password//
/*function showPass() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}*/

//unable submit button until form filled by validation checking//
/*$(document).ready(function () {
    $("#regisForm").validate(
        submitHandler = function () {
            $("#regisForm").submit();
            let button = document.querySelector("#submitData");
            button.disabled = false;
        }
    )
});*/
