import logo from '../Picture/logo.svg';
import '../Styles/App.css';

//Navigation
import { useNavigate } from 'react-router-dom';

//MUI
import { Button } from '@mui/material';


const Home =()=>{
    const navigate = useNavigate()

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <Button onClick={()=> navigate("search")}>
                    You can start search result
                </Button>              
            </header>
        </div>
    )
}

export default Home;