const counter = {
    value: 0,
    increment() {
        this.value += 1
    },
    decrement() {
        this.value -= 1
    }
}

const incrementEl = document.querySelector('#counter').lastElementChild;
const decrementEl = document.querySelector('#counter').firstElementChild;
const counterValue = document.querySelector('#value');

incrementEl.addEventListener('click', () => {
    counter.increment();
    counterValue.textContent = counter.value;
});

decrementEl.addEventListener('click', () => {
    counter.decrement();
    counterValue.textContent = counter.value;
})

