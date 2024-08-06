import React from 'react'

function create(){
    return <h1>Create New Post</h1>
}
export default function page() {
  return (
    <div>
      <h1>Dashbord</h1>
      {create()}
    </div>
  )
}
