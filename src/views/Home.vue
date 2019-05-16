<template>
  <div class="home container">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
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
};
</script>
