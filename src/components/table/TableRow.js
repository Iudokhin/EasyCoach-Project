import React from 'react'

export default function TableRow(props) {
  return (
    <tr>
            {props.data.map((el, index) => (
                <td className='border-end' key={index}>{el}</td>
            ))}
    </tr>
  )
}
