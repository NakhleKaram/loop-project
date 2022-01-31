import './App.css';
import React from 'react';
import imageback from './assets/imageback.jpg';
import { useState } from 'react';

import ReactApexChart from 'react-apexcharts';


const App = () => {

  const [days, setDays] = useState(0);
  const [angle, setAngle] = useState(0);
  const state = {

    series: [],
    options: {
      chart: {
        width: 380,
        type: 'donut',
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270
        }
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'gradient',
      },
      legend: {
        formatter: function (val, opts) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex]
        }
      },
      title: {
        text: 'Gradient Donut with custom Start-angle'
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },


  };
  const state2 = {

    series: [days / 100],
    options: {
      chart: {
        width: 580,
        type: 'donut',
      },
      plotOptions: {
        pie: {
          startAngle: {angle},
          endAngle: 270
        }
      },
      dataLabels: {
        enabled: true
      },
      fill: {
        type: 'gradient',
      },
      legend: {
        formatter: function (val, opts) {
          return days
        }
      },

      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },


  };
  const getData = () => {
    setDays(days + 1)
    setPieData(state2)
  }
  const [pieData, setPieData] = useState(state)
  return (
    <div id="chart">
      <div onClick={getData}>get data</div>
      <div onClick={() => {
        setAngle(angle + 20)
      }}>
        change angle
      </div>
      <ReactApexChart options={pieData.options?.chart} series={pieData?.series} type="donut" width={380} />
      {console.log(days)}
      <div style={{ fontSize: 45 }}>{days}</div>{days}

      <div>{days}</div>

      <div>{days}</div>
    </div>
  )
}

export default App