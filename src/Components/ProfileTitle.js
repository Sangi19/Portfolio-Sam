import React from 'react'

export default function ProfileTitle(props) {
  return (
    <div>
        <h1>{props.name}</h1>
        <p>{props.role}</p>
    </div>
  )
}
