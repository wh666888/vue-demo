<template>
    <div id="demo">
        <div>
            {{count1}}
            <div>
                <button @click="increment">+</button>
                <button @click="decrement">-</button>
                <button @click="reverseName">reverseName</button>
            </div>
            {{name}}
        </div>
        
    </div>
</template>
<script>
import vuex from "vuex"
import {mapState,mapMutations} from "vuex"
// import store from '../vuex/index'
export default {
    name:"demo",
    data(){
        return{
            
        }
    },
    computed:{
        // count(){
        //     return this.$store.getters.count
        // },
        // name(){
        //      return this.$store.state.name1
        // }

        // ...mapState可将state中的所有数据映射到组件中
        ...mapState({
            count1:"count",
            name:"name1"
        }),
        // name:vuex.mapState(['name1']).name1,//vuex.mapState(['name1']).name1将state中的单个数据过来映射    
    },
    created(){
        this.add(1,1);
        console.log("created"+"111111111")
    },
    mounted(){
        this.add(2,2);
        console.log("mounted"+"2222222222")
    },
    // updated(){
    //     console.log("updated"+"333333")
    // },
    // destroyed(){
    //     console.log("destory"+"444444444")
    // },
    methods:{
        ...mapMutations({
            // 前面increment是组件中的方法，后面mutations是组件中的事件（将mutations中的方法映射到组件中）
            increment:"increment",
            decrement:"decrement"
        }),
        add(a,b){
            console.log(a+b);
        },
        // increment(){
        //     this.$store.commit('increment');
        // },
        // decrement(){
        //     this.$store.commit('decrement')
        // },
        //vuex.mapMutations将mutation中单个方法映射到组件中
        decrement:vuex.mapMutations(['decrement']).decrement,
        // reverseName(){
        //     this.$store.dispatch('reverse')
        // }
        reverseName:vuex.mapActions(['reverse']).reverse
    },
    
}
</script>
<style scoped>

</style>

