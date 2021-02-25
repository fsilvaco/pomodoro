import { useContext } from "react"
import { ChallengeContext } from "../contexts/ChallengesContexts"
import styles from "../styles/components/ChallengeBox.module.css"

export function ChallengeBox() {

    const { activeChallenge, resetChallenge } = useContext(ChallengeContext)

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
                            onClick={resetChallenge}
                        >Falhei</button>
                        <button
                            type="button"
                            className={styles.challengeSucceededButton}
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