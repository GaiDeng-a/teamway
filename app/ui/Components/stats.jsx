import styles from "./stats.module.sass"


export default function Stats() {
     return (
          <div className={styles.stats}>
               <div className={styles.contain}>
                    <div className={styles.stat}>
                         <span style={{ fontSize: '1.2rem', color: 'gray', marginBlock: '.4rem'}}>Pre-vetted builders.</span>
                         <span style={{ fontSize: '5rem', color: 'black', fontWeight: '800'}}>1100+</span>
                    </div>
                    <div className={styles.stat}>
                         <span style={{ fontSize: '1.2rem', color: 'gray', marginBlock: '.4rem'}}>Nationalities represented.</span>
                         <span style={{ fontSize: '5rem', color: 'black', fontWeight: '800'}}>110+</span>
                    </div>
                    <div className={styles.stat}>
                         <span style={{ fontSize: '1.2rem', color: 'gray', marginBlock: '.4rem'}}>Society earnings.</span>
                         <span style={{ fontSize: '5rem', color: 'black', fontWeight: '800'}}>€3.2M+</span>
                    </div>
               </div>
          </div>
     )
}