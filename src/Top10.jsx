import styles from './Top10.module.css';
export function Top10(){
    return(
        <div className={styles.top10}>
            <h1>Top 10</h1>
            <p>mijn top 10 power-rangers
                <li>1. samuria</li>        
                <li>2. mega force</li>
                <li>3. ninja strom</li>
                <li>4. dino charge</li>
                <li>5. dino thuder</li>
                <li>6. ninja steal</li>
                <li>7. jungle furt</li>
                <li>8. spd</li>
                <li>9. wild force</li>
                <li>10. rpm</li>
            </p>
        </div>
    )
}