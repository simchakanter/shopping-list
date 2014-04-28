var enterKey = 13;

$(document).ready(function() {
  // Functions
  addItem();
  toggleItemComplete();
  deleteItem();
  editItem();
  updateItem();
  
  // Global UI effects
  $('.items').sortable();
});

function addItem() {
  $('.new-item-field').keydown(function(event) {
    if (event.which == enterKey) {
      var item = $('.new-item-field').val();
      if (item.trim()) {
        var newItemRow = "<li class='item'><span class='checkbox checkbox-incomplete'></span><span class='item-name'>" + item + "</span><span class='item-input'><input type='text'></span><span class='item-delete right'></span></li>";
        $('.items').append(newItemRow);
        $(this).val("");
      }
    }
  });
}

function toggleItemComplete() {
  $('.items').on('click', '.checkbox', function() {
    if ($(this).hasClass('checkbox-incomplete')) {
      $(this).addClass('checkbox-complete').removeClass('checkbox-incomplete');
      $(this).closest('.item').find('.item-name').addClass('completed');
    }
    else {
      $(this).addClass('checkbox-incomplete').removeClass('checkbox-complete');
      $(this).closest('.item').find('.item-name').removeClass('completed');

    }
  });
}

function deleteItem() {
  $('.items').on('click','.item-delete',function() {
    $(this).parent().remove();
  });
}

function editItem() {
  $('.items').on('dblclick','.item-name',function() {
    $(this).hide();
    console.log($(this).text());
    $(this).closest('.item').find('input').val($(this).text());
    $(this).closest('.item').find('.item-input').show();
    $(this).closest('.item').find('input').focus();
  });
}

function updateItem() {
  $('.items').on('keyup','.item-input input', function(event) {
    if (event.which == enterKey) {
      exitEditMode($(this));
    }
  });
  $('.items').on('blur','.item-input input', function() {
    exitEditMode($(this));
  });
}

function exitEditMode(self) {
  if (self.val().trim()) {
    self.closest('.item').find('.item-name').text(self.val());
    self.closest('.item-input').hide();
    self.closest('.item').find('.item-name').show();
  } else {
    self.closest('li').remove();
  }
}