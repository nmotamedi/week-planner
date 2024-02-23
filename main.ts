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
const $sortSelect = document.querySelector('#day-select') as HTMLSelectElement;
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
  entryID++;
  const entry = {
    timeEvent,
    dayEvent,
    information,
    entryID,
  };

  entryArray.push(entry);

  console.log('entry: ', entry);
  $dialogAdd.close();
  $eventForm.reset();
});
