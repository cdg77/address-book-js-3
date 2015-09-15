function Contact(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

Address.prototype.fullAddress = function() {
  return this.street + ", " + this.city + ", " + this.state;
}

$(document).ready(function() {

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputFirst = $("#input-first-name").val();
    var inputLast = $("#input-last-name").val();
    var newContact = new Contact(inputFirst, inputLast);

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
     $("#contacts").append("<li><span class='clickedContact'>" + newContact.fullName + "</span></li>");



      //clear fields
      $("#input-first-name").val("");
      $("#input-last-name").val("");
      $("#addresses").empty();
      $("#add-address").trigger("click");


      $(".clickedContact").last().click(function() {
        $("#contact").show();
        $("#contact h4").text(newContact.fullname);
        newContact.addresses.forEach(function(addr) {
          $("#contact-address").append(
               "<li>" + addr.street + ", " + addr.city + ", " + addr.state + "</li>");
        });

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
