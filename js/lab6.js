
function creatItem1() {
  var item = document.createElement("div");
  var tith2 = document.createElement("h2");
  var inB1 = document.createElement("div");
  var inB2 = document.createElement("div");
  var list = document.createElement("ul");
  var tith3_1 = document.createElement("h3");
  var tith3_2 = document.createElement("h3");

        item.className = "item";
        inB1.className = "inner-box";
        inB2.className = "inner-box";

        tith2.appendChild(document.createTextNode(countries[0].name));
        item.appendChild(tith2);

        var para = document.createElement("p");
        para.appendChild(document.createTextNode(countries[0].continent));
        item.appendChild(para);

        tith3_1.appendChild(document.createTextNode("Cities"));
        inB1.appendChild(tith3_1);

        for (var i of countries[0].cities) {
            var para = document.createElement("li");
            para.appendChild(document.createTextNode(i));
            list.appendChild(para);
        }
        inB1.appendChild(list);

        item.appendChild(inB1);

        tith3_2.appendChild(document.createTextNode("Popular Photos"));
        inB2.appendChild(tith3_2);

        for (var i of countries[0].photos) {
            var image = document.createElement("img");
            image.src = "images/" + i;
            image.className = "photo";
            inB2.appendChild(image);
        }

        item.appendChild(inB2);

        var button = document.createElement("button");
        button.className = "button";
        button.appendChild(document.createTextNode("Vist"));

        item.appendChild(button);

        document.getElementById("container").appendChild(item);
    }

  function creatItem2() {
    var item = document.createElement("div");
    var tith2 = document.createElement("h2");
    var inB1 = document.createElement("div");
    var inB2 = document.createElement("div");
    var list = document.createElement("ul");
    var tith3_1 = document.createElement("h3");
    var tith3_2 = document.createElement("h3");

          item.className = "item";
          inB1.className = "inner-box";
          inB2.className = "inner-box";

          tith2.appendChild(document.createTextNode(countries[1].name));
          item.appendChild(tith2);

          var para = document.createElement("p");
          para.appendChild(document.createTextNode(countries[1].continent));
          item.appendChild(para);

          tith3_1.appendChild(document.createTextNode("Cities"));
          inB1.appendChild(tith3_1);

          for (var i of countries[1].cities) {
              var para = document.createElement("li");
              para.appendChild(document.createTextNode(i));
              list.appendChild(para);
          }
          inB1.appendChild(list);

          item.appendChild(inB1);

          tith3_2.appendChild(document.createTextNode("Popular Photos"));
          inB2.appendChild(tith3_2);

          for (var i of countries[1].photos) {
              var image = document.createElement("img");
              image.src = "images/" + i;
              image.className = "photo";
              inB2.appendChild(image);
          }

          item.appendChild(inB2);

          var button = document.createElement("button");
          button.className = "button";
          button.appendChild(document.createTextNode("Vist"));

          item.appendChild(button);

          document.getElementById("container").appendChild(item);
      }

  function creatItem3() {
    var item = document.createElement("div");
    var tith2 = document.createElement("h2");
    var inB1 = document.createElement("div");
    var inB2 = document.createElement("div");
    var list = document.createElement("ul");
    var tith3_1 = document.createElement("h3");
    var tith3_2 = document.createElement("h3");
          item.className = "item";
          inB1.className = "inner-box";
          inB2.className = "inner-box";

          tith2.appendChild(document.createTextNode(countries[2].name));
          item.appendChild(tith2);

          var para = document.createElement("p");
          para.appendChild(document.createTextNode(countries[2].continent));
          item.appendChild(para);

          tith3_1.appendChild(document.createTextNode("Cities"));
          inB1.appendChild(tith3_1);

          for (var i of countries[2].cities) {
              var para = document.createElement("li");
              para.appendChild(document.createTextNode(i));
              list.appendChild(para);
          }
          inB1.appendChild(list);

          item.appendChild(inB1);

          tith3_2.appendChild(document.createTextNode("Popular Photos"));
          inB2.appendChild(tith3_2);

          for (var i of countries[2].photos) {
              var image = document.createElement("img");
              image.src = "images/" + i;
              image.className = "photo";
              inB2.appendChild(image);
          }

          item.appendChild(inB2);

          var button = document.createElement("button");
          button.className = "button";
          button.appendChild(document.createTextNode("Vist"));

          item.appendChild(button);

          document.getElementById("container").appendChild(item);
      }

  function creatItem4() {
    var item = document.createElement("div");
    var tith2 = document.createElement("h2");
    var inB1 = document.createElement("div");
    var inB2 = document.createElement("div");
    var list = document.createElement("ul");
    var tith3_1 = document.createElement("h3");
    var tith3_2 = document.createElement("h3");
          item.className = "item";
          inB1.className = "inner-box";
          inB2.className = "inner-box";

          tith2.appendChild(document.createTextNode(countries[3].name));
          item.appendChild(tith2);

          var para = document.createElement("p");
          para.appendChild(document.createTextNode(countries[3].continent));
          item.appendChild(para);

          tith3_1.appendChild(document.createTextNode("Cities"));
          inB1.appendChild(tith3_1);

          for (var i of countries[3].cities) {
              var para = document.createElement("li");
              para.appendChild(document.createTextNode(i));
              list.appendChild(para);
          }
          inB1.appendChild(list);

          item.appendChild(inB1);

          tith3_2.appendChild(document.createTextNode("Popular Photos"));
          inB2.appendChild(tith3_2);

          for (var i of countries[3].photos) {
              var image = document.createElement("img");
              image.src = "images/" + i;
              image.className = "photo";
              inB2.appendChild(image);
          }

          item.appendChild(inB2);

          var button = document.createElement("button");
          button.className = "button";
          button.appendChild(document.createTextNode("Vist"));

          item.appendChild(button);

          document.getElementById("container").appendChild(item);
                }
window.onload = function () {
    creatItem1();
    creatItem2();
    creatItem3();
    creatItem4();
}
