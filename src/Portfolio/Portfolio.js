import React from 'react';
import Nobu from './Projects/Nobu';
import Spotify from './Projects/Spotify';
import SportCards from './Projects/SportCards';
import Navbar from '../Navbar/Navbar';
import LazyLoad from 'react-lazyload';
import './Portfolio.css';

const Portfolio = () => {
	return (
		<div className="portfolio">
			<Navbar />
			<div className="portfolio__title">
				<h1>Portfolio</h1>
				<h5>
					Take a look at the projects I have worked on and participating in
				</h5>
			</div>
			<div className="portfolio__projects">
				<LazyLoad height={300} once={true} offset={-200}>
					<Nobu />
				</LazyLoad>
				<LazyLoad height={300} once={true} offset={-200}>
					<Spotify />
				</LazyLoad>
				<LazyLoad height={300} once={true} offset={-200}>
					<SportCards />
				</LazyLoad>
			</div>
		</div>
	);
};

export default Portfolio;
