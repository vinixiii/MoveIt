import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext);
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/vinixiii.png" alt="Vinícius Figueiroa"/>
            <div>
                <strong>Vinícius Figueiroa</strong>
                <p>
                    <img src="icons/tomate.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}