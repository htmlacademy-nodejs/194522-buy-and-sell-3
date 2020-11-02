'use strict';

const {nanoid} = require(`nanoid`);
const {MAX_ID_LENGTH} = require(`../../constants`);

class OfferService {
  constructor(offers) {
    this._offers = offers;
  }

  create(offer) {
    const newOffer = Object.assign({
      id: nanoid(MAX_ID_LENGTH), comments: []
    }, offer);

    this._offers.push(newOffer);
    return newOffer;
  }

  delete(id) {
    const offer = this._offers.find((item) => item.id === id);

    if (!offer) {
      return null;
    }

    this._offers = this._offers.filter((item) => item.id !== id);
    return offer;
  }

  findAll() {
    return this._offers;
  }

  findOne(id) {
    console.log(this._offers.find((item) => item.id === id));
    return this._offers.find((item) => item.id === id);
  }

  update(id, offer) {
    const updatingOffer = this._offers.find((item) => item.id === id);
    return Object.assign({updatingOffer, offer});
  }
}

module.exports = OfferService;
