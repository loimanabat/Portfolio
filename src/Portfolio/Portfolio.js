import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import MouseOutlinedIcon from '@material-ui/icons/MouseOutlined';
import LazyLoad from 'react-lazyload';
import ProjectItem from './Projects/ProjectItem';
import projectData from './Projects/projectsData';
import './Portfolio.css';

const Portfolio = () => {
	return (
		<div className="portfolio">
			<Navbar />
			<div className="portfolio__title">
				<h1>Portfolio</h1>
				<p>Take a look at the projects I have worked on and participating in</p>
				<div>
					<MouseOutlinedIcon className="mouse__icon" fontSize="large" />
					<p>scroll</p>
				</div>
			</div>
			<div className="portfolio__projects">
				{projectData.map((project) => (
					<LazyLoad height={300} once={true} offset={-200}>
						<ProjectItem project={project} />
					</LazyLoad>
				))}
			</div>
			<Footer />
		</div>
	);
};

export default Portfolio;
