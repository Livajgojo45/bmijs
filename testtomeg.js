function index() {
    var cm = document.getElementById("magassag").value;
    var kg = document.getElementById("testsuly").value;
    kg = Number(kg);
    cm = Number(cm); 
    cm = cm/100
    var testtomegindex = kg/(cm*cm);
    document.getElementById("eredmeny").innerHTML = Math.round(testtomegindex*100)/100;
}