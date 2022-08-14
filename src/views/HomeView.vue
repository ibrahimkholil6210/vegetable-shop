<template>
  <div class="splash-container">
        <div class="splash">
          <h1>Splendid Food</h1>
        </div>
      </div>

      <main class="wrapper">

        <h2>Recommended</h2>

        <div class="recommended">

          <div class="card">
            <div class="card-title">
              Carrots
            </div>
            <div class="card-body">
              <i class="icofont-10x icofont-carrot"></i>
              <form>
                <div class="row">
                  <div class="cell">
                    <label>Type:</label>
                  </div>
                  <div class="cell">
                    <em>Vegetable</em>
                  </div>
                </div>
                <div class="row">
                  <div class="cell">
                    <label>Price:</label>
                  </div>
                  <div class="cell">
                    $4.82
                  </div>
                </div>
                <div class="row">
                  <div class="cell">
                    <label>Quantity:</label>
                  </div>
                  <div class="cell">
                    <input type="number">
                  </div>
                </div>
              </form>
            </div>
            <div class="card-footer">
              <button @click="addToCart('carrots')" class="btn btn-light">
                Add to cart
              </button>
            </div>
          </div>

        </div>

      </main>
</template>

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
