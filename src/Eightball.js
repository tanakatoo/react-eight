import React, { useState } from "react"


const Eightball = (props) => {
    console.log(props.answers)
    const [ballColor, setBallColor] = useState('black')
    const [msg, setMsg] = useState('Think of a Question')

    const getAnswer = () => {
        const rand = Math.floor(Math.random() * props.answers.length)
        setBallColor(props.answers[rand].color)
        setMsg(props.answers[rand].msg)
    }

    const startOver = () => {
        setBallColor('black')
        setMsg('Think of a Question')
    }

    return (
        <>
            <div className="Eightball" onClick={getAnswer} style={{ backgroundColor: ballColor }} >
                <p className="Eightball-msg">{msg}</p>
            </div >
            <button onClick={startOver}>Restart</button>
        </>
    )
}

export default Eightball