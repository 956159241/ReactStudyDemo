export default function FunctionComonent() {
    if(FunctionComonent.prototype.isReactComponent){
        console.log('FunctionComonent是类组件')
    }else{
        console.log('FunctionComonent函数式组件')
    }

    return <div>这是函数组件</div>
}