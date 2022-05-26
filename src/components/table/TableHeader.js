import React from 'react'

export default function TableHeader(props) {
  return (
    <th className='border-end border-top bg-warning text-center'>
        {props.data}
    </th>
  )
}
