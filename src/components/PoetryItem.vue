<template>
  <div class="item">
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <div class="review-title">
        <slot name="source"></slot>
      </div>
      <div class="read-link">
        <slot name="link"></slot>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 1rem;
  display: flex;
  border-bottom: solid 0.5px var(--vt-c-divider-light-2);
}

.item:last-child {
  border-bottom: none;
}

.details {
  flex: 1;
  margin-left: 1rem;
  padding-bottom: 1rem;
}


.review-title {
  font-size: 1rem;
}

.read-link {
 font-size: .9rem;
 color: var(--vt-c-text-light-2);
}


h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
