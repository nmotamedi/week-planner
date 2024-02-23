// const entry: Entry = {
//     timeEvent: $sortSelect.value,
//     dayEvent: '',
//     information: '',
//   }
var $addNewEvent = document.querySelector('#add-event-button');
var $sortSelect = document.querySelector('#day-select');
var $dialogAdd = document.querySelector('.dialog-add');
var $dismissModal = document.querySelector(".dismiss-modal");
$addNewEvent.addEventListener('click', function () {
    $dialogAdd.showModal();
});
$dismissModal.addEventListener('click', function () {
    $dialogAdd.close();
});
