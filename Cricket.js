import React, { useState } from 'react'
import './Cricket.css'
// import './Cricketmedia.css'

export default function Cricket() {
    const [entry, setEntry] = useState(false)
    const [scoreBoard, setScoreBoard] = useState(true)
    const [score, setScore] = useState(0)
    const [wicket, setWicket] = useState(0)
    const [balCount, setBalCount] = useState(0.0)
    const [over, setOver] = useState(0)

    const handleClick = (increase) =>{
        setScore(score+increase)
        setBalCount(balCount+0.1)
        setOver(over+1)
        if(over===5){
            setBalCount(balCount+0.5)
            setOver(0)
        }
    }
    const handleMatch = () => {
        setEntry(false)
        setScoreBoard(true)
    }
    return (
        <div >
            <h1>Cricket Scorer</h1>
            {entry && <div>
                <div className='main-div'>
                    <div >
                        <h3>Teams</h3>
                        <input type='text' placeholder='Host Team' className='host' /><br />
                        <input type='text' placeholder='Visitor Team' className='host' />
                    </div>
                    <div>
                        <h3>Toss won by?</h3>
                        <input type='radio' value='host' name='toss' /><label>Host</label>
                        <input type='radio' value='visitor' name='toss' /><label>Visitor</label>
                    </div>
                    <div>
                        <h3>Opted to?</h3>
                        <input type='radio' value='bat' name='opted' /><label>Bat</label>
                        <input type='radio' value='bowl' name='opted' /><label>Bowl</label>
                    </div>
                    <div>
                        <h3>Overs</h3>
                        <input type='number' placeholder='15' />
                    </div>
                </div>
                <button onClick={handleMatch}>Match Start</button>
            </div>}
            {scoreBoard &&
            <>
               <div className='scoreBoard'>
                    <div className='score-div' >
                        <h1>{score} - {wicket} <span>({balCount})</span> </h1>
                    <div className='btn-div2' >
                        <button>Wide</button>
                        <button onClick={()=>setBalCount(balCount-0.1)} >No ball</button>
                        <button>Undo</button>
                    </div> 
                    </div>
                    <div className='btn-div'>
                        <button onClick={()=>handleClick(0)}>0</button>
                        <button onClick={()=>handleClick(1)}>1</button>
                        <button onClick={()=>handleClick(2)}>2</button>
                        <button onClick={()=>handleClick(3)}>3</button>
                        <button onClick={()=>handleClick(4)}>4</button>
                        <button onClick={()=>handleClick(5)}>5</button>
                        <button onClick={()=>handleClick(6)}>6</button>
                        <button onClick={()=>setWicket(pre=>pre+1)}>W</button>
                    </div>  
                </div>
                <button className='match-over'> Match Over</button>
                </>
            }
        </div>
    )
}
