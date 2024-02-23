var entryID = 1;
var entryArray = [];
// const entry: Entry = {
//     timeEvent: $sortSelect.value,
//     dayEvent: '',
//     information: '',
//   }
var $eventForm = document.querySelector('#event-form');
var $addNewEvent = document.querySelector('#add-event-button');
var $sortSelect = document.querySelector('#sort-select');
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
    var entry = {
        timeEvent: timeEvent,
        dayEvent: dayEvent,
        information: information,
        entryID: entryID,
    };
    var $tableRow = render(entry);
    /*   console.log("$tableRow: ",$tableRow); */
    var $tableBody = document.querySelector('table tbody');
    if (!$tableBody) {
        throw new Error('$tableBody query failed');
    }
    /*   $tableBody.prepend($tableRow); */
    var $tableRows = $tableBody.querySelectorAll('tr');
    $tableBody.replaceChild($tableRow, $tableRows[entry.entryID - 1]);
    entryArray.push(entry);
    entryID++;
    $dialogAdd.close();
    $eventForm.reset();
});
function render(entry) {
    var $tableRow = document.createElement('tr');
    $tableRow.setAttribute('data-day', entry.dayEvent);
    var $timeEventData = document.createElement('td');
    var $information = document.createElement('td');
    var $actions = document.createElement('td');
    var $edit = document.createElement('button');
    var $delete = document.createElement('button');
    $edit.textContent = 'edit';
    $delete.textContent = 'delete';
    $timeEventData.textContent = entry.timeEvent;
    $information.textContent = entry.information;
    $tableRow.appendChild($timeEventData);
    $tableRow.appendChild($information);
    $tableRow.appendChild($actions);
    $actions.append($edit);
    $actions.append($delete);
    return $tableRow;
}
/* const $sortSelect.value; */
$sortSelect.addEventListener('input', function (event) {
    var $eventTarget = event.target;
    var targetValue = $eventTarget.value;
    var $tableBody = document.querySelector('table tbody');
    var $tableRows = $tableBody.querySelectorAll('tr');
    /*   console.log("targetValue", targetValue); */
    // for(let index = entryArray.length-1; index >= 0; index --){
    //   if (entryArray[index].dayEvent !== targetValue){
    //     $tableRows[$tableRows.length-index-1].classList.add("hidden");
    //   }
    // }
    for (var i = 0; i < $tableRows.length; i++) {
        if (targetValue !== $tableRows[i].dataset.day) {
            $tableRows[i].setAttribute('class', 'hidden');
        }
        else {
            $tableRows[i].setAttribute('class', '');
        }
    }
});
