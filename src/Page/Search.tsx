import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import useDebonce from "../Components/useDebonce";

const data = ['bike', 'dog', 'cat', 'shop']

const Search = () =>{
    const [result, setResult] = useState<any>([])
    const [text, setText] = useState("")
    
    const deb = useDebonce(text, 500)

    useEffect(()=>{
        const d = data.filter(el => el.toLowerCase().includes(deb))
        setResult(d)
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
                            {el}
                        </div>
                    )
                })
                : 
                <p>Sin resultados</p>
            }
        </div>
    )
}

export default Search;