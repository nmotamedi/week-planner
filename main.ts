interface Entry extends HTMLFormControlsCollection{
  timeEvent: string;
  dayEvent: string;
  information: string;
}

// const entry: Entry = {
//     timeEvent: $sortSelect.value,
//     dayEvent: '',
//     information: '',

//   }
const $eventForm = document.querySelector("#event-form") as HTMLFormElement;
const $addNewEvent = document.querySelector('#add-event-button');
const $sortSelect = document.querySelector('#day-select') as HTMLSelectElement;
const $dialogAdd = document.querySelector('.dialog-add') as HTMLDialogElement;
const $dismissModal = document.querySelector(".dismiss-modal") as HTMLButtonElement;
const $submitModal = document.querySelector(".accept-modal") as HTMLButtonElement;


$addNewEvent.addEventListener('click', () => {
  $dialogAdd.showModal();
})

$dismissModal.addEventListener('click', () => {
  $dialogAdd.close();
});

$eventForm.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  const $formElements = $eventForm.elements as Entry;

})
