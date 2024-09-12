var id =0;
var total =0;

function add() {
    id++;
    var pname = document.getElementById('pname').value;
    var qty = document.getElementById('qty').value;
    var price = document.getElementById('uprice').value;
    var subtotal = (qty*price);
    total += subtotal;
    var row = "<tr>";
    row += "<td>" + id + "</td>";
    row += "<td>" + pname + "</td>";
    row += "<td>" + qty + "</td>";
    row += "<td>" + price + "$</td>";
    row += "<td>" + subtotal + "$</td>";
    row += "</tr>";
    document.getElementById('table').innerHTML += row;
    document.getElementById('total').innerHTML = total + "$";
}

