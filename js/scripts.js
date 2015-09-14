$(document).ready(function() {
  var addressBook = function(firstName, lastName) {

    var contact = {
      firstName: firstName,
      lastName: lastName,
      addresses: [],
      fullname: firstName + " " + lastName
    };

    return contact;
  };

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputFirst = $("#input-first-name").val();
    var inputLast = $("#input-last-name").val();
    var newContact = new addressBook(inputFirst, inputLast);

    //add each address to array
    $(".address-group").each(function(){
      var newStreet = $(this).find(".input-street").val();
      var newCity = $(this).find(".input-city").val();
      var newState = $(this).find(".input-state").val();
        newContact.addresses.push({
        street: newStreet,
        city: newCity,
        state: newState
      });
    });





     //add to ul
     $("#contacts").append("<li><span class='clickedContact'>" + newContact.fullname + "</span></li>");



      //clear fields
      $("#input-first-name").val("");
      $("#input-last-name").val("");
      $("#addresses").empty();
      $("#add-address").trigger("click");


      $(".clickedContact").last().click(function() {
        $("#contact").show();

      });


  });  //end form submit

  $("#add-address").click(function AddAddressGroup(event) {
    event.preventDefault();
    $("#addresses").append(
      '<div class="form-group address-group">'
      + '<label class="form-label" for="street">Street:</label>'
      + '<input class="form-control input-street" name="street" value="">'
      + '<label class="form-label" for="city">City:</label>'
      + '<input class="form-control input-city" name="city" value="">'
      + '<label class="form-label" for="state">State:</label>'
      + '<input class="form-control input-state" name="state" value="">'
      +'</div>');

    });




});
