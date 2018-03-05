$(function() {
    var divDevoured = $('#devoured');
    var divNotDevoured = $("#notDevoured");

    // POST method
    $('#submitNewBurger').on('click' , function(evt){
        evt.preventDefault();
        let burgerName = $('#burgerName').val().trim();
        $.post('/api/burger' , {burger_name: burgerName} , function(data) {
            location.reload();
        });
    });

    // PUT method
    $("body").on("click", "#devourIt", function(evt) {
      evt.preventDefault();
      let id = $(this).data('id');
      $.ajax({
          method: "PUT",
          url: '/api/burger/' + id,
          data: {devoured: 1},
          success : function() {
            location.reload();
          }
      });
    });
});