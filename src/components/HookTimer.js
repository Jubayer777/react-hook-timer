import React, { useEffect, useRef, useState } from 'react';

const HookTimer = () => {
    const [timer,setTimer]=useState(0)
    const intervalRef=useRef()
    useEffect(()=>{
       incrementTimer()
        return ()=>{
            clearInterval(intervalRef.current)
        }
      },[])
      const incrementTimer=()=>{
        intervalRef.current=setInterval(()=>{
            setTimer(prev=>prev+1)
        },1000)
      }
    return (
        <div>
            Hook-time: {timer}
            <button onClick={()=>clearInterval(intervalRef.current)}>stop</button>
            <button onClick={()=>incrementTimer()}>start</button>
        </div>
    );
};

export default HookTimer;