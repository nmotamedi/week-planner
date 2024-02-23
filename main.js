var entryID = 1;
var entryArray = [];
// const entry: Entry = {
//     timeEvent: $sortSelect.value,
//     dayEvent: '',
//     information: '',
//   }
var $eventForm = document.querySelector('#event-form');
var $addNewEvent = document.querySelector('#add-event-button');
var $sortSelect = document.querySelector('#day-select');
var $dialogAdd = document.querySelector('.dialog-add');
var $dismissModal = document.querySelector('.dismiss-modal');
var $submitModal = document.querySelector('.accept-modal');
$addNewEvent.addEventListener('click', function () {
    $dialogAdd.showModal();
});
$dismissModal.addEventListener('click', function () {
    $dialogAdd.close();
});
$eventForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var $formElements = $eventForm.elements;
    var timeEvent = $formElements.timeEvent.value;
    var dayEvent = $formElements.dayEvent.value;
    var information = $formElements.information.value;
    entryID++;
    var entry = {
        timeEvent: timeEvent,
        dayEvent: dayEvent,
        information: information,
        entryID: entryID,
    };
    entryArray.push(entry);
    console.log('entry: ', entry);
    $dialogAdd.close();
    $eventForm.reset();
});
