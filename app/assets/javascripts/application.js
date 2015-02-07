// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require jquery-ui/datepicker

$(document).ready(function() {
  //presence validation
  $("#newReservation").submit(function(){
      if ($("select").val().length< 1) {
        alert("Please fill in all the details!")
      }
      
  });

  var addReservation = function(data){
    for(var i = 0; i < (data.end - data.start); i++){
      var row =$(".grid[data-roomid='"+data.room_id+"']")
      row.children("." + (data.start + i)).text("RSV")
    }
  }



  $.get('/all').done(function(reservations){
    for(var i = 0; i < reservations.length; i++){
      addReservation(reservations[i])
    }
  })

  $(".button").click(function(){
    $("#form").show();
  });

  $("#newReservation").on("submit", function(event) {
    event.preventDefault();

    var submitObj = {}
    var formArray = $(this).serializeArray()
    console.log(formArray)
    for(var i=0; i< formArray.length; i++){
      submitObj[formArray[i].name] = formArray[i].value;
    }

    //  console.log(submitObj);
    $.ajax('/reservations',
      {type: 'post',
      data: {
        reservation: submitObj
      }
    })
    .done(function(data){
      $("#form").hide();
      addReservation(data)
      console.log("something went good");
      console.log(data);
    })
    .fail(function(){
      console.log('something went wrong');
    });


});

});
