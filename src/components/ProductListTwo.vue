<template>
  <div class="product-list-two">
    <h2>Product List two</h2>
    <ul>
      <li v-for="(product, index) in products" :key="index">
        <span class="name">{{product.name}}</span>
        <span class="price">{{product.price}} coins</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'ProductListTwo',
  props: ['products'],
};
</script>
<style lang="scss" scoped>
.product-list-two {
  background: #d1e4ff;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;

  ul {
    padding: 0;
    list-style-type: none;

    li {
      margin-right: 10px;
      margin-top: 10px;
      padding: 20px;
      background: rgba(255, 255, 255, 0.7);

      .price {
        font-weight: bold;
        color: #860ce8;
        display: block;
      }
    }
  }
}
</style>
