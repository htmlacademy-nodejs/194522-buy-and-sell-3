'use strict';

const {Router} = require(`express`);
const api = require(`../api`).getAPI();

const myRouter = new Router();

myRouter.get(`/`, async (req, res) => {
  const offers = await api.getOffers({isWithComments: false});
  res.render(`my-tickets`, {offers});
});

myRouter.get(`/comments`, async (req, res) => {
  const offers = await api.getOffers({isWithComments: true});
  res.render(`comments`, {offers: offers.slice(0, 3)});
});

module.exports = myRouter;
