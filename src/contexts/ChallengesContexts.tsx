import { createContext, ReactNode, useEffect, useState } from "react"
import challenges from "../../challenges.json"

interface Challenge {
    type: "body" | "eye";
    description: string;
    amount: number
}
interface ChallengeContextData {
    level: number;
    currentXp: number;
    experienceToNextLevel: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completedChallenge: () => void;
}

interface ChallengeContextProps {
    children: ReactNode
}

export const ChallengeContext = createContext({} as ChallengeContextData)

export function ChallengeProvider({ children }: ChallengeContextProps) {
    const [level, setLevel] = useState(1)
    const [currentXp, setCurrentXp] = useState(0)
    const [challengesCompleted, setChallengesCompleted] = useState(0)

    const [activeChallenge, setActiveChallenges] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    useEffect(() => {
        Notification.requestPermission()
    }, [])

    function levelUp() {
        setLevel(level + 1)
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenges(challenge)

        new Audio("./notification.mp3").play();

        if (Notification.permission === 'granted') {
            new Notification('Novo desafio 🎉', {
                body: `Valendo ${challenge.amount}xp!`
            })
        }
    }

    function resetChallenge() {
        setActiveChallenges(null)
    }

    function completedChallenge() {
        if (!activeChallenge) {
            return;
        }

        const { amount } = activeChallenge;

        let finalExperience = currentXp + amount

        if (finalExperience > experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel
            levelUp()

            setCurrentXp(finalExperience)
            setActiveChallenges(null)
            setChallengesCompleted(challengesCompleted + 1)
        }
    }

    return (
        <ChallengeContext.Provider value={{
            level,
            currentXp,
            challengesCompleted,
            activeChallenge,
            experienceToNextLevel,
            levelUp,
            startNewChallenge,
            resetChallenge,
            completedChallenge
        }}>
            {children}
        </ChallengeContext.Provider>
    )
}