<template>
  <header class="top-bar spread">
    <nav class="top-bar-nav">
      <router-link to="/" class="top-bar-link">
        <i class="icofont-spoon-and-fork"></i>
        <span>Home</span>
      </router-link>
      <router-link to="/products" class="top-bar-link">
        <span>Products</span>
      </router-link>
      <router-link to="/past-orders" class="top-bar-link">
        <span>Past Orders</span>
      </router-link>
    </nav>
    <div @click="toogleSidebar" class="top-bar-cart-link">
      <i class="icofont-cart-alt icofont-1x"></i>
      <span>Cart ({{ totalItem }})</span>
    </div>
  </header>
  <router-view :inventory="inventory" :addToCart="addToCart" />
  <SideBar v-if="showSidebar" :toggle="toogleSidebar" :cart="cart" :inventory="inventory" :removeItem="removeItem" />
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import food from '@/data/food.json'

export default {
  components: {
    SideBar
  },
  data () {
    return {
      showSidebar: false,
      inventory: food,
      cart: {}
    }
  },
  computed: {
    totalItem () {
      return Object.values(this.cart).reduce((acc, curr) => {
        return acc + curr
      }, 0)
    }
  },
  methods: {
    toogleSidebar () {
      this.showSidebar = !this.showSidebar
    },
    addToCart (name, quantity) {
      if (!this.cart[name]) {
        this.cart[name] = 0
      }
      this.cart[name] += quantity
    },
    removeItem (name) {
      delete this.cart[name]
    }
  }
}
</script>
