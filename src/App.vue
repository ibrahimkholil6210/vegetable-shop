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
    <div class="flex-nav-items">
      <div @click="toogleSidebar" class="top-bar-cart-link">
        <i class="icofont-cart-alt icofont-1x"></i>
        <span>Cart ({{ totalItem }})</span>
      </div>
      <div @click="signinWithGoogle" class="top-bar-cart-link">
        <span v-if="!user?.uid">Signin</span>
        <img :src="user.photoURL" v-if="user?.uid" width="50" height="50" />
      </div>
    </div>
  </header>
  <router-view :inventory="inventory" :addToCart="addToCart" />
  <SideBar v-if="showSidebar" :toggle="toogleSidebar" :cart="cart" :inventory="inventory" :removeItem="removeItem" />
</template>

<script>
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth'
import SideBar from '@/components/SideBar.vue'
import food from '@/data/food.json'
import { auth, signOut } from './config/firebaseConfig'

export default {
  components: {
    SideBar
  },
  data () {
    return {
      showSidebar: false,
      inventory: food,
      cart: {},
      user: {
        name: null,
        email: null,
        photoURL: null,
        uid: null
      }
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
    },
    async signinWithGoogle () {
      if (this.user.uid) return signOut()
      const provider = new GoogleAuthProvider()
      signInWithPopup(auth, provider)
    }
  },
  async mounted () {
    console.log(process.env)
    onAuthStateChanged(auth, (user) => {
      if (!user?.uid) {
        this.user = {
          name: null,
          email: null,
          photoURL: null,
          uid: null
        }
        return
      }
      this.user = {
        name: user?.displayName,
        email: user?.email,
        photoURL: user?.photoURL,
        uid: user?.uid
      }
    })
  },
  watch: {
    user (val) {
      console.log(val)
    }
  }
}
</script>
