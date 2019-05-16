<template>
  <div class="home container">
    <product-list-one :products="products"></product-list-one>
    <product-list-two :products="products"></product-list-two>
  </div>
</template>

<script>
import ProductListOne from '@/components/ProductListOne.vue';
import ProductListTwo from '@/components/ProductListTwo.vue';

export default {
  name: 'home',
  components: {
    ProductListOne,
    ProductListTwo,
  },
  data() {
    return {
      products: [
        { name: 'Banana Skin', price: 20 },
        { name: 'Shiny Star', price: 40 },
        { name: 'Green Shells', price: 60 },
        { name: 'Red Shells', price: 80 },
      ],
    };
  },
};
</script>
