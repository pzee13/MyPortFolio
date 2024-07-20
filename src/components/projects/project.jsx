import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faCodeBranch } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, githubLink, liveLink } = props;

	return (
		<div className="project">
			<div className="project-container">
				<div className="project-logo">
					<img src={logo} alt="logo" />
				</div>
				<div className="project-title">{title}</div>
				<div className="project-description">{description}</div>
				<div className="project-links">
					<a href={githubLink} target="_blank" rel="noopener noreferrer">
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faCodeBranch} />
							</div>
							<div className="project-link-text">GitHub</div>
						</div>
					</a>
					{liveLink && (
						<a href={liveLink} target="_blank" rel="noopener noreferrer">
							<div className="project-link">
								<div className="project-link-icon">
									<FontAwesomeIcon icon={faLink} />
								</div>
								<div className="project-link-text">Live</div>
							</div>
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default Project;
