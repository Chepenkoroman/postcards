<template>
  <div>
    <ul>
        <postcardsitem 
            v-for="post in postData" :key="post.row_id"
            v-bind:post="post"
        />
    </ul>
  </div>
</template>

<script>
import postcardsitem from '@/components/postcardsitem'
export default {
    props: ['postData'],
    components: {
        postcardsitem
    }
}
</script>

<style scoped>
    ul {
        list-stule: none;
        margin: 0;
        padding: 0;
    }

</style>