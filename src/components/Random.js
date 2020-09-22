import React from 'react'

export default function Random(props){  
    const { min, max } = props;
    console.log('min', min)
    console.log('max', max)

    let randomValue =  (minNum, maxNum) =>{
        return Math.floor(Math.random() * (maxNum - minNum) + minNum)
      }

        return (
            <div>
                <h1>{randomValue(min, max)}</h1>
            </div>
        )
    }

