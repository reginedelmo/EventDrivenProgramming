let db = new Localbase('db');

function loadData(){
  fetch("data.json")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      var item_data = '';
      var count = 1;
      for(var i=0; i<data.length; i++){
        item_data += '<tr>';
        item_data += '<td>'+count+++'</td>';
        item_data += '<td>'+data[i].name+'</td>';
        item_data += '<td>₱ '+data[i].price+'.00</td>';
        item_data += '<td><button id="view" onclick="viewItem()">View  <i class="tiny material-icons">remove_red_eye</i></button></td>';
        item_data += '</tr>';

      }
      document.getElementById("myTable").innerHTML = item_data;
      
      for (item of data){
        db.collection('items').add({
          price: item.price,
          name: item.name,
          image: item.iamge,
          id: item.id
        })
      }
  })
}

function onceFunc(func){
  let called = false;
  return function() {
    if (!called) {
      called = true;
      return func();
    }
    return;
  }
}

loadData = onceFunc(loadData);

function viewItem(){
  const theModal = document.getElementById('modal');
  var table = document.getElementById('myTable');
  var cells = table.getElementsByTagName('td');
  var itemName= '';
  for (var i = 0; i < cells.length; i++) {
    var cell = cells[i];
      cell.onclick = function () {
        var currentRow = $(this).closest("tr");
        itemName = currentRow.find("td:eq(1)").html();
        //console.log(itemName)

        fetch("data.json")
          .then(response => response.json())
          .then(data => {
          var item = '';
          for(items of data) {
            if(itemName == items.name){
              item += '<div class="row">';
              item += '<div class="col s8 m6">';
              item += '<div class="card">';
              item += '<div class="card-image">';
              item += '<img src="'+items.image+'">';
              item += '<a class="btn-floating halfway-fab waves-effect waves-light red" onclick="closeItem()"><i class="material-icons">close</i></a>';
              item += '</div>';
              item += '<div class="card-content">';
              item += '<span class="card-title">'+items.name+'</span>';
              item += '<p class="right-align">₱ '+items.price+'.00</p>';
              item += '</div>';
              item += '</div>';
              item += '</div>';
              item += '</div>';
            }
            document.getElementById("myModal").innerHTML = item;
            theModal.classList.add('show');
          }
      })
    }
  }
}

function eraseData(){
  db.delete()
  document.getElementById("myTable").innerHTML = " ";
}

function closeItem(){
  const theModal = document.getElementById('modal');
  theModal.classList.remove('show');
}