<template>
  <div class="splash-container">
    <div class="splash">
      <h1>Splendid Food</h1>
    </div>
  </div>

  <main class="wrapper">

    <h2>Recommended</h2>
    <div class="recommended">
      <ProductCard v-for="(product, index) in inventory.slice(0, 3)" :key="index" :product="product" :index="index"
        :addToCart="addToCart" />
    </div>

  </main>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'HomeView',
  components: {
    ProductCard
  },
  props: ['inventory', 'addToCart']
}
</script>

<!-- <script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script> -->
