import React from 'react';
import './App.scss';
import { useState } from 'react';
import ReactTableDragColumnRow from './Components/Table';




function App() {
  let [data, setData] = useState({
    heads: ["Things to do", "Owner", "Status", "Duedate","priority", "+"],
    rows: [
      ["new", "stuck",3, 1, 2, 3],
      [11, 2, 3, 11, 2, 3],
      [1, 22, 3, 1, 22, 3],
      [1, 2, 33, 1, 2, 33]
    ]
  });
  return (
    <div className="App">
        

       <div className="App-sideNav">
      {/* <img src='/public/images/perm' */}
      <img src="/perm_identity-black-18dp.svg" alt="image" />

       </div>
       <div className="App-sideNav2">
         <h3 className="alignleft"> Work Spaces</h3>
{/* 
         <div id="fakebox">        
        <input id="fakebox-input" autocomplete="off" tabindex="-1" type="url" aria-hidden="true"></input>
        
      </div> */}

      <div className="divInsideNav">
      <h5 className="alignleft"> main</h5>

      {/* <img src="C:\Users\Lenovo\Downloads\eject-black-18dp" alt="image" /> */}
      </div>
       </div>
     
       <div>
       <div className="App-divTop">
         <h3 className="alignleft">Web design</h3>

<h5 className="alignleft">Main Table</h5>
         
      {/* <img src='/public/images/perm' */}
      {/* <img src="/perm_identity-black-18dp.svg" alt="image" /> */}

       </div> 
      <ReactTableDragColumnRow
        heads={data.heads}
        
        rows={data.rows}
        onDragEnd={(type, from, to, newData) => {
          console.log({
            type,
            from,
            to,
            newData
          });
          setData(newData);
        }}
      />
    </div>

    </div>
  );
}

export default App;
