var id = 1;
function sellFunction1() {
    var pname = document.getElementById('pname').value;
    var qty = document.getElementById('qty').value;
    var uprice = document.getElementById('uprice').value;
    var dcount = document.getElementById('dcount').value;
    var subtotal = qty*uprice*(1-dcount/100);
    var row = "<tr>";
    row += "<td>" + id + "</td>";
    row += "<td>" + pname + "</td>";
    row += "<td>" + qty + "</td>";
    row += "<td>$" + uprice + "</td>";
    row += "<td>" + dcount + "</td>";
    row += "<td>$" + subtotal + "</td>";
    row += "</tr>";
    document.getElementById('tbl').innerHTML += row;
    id++;
}

function sellFunction2() {
    var pname = document.getElementById('pname').value = " ";
    var qty = document.getElementById('qty').value = " ";
    var uprice = document.getElementById('uprice').value = " ";
    var dcount = document.getElementById('dcount').value = " ";
    var subtotal = qty*uprice*(1-dcount/100);
}