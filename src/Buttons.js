import Button from "./Button"
function Buttons(){
    let arr=[1,2,3,4,5,6,7,8,9,10]
    return(<div>
           {arr.map((item ,index)=>{return<Button data={item} key={index}/>})}
    </div>)
}
export default Buttons