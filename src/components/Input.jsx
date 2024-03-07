export function Input({ setName, setAge, setPlace }){
    return <div>
        <input className="input-box" type="text" placeholder="enter name" onChange={e => setName(e.target.value)}/>
        <input className="input-box" type="text" placeholder="enter age" onChange={e => setAge(e.target.value)}/>
        <input className="input-box" type="text" placeholder="enter place" onChange={e => setPlace(e.target.value)}/>
    </div>
}