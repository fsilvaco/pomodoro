import { useContext } from "react"
import { ChallengeContext } from "../contexts/ChallengesContexts"
import styles from "../styles/components/ExperienceBar.module.css"

export function ExperienceBar() {
    const { currentXp, experienceToNextLevel } = useContext(ChallengeContext)

    const percentToNextLvel = Math.round(currentXp * 100) / experienceToNextLevel

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLvel}%` }} >
                    <span className={styles.currentExperience} style={{ left: `${percentToNextLvel}%` }}>
                        {currentXp} xp
                    </span>
                </div>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    )
}