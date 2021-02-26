import { useContext } from "react"
import { ChallengeContext } from "../contexts/ChallengesContexts"
import { CountdownContext } from "../contexts/CountdownContexts"
import styles from "../styles/components/ChallengeBox.module.css"

export function ChallengeBox() {

    const { activeChallenge, resetChallenge, completedChallenge } = useContext(ChallengeContext)
    const { resetCountdown } = useContext(CountdownContext)

    function handleChallengeSucceeded() {
        completedChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeBoxActive}>
                    <header>Ganhe {activeChallenge.amount}</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={styles.challengeFaildedButton}
                            onClick={handleChallengeFailed}
                        >Falhei</button>
                        <button
                            type="button"
                            className={styles.challengeSucceededButton}
                            onClick={handleChallengeSucceeded}
                        >Completei</button>
                    </footer>

                </div>
            ) : (
                    <div className={styles.challengeBoxNotActive}>
                        <strong>Inicie um ciclo para receber desafios a serem completados</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level Up" />
                    Complete-os e ganhe experiência e avance de leve.
                </p>
                    </div>
                )}

        </div>
    )
}