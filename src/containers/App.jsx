import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home';
import Alta from '../pages/Alta';
import Register from '../pages/Register';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path='/alta' element={<Alta/>}/>
            </Routes>
        </BrowserRouter>
      );
}

export default App;