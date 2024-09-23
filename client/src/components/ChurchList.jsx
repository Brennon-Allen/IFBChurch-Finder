import axios from 'axios'
import { useState, useEffect } from 'react'

export default function ChurchList() { 
    const [churchList, setChurchList] = useState([])

    useEffect(() => {
        axios.get('/')
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }, [])



    return (
        <div className="church--list">
            <h1>Church List</h1>
            <p>Awaiting coding on backend to make the form work, and also show what's already in the database.</p>
            {churchList.map((item, index) => {
                return <h3 className="church--name" key={index}>{item.name}</h3>
            })}
        </div>
    )
}