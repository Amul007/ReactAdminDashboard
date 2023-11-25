import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import './App.css';
const App = () => {
  const activeMenu = true;
  return (
     <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{zIndex: '1000'}}>
            <TooltipComponent content="Settings" position="Top">
              <button type="button" className="text-3xl p-3 hover:drop-shadow-x1 hover:bg-light-grey text-white" style={{background : 'blue', borderRadius:"50%"}}>
               <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark :bg-secondary-dark-bg bg-white">sidebar
            </div>
          ): (
            <div className="w-0 dark:bg-secondary-dark-bg">
              sidebar w-0
            </div>
          )}
          <div className={`dark:bg-main-bg bg-main-bg min-h-screen md:ml-72 w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
          </div>
        </div>
        <div>
          <Routes>
            {/* Dashboard ke liye routes */}
            <Route path="/" element="Ecommerse"/>
            <Route path="/ecommerse" element="Ecommerse"/>

            {/* pages wale routes */}
            <Route path="/orders" element="Orders"/>
            <Route path="/employees" element="Employees"/>
            <Route path="/customer" element="Customer"/>

            {/* App wala routes */}
            <Route path="/kanban" element="kanban"/>
            <Route path="/editor" element="Editor"/>
            <Route path="/calender" element="Calender"/>
            <Route path="/color-picker" element="Color-Picker"/>
            
            {/* charts wala components */}
            <Route path="/line" element="Line"/>
            <Route path="/area" element="Area"/>
            <Route path="/bar" element="Bar"/>
            <Route path="/pie" element="Pie"/>
            <Route path="/financial" element="Financial"/>
            <Route path="/color-mapping" element="Color-Mapping"/>
            <Route path="/pyrmid" element="Pyrmid"/>
            <Route path="/Stacked" element="Stacked"/>

          </Routes>
        </div>
      </BrowserRouter>
     </div>
  )
}

export default App