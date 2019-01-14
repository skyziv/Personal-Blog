<template>
  <div class="showBlog">
    <h1>Top 10 blogs</h1>
    <input type="text" placeholder="search bar" v-model="search">
    <div v-for="blog in filterBlog" class="singleBlog">
      <h2>{{blog.title.toUpperCase()}}</h2>
      <h3>{{blog.body}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
       blogs: [],
       search: ''
    }
  },
  mounted () {
    // 抓前十筆資料
    this.axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((data)=>{
      this.blogs = data.data.slice(0, 10)
    })
  },
  computed: {
    // 篩選
    filterBlog () {
      return this.blogs.filter((blog)=>{
        return blog.title.match(this.search)
      })
    }
  }
}
</script>

<style scoped>
  *{
    box-sizing: border-box;
  }
  .showBlog{
    max-width: 80%;
    margin: 0 auto;

  }
  .showBlog>h1{
    text-align: center;
  }
  .showBlog>input{
    width: 100%;
    margin: 10px 0;
    font-size: 18px;
  }
  .singleBlog{
    margin-bottom: 20px;
    padding: 20px;
    background-color: rgb(230, 229, 229);
  }
</style>
