import React from "react";
import '../css/analytics.css';
import { PieChart, Pie, Tooltip, BarChart, XAxis, YAxis, Legend, CartesianGrid, Bar,} from "recharts";

const Roofing3 = () => {
  const data = [
    { name: "Rib Type 5mm", price: 74000 },
    { name: "Trusses Tubular Steel", price: 40000 },
    { name: "Labor", price: 96000 },
    
  ];

  return (
    
    <div className='banner'>
    <div className="navbarr">
      <a className="navbar-brandd" href="/">MAKE IT HOME</a>
      <ul className="navbar-navv">
        <li className="nav-itemm">
          <a className="nav-linkk" href="/">Home<span className="sr-only" /></a>
        </li>
        <li className="nav-itemm">
                 <a className="nav-linkk" href="Models">Models</a>
               </li>
        <li className="nav-itemm "> 
          <a className="nav-linkk" href="About">About</a>
        </li>

        <li className="nav-itemm "> 
          <a className="nav-linkk" href="Contact">Contact Us</a>
        </li>
       
        </ul>

        </div>

    <div style={{ textAlign: "center" }}>
      <div style={{fontSize:50, color: "black", fontFamily: "sans-serif"}}>
      <h1>ROOFING</h1>
    </div>
      <div className="App">
        <PieChart width={600} height={600}>
          <Pie
            dataKey="price"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#43C6DB"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={700}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 40,
            left: 60,
            bottom: 5,
          }}
          barSize={40}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
            tick={{ fill: '#43C6DB', fontSize: 22 }}
            
          />
          <YAxis
          tick={{ fill: '#43C6DB' }}
          />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="price" fill="#43C6DB" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
      <a className="ed-button" type="button" href="painting3"> Painting Works</a>
    </div>
    </div>
  );
};

export default Roofing3;