// 'use client'
import { SiSteamdeck } from "react-icons/si";
import styles from "./footer.module.sass";

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.wrapper}>
				<div className={styles.flex1}>
					<div>
						<span className={styles.span}>Leading the next era of work.</span>
						<div>
							<ul className={styles.socialist}>
								<li style={{borderBottom: '.5px solid black'}}>Articles</li>
								<li style={{borderBottom: '.5px solid black'}}>Youtube</li>
								<li style={{borderBottom: '.5px solid black'}}>Whitepaper</li>
								<li>Twitter</li>
								<li>Linkedln</li>
							</ul>
						</div>
					</div>

					<div className={styles.importantlinks}>
						<div>
							<span>Companies</span>
							<li>Why Teamway?</li>
							<li>Professions</li>
							<li>How we compare?</li>
							<li>The process</li>
						</div>
						<div>
							<span>Talent</span>
							<li>Why Teamway?</li>
							<li>Application process</li>
							<li>How we compare?</li>
							<li>Junior talent</li>
							<li>Frequently asked</li>
						</div>
						<div>
							<span>General</span>
							<li>About</li>
							<li>Articles</li>
							<li>FAQ</li>
							<li>Contact</li>
						</div>
					</div>

					<div className={styles.teamy}>
						<span className={styles.way}><SiSteamdeck style={{ color: 'black', fontSize: '25px', fontWeight: 'bold', textAlign: 'center'}} /> Teamway</span>
						<div>
							<span>Code of Conduct</span>
							<span>Privacy policy</span>
							<span>Cooke Declaration</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
