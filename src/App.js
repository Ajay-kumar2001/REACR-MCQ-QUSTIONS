

import { useState } from "react";
import Loginpage from "./loginpage";
import Qustions from "./Qustions";
import Buttons from "./Buttons";
function App() {
  let arr=[{id:1,qn:"1. A person crosses a 600 m long street in 5 minutes. What is his speed in km per hour?",op1:"3.6",op2:"8.6",op3:"4.6",op4:"10"},
  {id:2,qn:"2. An aeroplane covers a certain distance at a speed of 240 kmph in 5 hours. To cover the same distance in 1 2/3 hours, it must travel at a speed of?",op1:"300kmph",op2:"360kmph",op3:"600kmph",op4:"720kmph"},
  {id:3,qn:"3. A car covers its journey at the speed of 80km/hr in 10hours. If the same distance is to be covered in 4 hours, by how much the speed of car will have to increase?",op1:"40kmph/hr",op2:"60km/hr",op3:"90km/hr",op4:"120km/hr"},
  {id:4,qn:"4. A person walking at 4 Kmph reaches his office 8 minutes late. If he walks at 6 Kmph, he reaches there 8 minutes earlier. How far is the office from his house?",op1:"31/5km",op2:"21/5km",op3:"41/5km",op4:"51/5km"},
  {id:5,qn:"5. An express train travelled at an average speed of 100 km/hr, stopping for 3 minutes after every 75 km. How long did it take to reach its destination 600 km from the starting point?",op1:"6hrs 24min",op2:"6hr 27min",op3:"6hr 21min",op4:"6hr 30min"},
  {id:6,qn:"6. Two trains starting at the same time from 2 stations 200 km apart and going in opposite direction cross each other at a distance of 110 km from one of the stations. What is the ratio of their speeds?",op1:"11:9",op2:"7:3",op3:"18:4",op4:"None of these"},
  {id:7,qn:"7. Walking at the rate of 4 kmph a man cover a certain distance in 2 hr 45 min. Running at a speed of 16.5 kmph the man will cover the same distance in.",op1:"12min",op2:"40min",op3:"50min",op4:"60min"},
  {id:8,qn:"8. Walking 6/7th of his usual speed, a man is 12 minutes too late. What is the usual time taken by him to cover that distance?",op1:"1hr 42min",op2:"1hr",op3:"2hr",op4:"1hr 12min"},
  {id:9,qn:"9. The speed of a car increases by 2 kms after every one hour. If the distance travelling in the first one hour was 35 kms. what was the total distance travelled in 12 hours?",op1:"456km",op2:"558km",op3:"482kk",op4:"552km"},
  {id:10,qn:"10. A runner can complete a 750 m race in two and a half minutes. Will he be able to beat another runner who runs at 17.95 km/hr?",op1:"YES",op2:"No",op3:"Insufficein Data",op4:"None"}]
  let [data,setAns]=useState({})
  let [fdata,fset]=useState({})
  // let ansArr=[]
  let fun=(e)=>{setAns({...data,[e.target.name]:e.target.value})}
  
  let fvalue=(e)=>{fset({...fdata,[e.target.type]:e.target.value})}
console.log(fdata)
  let ok=()=>{ 
    let phon=fdata.text
    let re=/^[6/7/9][0-9]{9}$/
    let mail=fdata.email
    let re1=/^\w{2,}[@]{1}[.]{1}$/
    localStorage.setItem("phono",phon)
    localStorage.setItem("emailid",mail)
    if((re1.test(mail)) &(re.test(phon))){
      alert("start the Exam")
    }
    else{
      alert("enter valid details")
    }
  
  }
  
  return (
    <div>
      <div>
        <Loginpage fvalue={fvalue} ok={ok}/>
      </div>
      <div>
        <Buttons />
        <div>
        {arr.map((item,index)=><Qustions data={item} key={index} fun={fun} />)}
        </div>
    </div>
    {/* <button onChange={submit}> submit</button> */}
    </div>
  );
}

export default App;
