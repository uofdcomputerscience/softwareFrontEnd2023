var studentsAndTimes = [
    {'name' : 'dre', 'time' : '7:45', 'date' : '04/29/2023'},
    {'name' : 'teresa', 'time' : '12:40', 'date' : '04/29/2023'},
    {'name' : 'sasha', 'time' : '9:45', 'date' : '04/29/2023'},
]

function buildtable(data){

    for (var i = 0; i < data.length; i++){
        var row = ` <tr>
                        <td> ${studentsAndTimes[i].name}</td>
                        <td> ${studentsAndTimes[i].time}</td>
                        <td> ${studentsAndTimes[i].date}</td>


                    </tr> 
        `

        table.innerHTML += row
    }

    var table = document.getElementById("Attendance")
}

buildtable(studentsAndTimes)
// document.getElementById("dateANDtime").innerHTML = Date();
