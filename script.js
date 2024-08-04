function getAge() {
    let d = document.getElementById("dob");
    let res = document.getElementById("result");
    let dob = d.value;

    if (dob === "") {
        alert("Enter your Date of Birth");
        return;
    }

    let currentDate = new Date();
    let dobDate = new Date(dob);

    let age = currentDate.getFullYear() - dobDate.getFullYear();
    let mon = currentDate.getMonth() - dobDate.getMonth();
    let day = currentDate.getDate() - dobDate.getDate();

    if(age<=0){
        res.innerHTML="Invalid Date Of Birth";
        d.value="";
        return;
    }

    if (day < 0) {
        mon--;
        let prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        day += prevMonth.getDate();
    }

    if (mon < 0) {
        age--;
        mon += 12;
    }

    res.textContent = `Your age is ${age} years, ${mon} months, and ${day} days.`;
    d.value="";

}
