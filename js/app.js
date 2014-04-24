$(document).ready(function() {
  addItem();
  toggleItemComplete();
  deleteItem();
});

function addItem() {
  var enterKey = 13;
  $('.new-item-field').keydown(function(event) {
    if (event.which == enterKey) {
      var item = $('.new-item-field').val();
      var newItemRow = "<tr class='item'><td class='checkbox checkbox-incomplete'></td><td class='item-name'>" + item + "</td><td class='item-delete'><a href='#''><img src='images/trash.png' alt='Delete'></a></td></tr>";
      console.log(item);
      console.log(newItemRow);
      $('.items tbody').append(newItemRow);
      $(this).val("");
    }
  });
}

function toggleItemComplete() {
  $('.checkbox').click(function() {
    if ($(this).hasClass('checkbox-incomplete')) {
      $(this).addClass('checkbox-complete').removeClass('checkbox-incomplete');
    }
    else {
      $(this).addClass('checkbox-incomplete').removeClass('checkbox-complete');
    }
  });
}