    function select() {
      let index = document.form.select1.selectedIndex;
      switch (index) {
        case  0:
          selectOne();
          break;
        case  1:
          createTable();
          break;
        case  2:
          addRow();
          break;
        case  3:
          delRow();
          break;
        case  4:
          delTable();
      }
    }

    function selectOne() {
      document.getElementById("commit").style.display = "none";
      document.getElementById("inputs").innerHTML = "";
      document.getElementById("create_inputs").innerHTML = "";
    }

    function createTable() {
      document.getElementById("create_inputs").innerHTML =
          "<input type=\"text\"  id=\"table_name\" placeholder=\"Table Name\">\n" +
          "<input type=\"number\"  id=\"col_number\"  placeholder=\"Columns Numbers\">\n" +
          "<br class=\"createTable\"/>";
      document.getElementById("inputs").innerHTML = "";
      document.getElementById("div_table").innerHTML = "";
      document.form.select2.options[0].selected = true;
      document.getElementById("table_name").onchange = function () {
        if (document.getElementById("table_name").value === "") {
          document.getElementById("inputs").innerHTML = "";
          document.getElementsByTagName("button")[0].style.display = "none";
        }
      };
      document.getElementById("col_number").onchange = create_input_dom;
      document.getElementById("commit").onclick = commit_create;
    }

    function addRow() {
      add_del_inputs();
      document.getElementById("commit").onclick = function () {
        let table = tables[document.form.select2.selectedIndex - 1];
        table.meAddRow(get_inputs_values());
        renewTable(table);
      };
    }

    function delRow() {
      add_del_inputs();
      document.getElementById("commit").onclick = function () {
        let table = tables[document.form.select2.selectedIndex - 1];
        table.meDeleteRow(get_inputs_values());
        renewTable(table);
      };
    }

    function delTable() {
      document.getElementById("inputs").innerHTML =
          "<p style=\"color: red\">WARNING: You cannot undo this action!</p>";
      document.getElementById("create_inputs").innerHTML = "";
      document.getElementById("commit").onclick = commit_delete;
    }

    function add_del_inputs() {
      if (document.form.select2.selectedIndex === 0) {
        selectOne();
        return;
      }
      else {
        document.getElementById("commit").style.display = "inline-block";
        document.getElementById("inputs").innerHTML = "";
        document.getElementById("create_inputs").innerHTML = "";
      }
      let table = tables[document.form.select2.selectedIndex - 1];
      for (let cal = 0; cal < table.attriNumber; cal++) {
        let input = document.createElement("input");
        input.placeholder = table.attris[cal];
        input.type = "text";
        document.getElementById("inputs").appendChild(input);
      }
      document.getElementById("commit").style.display = "inline-block";
    }

    function create_input_dom() {
      document.getElementById("inputs").innerHTML = "";
      let number = document.getElementById("col_number").value;
      if (number > 0) {
        for (let i = 0; i < number; i++) {
          let input = document.createElement("input");
          input.placeholder = "Attribute";
          input.type = "text";
          input.className = "attris";
          document.getElementById("inputs").appendChild(input);
        }
        document.getElementById("commit").style.display = "inline-block";
      }
    }

    function commit_create() {
      let col_number_input = document.getElementById("col_number");
      let name = document.getElementById("table_name").value;
      let number = col_number_input.value;
      let attris = new Array(0);
      let cols = document.getElementsByClassName("attris");
      for (let i = 0; i < number; i++) {
        attris.push(cols[i].value);
      }
      let table = new Table(name, number, attris);
      tables.push(table);
      renewTable(table);
      //add a new option in the second select input
      let option = document.createElement("option");
      option.innerText = name;
      option.selected = true;
      document.form.select2.appendChild(option);
    }

    function commit_delete() {
      if (document.form.select2.selectedIndex === 0) {
        return;
      }
      tables.splice(document.form.select2.selectedIndex - 1, 1);
      document.getElementById("div_table").innerHTML = "";
      document.form.select2.removeChild(document.form.select2.options[document.form.select2.selectedIndex]);
      document.form.select2.options[0].selected = true;
    }

    function get_inputs_values() {
      let list = new Array(0);
      let inputs = document.getElementById("inputs");
      for (let val of inputs.childNodes) {
        list.push(val.value);
      }
      return list;
    }

    function renewTable(table) {
      //removes the previous table and add the new table
      document.getElementById("div_table").innerHTML = "";
      document.getElementById("div_table").appendChild(table.table);
    }

    class Table {
      constructor(name, attrNumber, attrs) {
        this.name = name;
        this.attriNumber = attrNumber;
        this.attris = attrs;
        this.table = document.createElement("table");
        let th = this.table.createTHead();
        let tr = document.createElement("tr");
        let newCell;
        for (let i = 0; i < this.attriNumber; i++) {
          newCell = tr.insertCell(i);
          newCell.innerText = attrs[i];
        }
        th.appendChild(tr);
        this.table.createTBody();
        // let tb= document.createElement("tbody");
        // this.table.appendChild(tb);
      }

      meAddRow(list) {
        let newRow = this.table.tBodies[0].insertRow(this.table.length);
        let newCell;
        for (let i = 0; i < this.attriNumber; i++) {
          newCell = newRow.insertCell(i);
          newCell.innerText = list[i];
        }
      }

      meDeleteRow(list) {
        let iter = this.table.tBodies[0].childNodes[Symbol.iterator]();
        let o = iter.next();
        while (!o.done) {
          let r = o.value.childNodes;
          let flag = true;
          for (let i = 0; i < list.length; i++) {
            if (!(list[i] === (r[i]).innerText || list[i] === "")) {
              flag = false;
            }
          }
          if (flag) {
            this.table.tBodies[0].removeChild(o.value);
            iter = this.table.tBodies[0].childNodes[Symbol.iterator]();
            o = iter.next();
          }
          else {
            o = iter.next();
          }
        }
      }
    }

    window.tables = new Array(0);
    document.form.select1.onchange = select;
    document.form.select2.onchange = function () {
      if (document.form.select2.selectedIndex === 0) {
        document.getElementById("div_table").innerHTML = "";
        return;
      }
      let table = tables[document.form.select2.selectedIndex - 1];
      renewTable(table);
    };
