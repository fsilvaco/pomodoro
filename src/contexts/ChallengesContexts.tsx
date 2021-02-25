import { createContext, ReactNode, useState } from "react"


interface ChallengeContextData {
    level: number;
    currentXp: number;
    challengesCompleted: number;
    levelUp: () => void;
    startNewChallenge: () => void;
}

interface ChallengeContextProps {
    children: ReactNode
}

export const ChallengeContext = createContext({} as ChallengeContextData)

export function ChallengeProvider({ children }: ChallengeContextProps) {
    const [level, setLevel] = useState(1)
    const [currentXp, setCurrentXp] = useState(0)
    const [challengesCompleted, setChallengesCompleted] = useState(0)

    function levelUp() {
        setLevel(level + 1)
    }

    function startNewChallenge() {
        console.log("New challenge")
    }

    return (
        <ChallengeContext.Provider value={{
            level,
            currentXp,
            challengesCompleted,
            levelUp,
            startNewChallenge
        }}>
            {children}
        </ChallengeContext.Provider>
    )
}