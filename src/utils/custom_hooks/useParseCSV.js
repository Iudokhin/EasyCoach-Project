import React from 'react'
import { useEffect, useState } from 'react';
import Papa from 'papaparse';

export default function useParseCSV(url) {
    let [data, setData] = useState({
        headers:[],
        players:[],
      })
  
      useEffect(() => {
       Papa.parse(url, 
          {
            download: true,
            skipEmptyLines: true,
            complete: (res) => {
              setData({
                headers:res.data[5],
                players:res.data.slice(6)
              })
            }
          }
        )
      },[])

      return {...data}
}
