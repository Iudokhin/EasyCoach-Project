import React, { useEffect, useState } from 'react'
import Chart from "react-apexcharts";

export default function LiveChart(props) {
    let [categories, setCategories] = useState([])
    let [dataToRender, setDataToRender] = useState([])

    useEffect(() => {
        setCategories(props.players.map(el => el[0]))
        setDataToRender(props.players.map(el => {
            if(el[props.series].includes('%')) {
                let num = el[props.series].slice(el[props.series].indexOf('-')+1, el[props.series].indexOf('%'))
                return num
            }

            return el[props.series]
        }))
    },[props])

    

  return (
            <div className='d-flex flex-column align-items-center my-4'>
              <Chart
                options = {{
                  chart: {
                    id: "basic-bar"
                  },
                  xaxis: {
                    categories
                  }
                }}
                series={[
                  {
                    name: props.title,
                    data: dataToRender
                  }
                ]}
                type="bar"
                width="700"
              />

              <div className='border d-flex px-5'>{props.title} with average: {dataToRender.reduce((el1,el2) => +el1+ +el2, 0) / dataToRender.length}</div>
            </div>
  )
}
