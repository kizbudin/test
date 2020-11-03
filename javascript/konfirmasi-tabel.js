function example4() {
    var table = document.getElementById("tableid4");
    var rows = table.rows; // or table.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        rows[i].onclick = (function() { // closure
            var cnt = i; // save the counter to use in the function
            return function() {
              alert("row"+cnt+" data="+this.cells[0].innerHTML);
            }    
        })(i);
    }
}
window.onload = function() { example4(); }​