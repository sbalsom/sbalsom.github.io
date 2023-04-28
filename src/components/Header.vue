<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="header">
    <h1 class="main-title">Sadie Balsom</h1>
    <h3>
      {{ msg }}
    </h3>
  </div>
</template>

<style scoped>

.header {
  padding: 2rem;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.header h1,
.header h3 {
  text-align: left;
}

</style>
