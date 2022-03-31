//React
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Containers
import Layout from '../Containers/Layout';

//Components
import Header from '../Components/Header';

//Pages
import Home from '../Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header/>
        <Routes>
          <Route exact path='./' element={<Home/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
