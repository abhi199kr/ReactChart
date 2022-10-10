import React from 'react'
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    PieChart
} from 'recharts';
import Areachart from './Areachart';
import Bar2 from './Bar2';
import Piechart from './Piechart';

const pdata = [
    {
        name: 'MongoDb',
        student: 11,
        fees: 120
    },
    {
        name: 'Javascript',
        student: 15,
        fees: 12
    },
    {
        name: 'PHP',
        student: 5,
        fees: 10
    },
    {
        name: 'Java',
        student: 10,
        fees: 5
    },
    {
        name: 'C#',
        student: 9,
        fees: 4
    },
    {
        name: 'C++',
        student: 10,
        fees: 8
    },
];
const data = [
    {x:1, y:123,  z:122},
    {x:2, y:113,   z:713},
    {x:3, y:125,  z:312},
    {x:4, y:235,  z:123},
    {x:5, y:145,  z:420},
    {x:6, y:25,  z:529},
    {x:7, y:117,  z:61},
    {x:8, y:32,  z:435},
    {x:9, y:143,  z:93},
  ];

  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };

const data1 = [];

const rand = 300;
for (let i = 0; i < 7; i++) {
  let d = {
    year: 2000 + i,
    value: Math.random() * (rand + 50) + 100
  };

  data1.push(d);
}
const Linechart1 = () => {
  return (
    <div className='flex flex-col md:flex-row'>
    <div className='w- '>
    <h1 className='text-center'>Data</h1>
    <LineChart width={300} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis yAxisId="left-axis" />
          <YAxis yAxisId="right-axis" orientation="right" />
          <Line yAxisId="left-axis" type="dashed" dataKey="y" 
           stroke="pink"/>
          <Line yAxisId="right-axis" type="dashed" dataKey="z" 
          stroke="blue" />
        </LineChart>
                
            
      
    </div>
    <div className='w-fit'>
    <Areachart/>

    </div>
    

   
  <div>
    <Bar2/>
  </div>
  <div>
    <Piechart/>
    
  </div>
  
    
    </div>
  )
}

export default Linechart1
