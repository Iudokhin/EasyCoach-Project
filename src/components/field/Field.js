import React, { useEffect, useRef, useState } from 'react'
import './field.css'
import coords1 from '../data/goalCoordsFC1'
import coords2 from '../data/goalCoordsFC2'

export default function Field() {
    const canvas1 = useRef(null)
    const canvas2 = useRef(null)
    const [clubs, setClubs] = useState([])

    useEffect(() => {
        let firstClub = Object.keys(coords1)[0]
        let secondClub = Object.keys(coords2)[0]
        setClubs([firstClub, secondClub])
        coords1[firstClub].forEach(el => fillCanvas(canvas1,el.x, el.y))
        coords2[secondClub].forEach(el => fillCanvas(canvas2,el.x, el.y))
    },[])

    function fillCanvas(canvas, x,y) {
        const ctx = canvas.current.getContext('2d')
        ctx.strokeStyle = 'red'
        ctx.strokeRect(x,y,10,10)
    }

  return (
      <div className='d-flex'>
          <div>
            <h2>{clubs[0]}</h2>
            <div className=' field d-flex text-center'>
                <canvas  ref={canvas1} width={650} height={500}/>
            </div>
          </div>
          <div>
            <h2>{clubs[1]}</h2>
            <div className=' field d-flex text-center'>
                <canvas  ref={canvas2} width={650} height={500}/>
            </div>
          </div>
    </div>
    
  )
}
