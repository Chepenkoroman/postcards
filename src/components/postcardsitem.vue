<template>
    <div>
        <li>
            <div class="main">
                <div class="image">
                    <img :src="post.pic_url_1">
                    <router-link
                    tag="button"
                    to= "{name: 'postcard', params:{id: 'post.row_id'}, query:{title: 'post.title'}}"
                    exact
                    active-class="active"
                    >
                        <a href="#">Open</a>
                    </router-link>
                </div>
                <div class="posttext">
                    {{post.postcard_tags}}
                </div>
                <div class="posttext">
                    {{post.title}}
                    {{post.row_id}}
                </div>
            </div>
        </li>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>


<style scoped>
    .main {
        border: 1px solid #ccc;

    }
    img{
        width: 50%;
        height: 50%;
        margin: 0 auto !important;
    }
    .image {
        display: block;
        margin-left: auto;
        margin-right: auto; 
        padding: 7px;
        border: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
    }
    .posttext {
        padding: 7px;
    }

</style>