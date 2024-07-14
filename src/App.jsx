import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LifeCycleComponent from './component/LifeCycleComponent'
import MountComponent from './component/MountComponent'
import UnmountComponent from './component/UnmountComponent'
import UpdateComponent from './component/UpdateComponent'

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LifeCycleComponent/>}>
            <Route path="MountComponent"  element={<MountComponent/>} />
            <Route path="UnmountComponent" element={<UnmountComponent/>} />
            <Route path="UpdateComponent" element={<UpdateComponent/>} />
          </Route>
        </Routes>
      </BrowserRouter>
   
  )
}
