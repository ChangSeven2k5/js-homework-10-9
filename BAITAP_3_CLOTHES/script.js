var id = 0;
var total = 0;
function myAdd() {
    id++;
    var pname = form.pname.value;
    var pqty = form.pqty.value;
    var price = form.price.value;
    var subtotal = (pqty * price);
    total += subtotal;
    var row = "<tr>";
    row += "<td>" + id + "</td>";
    row += "<td>" + pname + "</td>";
    row += "<td>" + pqty + "</td>";
    row += "<td>" + price + "</td>";
    row += "<td>" + subtotal + "</td>";
    row += "</tr>";
    document.getElementById('table').innerHTML += row;
    document.getElementById('result').innerHTML = total;

}
