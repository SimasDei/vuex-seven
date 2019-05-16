<template>
  <div class="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="(product, index) in saleProducts" :key="index">
        <span class="name">{{product.name}}</span>
        <span class="price">{{product.price}} coins</span>
      </li>
    </ul>
    <button @click="reducePrice(5)" class="btn yellow darken-3">Reduce Price</button>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ProductListOne',
  computed: {
    ...mapGetters(['products', 'saleProducts']),
  },
  methods: {
    ...mapActions(['reducePrice']),
  },
};
</script>
<style lang="scss" scoped>
.product-list-one {
  background: #fff8b1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;

  ul {
    padding: 0;
    li {
      display: inline-block;
      margin-right: 10px;
      margin-top: 10px;
      padding: 20px;
      background: rgba(255, 255, 255, 0.7);
      .price {
        font-weight: bold;
        color: #e8800c;
        margin-left: 5px;
      }
    }
  }
}
</style>
