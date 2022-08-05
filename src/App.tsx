import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./Page/Home";
import Search from "./Page/Search";
import SearchObject from "./Page/SearchObject";

const App =() => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<Home />}/>
                    <Route path="/search" element={<Search />}/>
                    <Route path="/searchobject" element={<SearchObject />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
