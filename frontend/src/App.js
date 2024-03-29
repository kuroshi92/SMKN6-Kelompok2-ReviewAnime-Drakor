import './index.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/home';
import Anime from './pages/anime';
import Drakor from './pages/drakor';
import Team from './pages/team';
import KonosubaPage from './pagesanime/konosubas1page';
import AlicePage from './pagesanime/alicegear';
import SmartphonePage from './pagesanime/smartphone2';
import SchoolPage from './pagesdrakor/school';
import TheDangerPage from './pagesanime/TheDangerMyHeart';
import OnePiecePage from './pagesanime/OnePiece';

import Whoarepage from './pagesdrakor/WhoAreYouSchool2015';
import Yumicellspage from './pagesdrakor/yumicells';
import Truebeautypage from './pagesdrakor/truebeauty';

function App() {
  
  return (
    <div className='bg-blue-900'>
      <div>
      
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/anime' element={<Anime/>}/>
          <Route path='/drakor' element={<Drakor/>}/>

          //anime
          <Route path='/konosubapage' element={<KonosubaPage/>}/>
          <Route path='/alicepage' element={<AlicePage/>}/>
          <Route path='/smartphonepage' element={<SmartphonePage/>}/>
          <Route path='/thedangerpage' element={<TheDangerPage/>}/>
          <Route path='/onepiecepage' element={<OnePiecePage/>}/>

          //drakor
          <Route path='/schoolpage' element={<SchoolPage/>}/>
          <Route path='/whoarepage' element={<Whoarepage/>}/>
          <Route path='/yumicellspage' element={<Yumicellspage/>}/>
          <Route path='/truebeautypage' element={<Truebeautypage/>}/>

        </Routes>
      </Router>

      </div>
    </div>
    
    
    



  );
  
}

export default App;
