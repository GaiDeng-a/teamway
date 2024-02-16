import styles from "./Login.module.sass"

const Login = () => {
     return (
          <div>
               <main className={styles.wrapper}>
                    <div>
                         <div className={styles.flex}>
                              <div></div>
                              <div>
                                   <div><span>Welcome back!</span></div>
                                   <div>
                                        <form action="submit">
                                             <span>Email</span>
                                             <input type="email" name="email" id="" />
                                             <span>Pasword</span>
                                             <input type="password" name="password" id="" />

                                             <input type="submit" value="Submit" />
                                             
                                        </form>
                                   </div>
                              </div>
                         </div>
                    </div>
               </main>
          </div>
     )
}

export default Login