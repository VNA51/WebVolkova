export function Button() {
    const test="test"
    return <button onClick={click(test)}> Custom Button</button>
}

function click(test){
    console.log("click")
}

function hello(){
    console.log("hello")
}