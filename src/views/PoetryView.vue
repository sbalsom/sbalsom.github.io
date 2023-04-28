<script setup>
import PoetryItem from '../components/PoetryItem.vue'
</script>

<template>
  <div class="banner" id="poetry">
    <div class="display-box">
      <PoetryItem>
        <template #heading>Dream in which a baby happens</template>
        <template #source><a href="https://maryajournalofnewwriting.wordpress.com/" target="_blank" rel="noopener">Mary: A Journal of New Writing</a> (2018)</template>
        <template #link>Read <a href="http://oregonpoeticvoices.org/poet/483/" target="_blank" rel="noopener">here</a></template>
      </PoetryItem>
      <PoetryItem>
        <template #heading>Narcissus, very dull with complaining</template>
        <template #source><a href="https://www.timberlinereview.com/issue-7/" target="_blank" rel="noopener">Timberline review</a> (2018)</template>
        <template #link>Purchase a copy <a href="https://www.biblio.com/book/timberline-review-issue-7-2018-volume/d/1312500008" target="_blank" rel="noopener">here</a></template>
      </PoetryItem>
      <PoetryItem>
        <template #heading>Self Portrait With Fruit and Implement</template>
        <template #source><a href="https://autumnskypoetrydaily.com/2016/04/14/self-portrait-with-fruit-implement-by-sara-balsom/" target="_blank" rel="noopener">Autumn Sky Daily</a> (2016)</template>
      </PoetryItem>
      <PoetryItem>
        <template #heading>Speaking to her sadness in the fields</template>
        <template #source><a href="http://oregonpoeticvoices.org/poet/483/" target="_blank" rel="noopener">Oregon Poetic Voices</a> (2014)</template>
      </PoetryItem>
      <PoetryItem>
        <template #heading>The ash tree brings you a sister</template>
        <template #source>American Academy of Poets Award, Lewis & Clark College (2014)</template>
      </PoetryItem>
      <PoetryItem>
        <template #heading><RouterLink to="/poem">Dream in which I curate my childhood</RouterLink></template>
      </PoetryItem>
    </div>
  </div>
</template>

<style>

</style>
