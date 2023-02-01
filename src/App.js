import { Route, Routes } from 'react-router-dom';
import RenderCalculator from './components/RenderCalculator';
import Header from './components/Header';
import Home from './components/Home';
import Quotes from './components/Quotes';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Quotes" element={<Quotes />} />
        <Route path="/Calculator" element={<RenderCalculator />} />
      </Routes>
    </>
  );
}

export default App;
