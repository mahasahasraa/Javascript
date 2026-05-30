function calculate() {
    let studentName = document.getElementById("name").value;
    let tamil = parseInt(document.getElementById("tamil").value);
    let english = parseInt(document.getElementById("english").value);
    let maths = parseInt(document.getElementById("maths").value);
    let science = parseInt(document.getElementById("science").value);
    let social = parseInt(document.getElementById("social").value);

    let marks = [tamil,english,maths,science,social];

    for (let i= 0; i<marks.length; i++){
        if (isNaN(marks[i])){
            alert("Please enter marks for all subjects")
            return
        } else if (marks[i]<0 || marks[i]>100){
           alert("Marks must be between 0 and 100")
            return
        }
    }

    let total = 0;
     for (let i= 0; i<marks.length; i++){
       total+=marks[i];
    }

    let percentage = total / 5;
    let grade;
    
    if (percentage >= 90) {
        grade = "A";
    } else if (percentage >= 75) {
        grade = "B";
    } else if (percentage >= 50) {
        grade = "C";
    } else {
        grade = "Fail";
    }
    document.getElementById("result").innerHTML = ` <h2>Student Result</h2>
    Student Name : ${studentName}
    <br><br>
    Total Marks : ${total}
    <br><br>
    Percentage : ${percentage}%
    <br><br>
    Grade : ${grade}`;

    document.getElementById("forms").style.display = "none";
    document.getElementById("resultSection").style.display = "block";
}


function goBack(){
    document.getElementById("resultSection") .style.display = "none";
    document.getElementById("forms").style.display = "block";
    document.getElementById("studentForm").reset()
}