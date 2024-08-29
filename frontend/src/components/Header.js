import { useState } from 'react'
import {Link} from 'react-router-dom'
export function Header(){
	const [navLink,setNavLink]=useState(-1)
	const joker=()=>{
		setNavLink(null)
	}
    return<>
     <header>
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<a className="navbar-brand" href="#">My Blog</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
					aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<a onClick={joker} className="nav-link active" aria-current="page" href="#">Home</a>
						</li>
						<li className="nav-item">
							<Link onClick={joker} className="nav-link" to="/posts">Posts</Link>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">About</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
    </>
}