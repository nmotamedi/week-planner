interface Entry {
  timeEvent: string;
  dayEvent: string;
  information: string;
}

// const entry: Entry = {
//     timeEvent: $sortSelect.value,
//     dayEvent: '',
//     information: '',

//   }

const $addNewEvent = document.querySelector('#add-event-button');
const $sortSelect = document.querySelector('#day-select') as HTMLSelectElement;
const $dialogAdd = document.querySelector('.dialog-add') as HTMLDialogElement;
const $dismissModal = document.querySelector(".dismiss-modal") as HTMLButtonElement;

$addNewEvent.addEventListener('click', () => {
  $dialogAdd.showModal();
})

$dismissModal.addEventListener('click', () => {
  $dialogAdd.close();
});
