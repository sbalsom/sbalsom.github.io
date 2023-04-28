<script setup>
import PoetryItem from '../components/PoetryItem.vue'
</script>

<template>
  <div class="banner" id="poetry">
    <div class="display-box fixed-width">
      <PoetryItem>
        <template #heading>Dream in which I curate my childhood</template>
        <div class="poem-body">
          <p class="poem-line">Once there was a basement museum</p>
          <p class="poem-line">with twice daily acquisitions of instruments:</p>
          <p class="poem-line">compasses (used for measuring</p>
          <p class="poem-line">circumferences) thermometers (used for measuring</p>
          <p class="poem-line">levels of delight) barometers (used for reacting</p>
          <p class="poem-line">to pressure), and timers (used for counting</p>
          <p class="poem-line">how long that takes). I wrote captions for each detailing</p>
          <p class="poem-line">who used them and upon whom they were used.</p>
          <br>
          <p class="poem-line">The only people who frequented the museum were my parents.</p>
          <p class="poem-line">My mother said,</p>
          <p class="poem-line">"If you are bored, organize these noises for me."</p>
          <p class="poem-line">My father said,</p>
          <p class="poem-line">"What a smart way to cure boredom," and left for work.</p>
        </div>
      </PoetryItem>
      <div class="right-align">
        <RouterLink to="/poetry">Back</RouterLink>
      </div>
    </div>
  </div>
</template>

<style>

.fixed-width {
  width: 500px;
}

.right-align {
  text-align:right;
}

.poem-body {
  font-family: 'Quicksand';
  padding-top: 20px;
  padding-bottom: 100px;
  color: var(--vt-c-black-soft)
}
.poem-line {
  line-height:20px;
  font-size:14px;
}

</style>
