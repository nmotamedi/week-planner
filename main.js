var $addNewEvent = document.querySelector('#add-event-button');
var $sortSelect = document.querySelector('#day-select');
$addNewEvent.addEventListener('click', function () {
    var entry = {
        timeEvent: $sortSelect.value,
        dayEvent: '',
        information: '',
    };
});
