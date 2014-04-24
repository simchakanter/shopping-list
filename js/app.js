$(document).ready(function() {
  addItem();
  toggleItemComplete();
  deleteItem();
  $('.items tbody').sortable();
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
  $('.items').on('click', '.checkbox', function() {
    if ($(this).hasClass('checkbox-incomplete')) {
      $(this).addClass('checkbox-complete').removeClass('checkbox-incomplete');
      $(this).closest('tr').find('.item-name').addClass('completed');
    }
    else {
      $(this).addClass('checkbox-incomplete').removeClass('checkbox-complete');
      $(this).closest('tr').find('.item-name').removeClass('completed');

    }
  });
}

function deleteItem() {
  $('.items').on('click','.item-delete',function() {
    $(this).parent().remove();
  });
}