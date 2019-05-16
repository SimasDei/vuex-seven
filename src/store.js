import Vue from 'vue';
import Vuex from 'vuex';
import { setTimeout } from 'core-js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      { name: 'Banana Skin', price: 20 },
      { name: 'Shiny Star', price: 40 },
      { name: 'Green Shells', price: 60 },
      { name: 'Red Shells', price: 80 },
    ],
  },
  mutations: {
    REDUCE_PRICE(state, amount) {
      state.products.forEach((product) => {
        // eslint-disable-next-line
        product.price -= amount || 1;
      });
    },
  },
  actions: {
    reducePrice(context, payload) {
      setTimeout(() => {
        context.commit('REDUCE_PRICE', payload);
      }, 200);
    },
  },
  getters: {
    products(state) {
      return state.products;
    },
    saleProducts(state) {
      const saleProducts = state.products.map(product => ({
        name: `* ${product.name} *`,
        price: product.price / 2,
      }));
      return saleProducts;
    },
  },
});
