import axios from 'axios'
import { useState, useEffect } from 'react'

export default function ChurchList() { 
    const [churchList, setChurchList] = useState([])

    useEffect(() => {
        axios.get('/')
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }, [])

    console.log(churchList)

    return (
        <div className="church--list">
            {churchList.map((item, index) => {
                return <h1 className="church--name" key={index}>{item.name}</h1>
            })}
        </div>
    )
}