import React from 'react'

const Avatar = ({children,backgroundColor,color,px,py,borderRadius,fontSize,cursor}) => {
const style={
    backgroundColor,
    color:color || 'black',
    padding:`${py} ${px}`,
    borderRadius,
    fontSize,
    textAlign:"center",
    cursor:cursor || null,
    textDecoration:"none"
}
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Avatar
