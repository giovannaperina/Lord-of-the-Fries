jQuery(document).ready(function($) {

    $('.glyphicon-remove').click(function() {
        var fries_id = $(this).data('id');
        
        $.ajax({
          url: `/fries/${fries_id}`,
          type: 'PUT',
          data: { eat: true }
        }).then(function() {
          location.reload();
        });
    });
    
    
    $('.glyphicon-ok').click(function() {
      var fries_id = $(this).data('id');
      
      $.ajax({
          url: `/fries/${fries_id}`,
          type: 'PUT',
          data: { eat: false }
        }).then(function() {
          location.reload();
        });
    });
    
});