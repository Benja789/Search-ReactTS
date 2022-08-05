import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import useDebonce from "../Components/useDebonce";

const data = [
    {
        id:0,
        label:"Bike",
        text:""
    },{
        id:1,
        label:"Cat",
        text:""
    },{
        id:2,
        label:"Dog",
        text:""
    },{
        id:3,
        label:"Example",
        text:""
    },{
        id:4,
        label:"Test",
        text:""
    },{
        id:5,
        label:"Search",
        text:""
    },{
        id:6,
        label:"Shop",
        text:""
    }
]

//Buscador basado en un arreglo de string
const SearchObject = () =>{
    const [result, setResult] = useState<any>([])
    const [text, setText] = useState("")
    
    const deb = useDebonce(text, 500)

    useEffect(()=>{

        const filtered = data.filter(e => e.label.toLowerCase().includes(deb))
        setResult(filtered)

    },[deb])

    
    return(
        <div>
            <h1>Buscador basado en React TS </h1>
            <TextField
                value={text}
                onChange={(e)=>setText(e.target.value)}
            />
            {
                result.length > 0 ?
                result.map((el:any, i:number) =>{
                    return(
                        <div key={i}>
                            {el.label}
                        </div>
                    )
                })
                : 
                <p>Sin resultados</p>
            }
        </div>
    )
}

export default SearchObject;