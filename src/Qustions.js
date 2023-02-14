function Qustions(p){
    return(
        <div>
            <div><h4>{p.data.qn}</h4></div>
            <div>
                <input type="radio" value="1" name={p.data.id} onChange={ p.fun}/>{p.data.op1}<br/>
                <input type="radio" value="2" name={p.data.id} onChange={ p.fun}/>{p.data.op2}<br/>
                <input type="radio" value="3" name={p.data.id} onChange={ p.fun}/>{p.data.op3}<br/>
                <input type="radio" value="4" name={p.data.id} onChange={ p.fun}/>{p.data.op4}<br/>
            </div>
        </div>
    )
}
export default Qustions