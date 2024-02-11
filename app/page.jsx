import Image from "next/image";
import world from "../public/images.jpg"
import her from "../public/her.jpg"
import styles from "./page.module.sass"
export default function Home() {
  return (
    <>
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.hire}>
          <h1>
            <span>Hire pre-vetted</span>
            <span>tech talent, fast.</span>
          </h1>
          <hr className={styles.horizon} />
          <button className={styles.button}>Hiring? Book a call <div className={styles.ion}></div></button>

          <p  className={styles.description}>Hire pre-vetted remote developers, designers and product managers with world-class technical and communication skills, without worrying about crazy fees or legal hassle.</p>
        </div>
        <div  className={styles.hire}>
            <Image src={world} style={{ width: '100%', height: '100%', objectFit: 'cover'}} alt="thumbnail"/>
        </div>
      </div>
        
      </main>

      <div className={styles.center}>
          <p>Join 160+ companies trusting Teamway for their remote engineering needs.</p>
      </div>
      <div>
        <hr className={styles.line}/>
        <hr className={styles.line}/>
      </div>

      <main className={styles.wrapper}>
        <div className={styles.recruit}>
          <div className={styles.better}> <span>Recruit better, smarter, faster.</span></div>
          <div className={styles.member}><span className={styles.company}>Company</span> <span>Member</span></div>
        </div>
        <div className={styles.flex}>
          <div className={styles.flex1}>
            <div className={styles.flexible}>
              <span>Fast and flexible</span>
              <p>Hire in just 72 hours.Scale your team up-and-down from month-to-month as needed.</p>
            </div>

            <div className={styles.decent} >
              <span>Decentralized</span>
              <p>Make your budget go up to 4x furtherby accessing talent directly without the middle-person.</p>
            </div>
          </div>


          <div className={styles.flex1}>
            <div className={styles.talent}>
              <span>Only the best talent</span>
              <p>Access the top 5% of talent that passes our indepth application and vetting process.</p>
            </div>
            <div className={styles.hassle}>
              <span>No legal hassle </span>
              <p>Hiring remote independent talent used to be a struggle - not anymore! We handle the legal hassle for you.</p>
            </div>
          </div>
        </div>


        <div className={styles.container}>
          <div className={styles.value}>
            <span>More value and</span>
            <span>less friction.</span>
            <p>Hiring remote independent talent used to be a struggle - not anymore! We handle the legal hassle for you.</p>
          </div>

          <div className={styles.images}>
          <Image src={her} style={{ width: '100%', height: '100%', objectFit: 'cover'}} alt="thumbnail"/>
          </div>
        </div>
      </main>
    </>
  );
}
