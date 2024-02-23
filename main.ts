interface Entry {
  timeEvent: string;
  dayEvent: string;
  information: string;
}


const $addNewEvent = document.querySelector('#add-event-button');
const $sortSelect = document.querySelector('#day-select') as HTMLSelectElement;

$addNewEvent.addEventListener('click', () => {
  const entry: Entry = {
    timeEvent: $sortSelect.value,
    dayEvent: '',
    information: '',

  }
})
