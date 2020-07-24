<template>
     <div>
        <h1 class='title'>{{message}}</h1>
        <button @click='btnclick'>按钮</button>
        <h2>{{name}}</h2>
        <Cpn/>
    </div>
</template>

<script>
import Cpn from './Cpn.vue'
export default {
    components:{
        Cpn
    },
    data(){
        return{
            message:'hello webpack',
            name:'waofjs'
        }
    },
    methods:{
        btnclick(){

        }
    }
}
</script>
<style scoped>
    .title{
        color: green;
    }
</style>