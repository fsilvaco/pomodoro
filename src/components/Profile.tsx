import { useContext } from "react"
import { ChallengeContext } from "../contexts/ChallengesContexts"
import styles from "../styles/components/Profile.module.css"

export function Profile() {
    const { level } = useContext(ChallengeContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/fsilvaco.png" alt="Flávio Silva" />
            <div>
                <strong>Flávio Silva</strong>
                <p>
                    <img src="icons/level.svg" alt="" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}