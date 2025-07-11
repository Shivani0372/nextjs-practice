import React from 'react'


export default function CategoryProduct(props:any) {
    console.log(props);
    const color = props.searchParams.color;
  return (
    <div>
      CategoryProducts:Color : {color}
    </div>
  )
}
