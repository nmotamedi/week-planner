interface FormElements extends HTMLFormControlsCollection {
  timeEvent: HTMLSelectElement;
  dayEvent: HTMLSelectElement;
  information: HTMLTextAreaElement;
}

interface Entry {
  timeEvent: string;
  dayEvent: string;
  information: string;
  entryID: number;
}

let entryID = 1;

const entryArray: Entry[] = [];

// const entry: Entry = {
//     timeEvent: $sortSelect.value,
//     dayEvent: '',
//     information: '',

//   }
const $eventForm = document.querySelector('#event-form') as HTMLFormElement;
const $addNewEvent = document.querySelector('#add-event-button');
const $sortSelect = document.querySelector('#sort-select') as HTMLSelectElement;
const $dialogAdd = document.querySelector('.dialog-add') as HTMLDialogElement;
const $dismissModal = document.querySelector(
  '.dismiss-modal',
) as HTMLButtonElement;
const $submitModal = document.querySelector(
  '.accept-modal',
) as HTMLButtonElement;

$addNewEvent.addEventListener('click', () => {
  $dialogAdd.showModal();
});

$dismissModal.addEventListener('click', () => {
  $dialogAdd.close();
});

$eventForm.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  const $formElements = $eventForm.elements as FormElements;
  const timeEvent = $formElements.timeEvent.value;
  const dayEvent = $formElements.dayEvent.value;
  const information = $formElements.information.value;

  const entry = {
    timeEvent,
    dayEvent,
    information,
    entryID,
  };

  const $tableRow = render(entry);
  /*   console.log("$tableRow: ",$tableRow); */
  const $tableBody = document.querySelector('table tbody');
  if (!$tableBody) {
    throw new Error('$tableBody query failed');
  }
  /*   $tableBody.prepend($tableRow); */
  const $tableRows = $tableBody.querySelectorAll('tr');
  $tableBody.replaceChild($tableRow, $tableRows[entry.entryID - 1]);


  entryArray.push(entry);
  entryID++;

  $dialogAdd.close();
  $eventForm.reset();
});

function render(entry: Entry): HTMLTableRowElement {
  const $tableRow = document.createElement('tr');
  $tableRow.setAttribute('data-day', entry.dayEvent);
  const $timeEventData = document.createElement('td');
  const $information = document.createElement('td');
  const $actions = document.createElement('td');
  const $edit = document.createElement('button');
  const $delete = document.createElement('button');
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
$sortSelect.addEventListener('input', (event: Event) => {
  const $eventTarget = event.target as HTMLSelectElement;
  const targetValue = $eventTarget.value;
  const $tableBody = document.querySelector('table tbody');
  const $tableRows = $tableBody.querySelectorAll('tr');

  /*   console.log("targetValue", targetValue); */
  // for(let index = entryArray.length-1; index >= 0; index --){
  //   if (entryArray[index].dayEvent !== targetValue){
  //     $tableRows[$tableRows.length-index-1].classList.add("hidden");
  //   }
  // }

  for (let i = 0; i < $tableRows.length; i++) {
    const $tds = $tableRows[i].querySelectorAll("td") as NodeListOf<HTMLTableCellElement>;
    $tableBody.classList.add("sort");

    if (targetValue === "all" || targetValue === $tableRows[i].dataset.day) {
      $tableBody.classList.remove("sort");
      for (let j=0; j < $tds.length; j++) {
        $tds[j].setAttribute("class", "");
      }
    } else if (targetValue !== $tableRows[i].dataset.day) {
      for (let j=0; j < $tds.length; j++) {
        $tds[j].setAttribute("class", "hidden");
      }
    }
  }
});
