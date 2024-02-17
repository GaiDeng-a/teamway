"use client";


import planet from "../../public/planet.jpg";
import { SiSteamdeck } from "react-icons/si";
import styles from "./About.module.sass";
import Image from "next/image";
import Employment from "../ui/Components/employment";
import Stats from "../ui/Components/stats";
import Team from "../ui/Components/team";

const About = () => {
	return (
		<div>
			<main className={styles.wrapper}>
				<div>
					<div className={styles.flex}>
						<h1>
							A new model <br />
							for work.
						</h1>
					</div>

					<div className={styles.steam}>
						<div>
							<span>
								Team way is a society where worl-class tech proffessionals team
								up with progressive companies to build meaningful products and
								services.
							</span>
						</div>

						<div>
							<SiSteamdeck
								className={styles.icon}
								style={{
									color: "black",
									fontSize: "120px",
									fontWeight: "bold",
									textAlign: "center",
								}}
							/>
						</div>
					</div>
					<div
						style={{
							width: "100%",
							height: "40rem",
							borderRadius: "1rem",
							overflow: "hidden",
							marginBottom: "3rem",
						}}
					>
						<Image
							src={planet}
							style={{ width: "100%", height: "100%", objectFit: "cover" }}
							alt="thumbnail"
						/>
					</div>

					<Employment />

					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							borderRadius: "1rem",
							height: "30rem",
							marginBottom: "3rem",
						}}
					>
						<h1 style={{ fontSize: "4rem", textAlign: "center" }}>
							We believe in fairness,
							<br />
							transperancy and <br />
							ownership.
						</h1>
					</div>

					<Stats />

					<Team/>

					
				</div>
			</main>
		</div>
	);
};

export default About;
