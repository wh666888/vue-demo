import state from './state'
const actions={
    reverse:function(ops){
        ops.state.name1=[].slice.call(ops.state.name1).reverse()
    }
}
export default actions