import { useEffect, useState } from "react"
import styles from "../styles/components/Countdown.module.css"

export function Countdown() {

    const [time, setTime] = useState(25 * 60)
    const [active, setActive] = useState(false)
    const [start, setStart] = useState("Iniciar um")

    const minutes = Math.floor(time / 60)
    const secunds = time % 60

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secundLeft, secundRight] = String(secunds).padStart(2, '0').split('')

    function startCountdown() {
        setActive(true)
        setStart("Parar o")
    }

    useEffect(() => {
        if (active && time > 0) {
            setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        }
    }, [active, time])


    return (
        <>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secundLeft}</span>
                    <span>{secundRight}</span>
                </div>
            </div>
            <button
                onClick={startCountdown}
                type="button" className={styles.countdownButton}>
                {start} ciclo
            </button>
        </>
    )
}