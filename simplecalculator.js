function call(click_id) {
    var v1 = parseFloat(document.getElementById("ip1").value);
    var v2 = parseFloat(document.getElementById("ip2").value);
    if (isNaN(v1) || isNaN(v2))
        alert("enter a valid number");
    else if (click_id == "add")
        document.getElementById("output").value = v1 + v2;
    else if (click_id == "sub")
        document.getElementById("output").value = v1 - v2;
    else if (click_id == "mul")
        document.getElementById("output").value = v1 * v2;
    else if (click_id == "div")
        document.getElementById("output").value = v1 / v2;
}