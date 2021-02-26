import { useContext } from "react"
import styles from "../styles/components/Countdown.module.css"
import { CountdownContext } from "../contexts/CountdownContexts"

export function Countdown() {

    const {
        minutes,
        secunds,
        hasFinished,
        isActive,
        resetCountdown,
        startCountdown } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secundLeft, secundRight] = String(secunds).padStart(2, '0').split('')


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

            {hasFinished ? (
                <button
                    disabled
                    type="button" className={styles.countdownButton}>
                    Ciclo encerrado
                </button>
            ) : (
                    <>
                        {isActive ? (
                            <button
                                onClick={resetCountdown}
                                type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`}>
                                Abandonar ciclo
                            </button>
                        ) : (
                                <button
                                    onClick={startCountdown}
                                    type="button" className={styles.countdownButton}>
                                    Iniciar clico
                                </button>
                            )}
                    </>

                )}
        </>
    )
}