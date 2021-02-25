import styles from "../styles/components/ChallengeBox.module.css"

export function ChallengeBox() {

    const isActive = true

    return (
        <div className={styles.challengeBoxContainer}>
            {isActive ? (
                <div className={styles.challengeBoxActive}>
                    <header>Ganhe 400px</header>

                    <main>
                        <img src="icons/body.svg" />
                        <strong>Novo desafio</strong>
                        <p>Levante e faça uma caminhada de 3 minutos.</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={styles.challengeFaildedButton}
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