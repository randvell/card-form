import { el, mount, setChildren } from 'redom';
import Inputmask from 'inputmask';

const wrapper = el('div', { className: 'wrapper' });
const card = el('div', { className: 'card' });

mount(wrapper, card);

const cardHeader = el('p', 'Secure Checkout', { className: 'secure' });
const cardInfo = el('div', { className: 'credit-card' });
const cardNumber = el('span', 'xxxx xxxx xxxx xxxx', {
  className: 'card__number',
});

const cardPersonal = el('div', { className: 'card__personal' });
const cardName = el('span', { className: 'card__name' }, 'John Doe');
const cardDate = el('span', { className: 'card__date' }, '04/24');

setChildren(cardPersonal, [cardName, cardDate]);
setChildren(cardInfo, [cardNumber, cardPersonal]);

const form = el('form', { className: 'form', id: 'form', action: '#' });

/** Держатель карты */
const holderWrap = el(
  'div',
  {
    className: 'form__input-wrap form__input-wrap_holder',
  },
  [el('label', { className: 'form__label form__holder-label' }, 'Card Holder')]
);
const holderInput = el('input', {
  id: 'card_holder',
  type: 'text',
  class: 'input input__holder',
});
holderInput.addEventListener('input', () => {
  cardName.textContent = holderInput.value;
});
mount(holderWrap, holderInput);

/** Номер карты */
const numberWrap = el(
  'div',
  {
    className: 'form__input-wrap form__input-wrap_number',
  },
  [
    el('label', {
      className: 'form__label form__number-label',
      textContent: 'Card Number',
    }),
  ]
);
const numberInput = el('input', {
  id: 'card_number',
  type: 'text',
  class: 'input input__number',
});
numberInput.addEventListener('input', () => {
  cardNumber.textContent = numberInput.value;
});
mount(numberWrap, numberInput);

/** Дата карты */
const dateWrap = el(
  'div',
  { className: 'form__input-wrap form__input-wrap_date' },
  [el('label', { className: 'form__label form__date-label' }, 'Card Expiry')]
);
const dateInput = el('input', {
  id: 'card_expiry',
  type: 'text',
  className: 'input input__date',
});
dateInput.addEventListener('input', () => {
  cardDate.textContent = dateInput.value;
});
mount(dateWrap, dateInput);

/** CVV карты */
const cvvWrap = el(
  'div',
  { className: 'form__input-wrap form__input-wrap_cvv' },
  [el('label', { className: 'form__label form__cvv-label' }, 'CVV')]
);
const cvvInput = el('input', {
  id: 'card_cvv',
  type: 'text',
  className: 'input input__cvv',
});
Inputmask({ mask: '{1-3}{0-9}/{1-9}{1-9}' }).mask(cvvInput);
mount(cvvWrap, cvvInput);

const submitBtn = el('button', { className: 'form__button' }, 'CHECK OUT');

setChildren(form, [holderWrap, numberWrap, dateWrap, cvvWrap, submitBtn]);
setChildren(card, [cardHeader, cardInfo, form]);

mount(document.body, wrapper);
