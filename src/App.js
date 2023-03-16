import { useState } from "react";
import Dropdown from "./components/Dropdown";
import Link from "./components/Link";
import Route from "./components/Route";
import AccordionPage from './pages/AccordionPage'
import DropdownPage from './pages/DropdownPage'
import Sidebar from "./components/Sidebar";
import ButtonPage  from "./pages/ButtonPage"
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";
function App() {
  
  // return <Dropdown options={options} selection={selection} onSelect={handleSelect}/>
  return (
  <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar/>
    <div className="col-span-5">
      <Route path="/accordion">
        <AccordionPage></AccordionPage>
      </Route>
      <Route path="/button">
        <ButtonPage></ButtonPage>
      </Route>
      <Route path="/">
        <DropdownPage></DropdownPage>
      </Route>
      <Route path="/modal">
        <ModalPage></ModalPage>
      </Route>
      <Route path="/table">
        <TablePage></TablePage>
      </Route>
      <Route path="/counter">
        <CounterPage initialCount={10}></CounterPage>
      </Route>
    </div>
  </div>
  )
}

export default App;
