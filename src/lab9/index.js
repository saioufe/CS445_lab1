window.onload = function(){
    fetchEmpl();
    document.getElementById('refresh').onclick = fetchEmpl;
}

async function fetchEmpl(){
    let result = await fetch('https://randomuser.me/api/?results=5');
    let emps = await result.json();
    console.log(emps);
    renderEmp(emps);

}

function renderEmp(emps){
    console.log(emps[0]);
    for (let i = 0; i < emps.results.length; i++) {
        let emp = emps.results[i];
        document.getElementById('img' +i).src = emp.picture.large;
        document.getElementById('name'+i).textContent = emp.name.first+ ' ' + emp.name.last;
        document.getElementById('gender' + i).textContent = 'Gender: '+ emp.gender;
        document.getElementById('email' +i).textContent = emp.email;
    }
}