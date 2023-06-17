<template>
    <div class="title">
    <h2>Home</h2>
    <div v-for="item in entries" class="container">
    <CardView :username="item.text" :key="item.id"/>
  </div>
    </div>
  </template>

<script>
import CardView from './CardView.vue'

export default {
    name: 'HomePage',
  data(){
    return{
        entries: [
      {
        id: 1,
        text:"Lorem - ipsum dolor sit, amet consectetur adipisicing elit. Commodi, laudantium!"   
      },
      {
        id: 2,
        text:"Lorem - --ipsum dolor sit, amet consectetur adipisicing elit. Commodi, laudantium!"   
      },
      {
        id: 3,
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, laudantium!"   
      },
      {
        id: 4,
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, laudantium!"   
     },
    ]
    }
},
components: { 
    CardView
  },
}

      
</script>

<style>

</style>