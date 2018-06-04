import Vue from "vue"
import vuex from "vuex"
import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
Vue.use(vuex)
export default new vuex.Store({
     state,//相当于数据库，定义数据的初始状态
     getters,//用于获取state中状态，仅单向获取数据，不做任何修改
    mutations, //定义state数据的修改操作，只做简单的数据操作(同步处理)
    actions,//调用mutation方法对数据进行复杂操作(异步处理)
})
