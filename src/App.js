import "./App.css";
import React from "react";
import Pop from "./Pages/Pop";
import Update from "./Pages/Update";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
// import { About } from "./Pages/Components/About";
// import { Go } from "./Pages/Components/Go";
function App() {
    return (
        <>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/subject" element={<Pop />}></Route>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/update" element={<Update />}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
