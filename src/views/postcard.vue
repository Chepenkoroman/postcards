<template>
  <div>
    <h2>Откртыка единичная</h2>
    <h4>{{$route.params.id}}</h4>
    <postcardsitem 
      v-for="post in postData" :key="post.row_id"
      v-bind:post="post"
    />
    <div v-for="po in post" :key="po.row_id">
        <h2>{{po.title}}</h2>

    </div>
    

  </div>
</template>

<script>
import postcardsitem from '@/components/postcardsitem'
export default {
    name: 'postcard',
    props: ['postData'],
    components: {
        postcardsitem
    }
}
</script>

<style>
  @import "~materialize-css/dist/css/materialize.min.css";
</style>