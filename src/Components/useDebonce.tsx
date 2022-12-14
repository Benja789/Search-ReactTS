import { useState, useEffect } from "react";

const useDebonce = (val:any, delay:number) =>{
    const [debounceVal, setDebounceVale] = useState(val)

    useEffect(()=>{
        const handler = setTimeout(()=>{
            setDebounceVale(val);
        }, delay)

        return ()=>{
            clearTimeout(handler)
        }
        // eslint-disable-next-line
    },[val])

    return debounceVal;

}

export default useDebonce;