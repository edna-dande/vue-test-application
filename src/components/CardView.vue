

<script>

export default {
  props:{
    username: String
  },
};
</script>

<template>
    
    <div class="card">
      <div class="card-top"></div>
      <div class="card-bottom">
        <p>{{ username }}</p>
      </div>
    </div> 
</template>

<style lang="scss">
// @import "./styles.scss";
.container{
  width: 90%;
  margin: 0 auto;
  background: #faf8f8;
  min-height: 100vh;
  display: flex;
  gap: 1rem;
  .card{
    width: 200px;
    height: 240px;
    border: 1px solid #bcb1b1;
    padding: 2rem;
    border-radius: 3rem;
  }
}
</style>