document.getElementById("add").disabled = true;
document.getElementById("delete").disabled = true;

document.getElementById("create").addEventListener("click", createTable);
document.getElementById("add").addEventListener("click", addElement);
document.getElementById("delete").addEventListener("click", removeElement);

function createTable(){
    if (document.getElementById("table") == null){
        let table = document.createElement("table");
        table.id = "table";
        document.body.append(table);

        document.getElementById("add").disabled = false;
        document.getElementById("delete").disabled = false;
    } else {
        alert("Table already exists");
    }
}

function addElement(){
    let table = document.getElementById("table");

    if (table == null){
        return;
    }

    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.append(table.rows.length + 1);
    tr.append(td1);

    let td2 = document.createElement("td");
    td2.append("Text");
    tr.append(td2);

    table.append(tr);
}

function removeElement(){
    let table = document.getElementById("table");

    if (table == null){
        return;
    }

    let remove_input = document.getElementById("remove-index");

    if (isNaN(remove_input.value)){
        alert("Нужно вводить числа");
        return;
    }else if(Number(remove_input.value) < 1 || Number(remove_input.value) > table.rows.length){
        alert("Строки c таким номером нет");
        return;
    }

    let n = remove_input.value - 1;

    table.rows[n].remove();

    let maxNumber = table.rows.length;
    for(let i = n; i < maxNumber; i++){
        table.rows[i].firstChild.innerHTML = i + 1;
    }
}