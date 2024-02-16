import { IoMdPersonAdd, IoIosGlobe } from "react-icons/io";

import styles from "./employment.module.sass"

export default function Employment() {

     return (
          <div className={styles.contain}>
               <h1 className={styles.h1}>Employment is <br/>changing.</h1>
               <div>
                    <div className={styles.flex}>
                         <div>
                              <IoIosGlobe style={{ color: 'black', fontSize: '34px', fontWeight: 'bold'}} />
                         </div>
                         <div>
                              <h3>For companies</h3>
                              <p>
                              Remote, independent work will be a requirement for the next generation of top talents in tech.
                              The companies that embrace it as an opportunity will thrive-rethinking the way they build their teams to take advantage of the incredible pool 
                              of on-demand, independent talent and start innovating fast.
                              </p>
                         </div>
                    </div>

                    <div className={styles.flex}>
                         <div>
                              <IoMdPersonAdd style={{ color: 'black', fontSize: '34px', fontWeight: 'bold'}} />
                         </div>
                         <div>
                              <h3>For professionals</h3>
                              <p>
                              Remote, independent work will be a requirement for the next generation of top talents in tech.
                              The companies that embrace it as an opportunity will thrive-rethinking the way they build their teams to take advantage of the incredible pool 
                              of on-demand, independent talent and start innovating fast.
                              </p>
                         </div>
                    </div>
               </div>
          </div>
     )
     
}


