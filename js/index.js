import { el, mount, setChildren } from 'redom';

const wrapper = el('div', { className: 'wrapper' });
const cardContainer = el('div', { className: 'card' });
mount(wrapper, cardContainer);

const cardHeader = el('p', 'Secure Checkout', { className: 'secure' });
mount(wrapper, cardHeader);

const card = el('div', { className: 'credit-card' });
const cardNumber = el('span', 'xxxx xxxx xxxx xxxx', {
  className: 'card__number',
});
const cardPersonal = el('div', { className: 'card__personal' });
const cardName = el('span', { className: 'card__name' }, 'John Doe');
const cardDate = el('span', { className: 'card__date' }, '04/24');
setChildren(cardPersonal, [cardName, cardDate]);
setChildren(card, [cardNumber, cardPersonal]);
mount(wrapper, card);

const form = el('form');

mount(document.body, wrapper);
console.log('test');
