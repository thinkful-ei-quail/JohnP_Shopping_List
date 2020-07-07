'use strict';

function makeAList() {

    //activates when information is submitted
    //and prevents defaul action from submitting//
    $('#js-shopping-list-form').submit(function (event) {
        event.preventDefault();

        const userInput = $('.js-shopping-list-entry').val();

        //checks if input field is not an empty string//
        if (userInput !== '') {
            $('.shopping-list').append(`<li>
          <span class="shopping-item">${userInpt}</span>
          <div class= "shopping-item-controls" >
            <button class= "shopping-item-toggle" >
              <span class= "button-label" >check</span>
            </button>
            <button class= "shopping-item-delete" >
              <span class= "button-label" >delete</span>
            </button>
          </div>
        </li>`);
            //adds new li with user input and buttons//
            $('.js-shopping-list-entry').val('');
            //clears form after submission//
        }
    });

    //toggles item to be checked using closest li to button container//
    $('.shopping-list').on('click', '.shopping-item-toggle', function (event) {
        $(this).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked');
    });


    //deletes closest li to  buttons container//
    $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
        $(this).closest('li').remove();
    });
}




$(makeAList);
