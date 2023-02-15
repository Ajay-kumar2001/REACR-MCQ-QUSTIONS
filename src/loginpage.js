function Loginpage(p){
    return(<div>
        <input type="text" placeholder="enter mobail number"  onChange={p.fvalue}/><br/>
        <input type="email" placeholder=" enter email" onChange={p.fvalue}/> <br/>
        <button onClick={p.ok}> ok</button>
    </div>)
}
export default Loginpage