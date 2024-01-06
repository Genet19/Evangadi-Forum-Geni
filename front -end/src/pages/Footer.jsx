import React from "react";
import { IoLogoYoutube } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
	return (
		<>
			<div className=" h-60 bg-gray-700 text-white flex justify-between  pt-10 px-20">
				<div>
					<div>
						<img
							src="https://forum.ibrodev.com/assets/evangadi-logo-footer-f73bca57.png"
							alt=""
						/>
					</div>
					<br />
					<div className="flex justify-between">
						<a href="">
							<FaFacebookSquare />
						</a>
						<a href="">
							<FaInstagram />
						</a>
						<a href="">
							<IoLogoYoutube />
						</a>
					</div>
				</div>
				<div>
					<h2 className="text-2xl">Useful Link</h2>
					<br />
					<a href="">How it works</a>
					<br />
					<a href="">Terms of Service</a>
					<br />
					<a href="">Privacy policy</a>
					<br />
				</div>
				<div>
					<h2 className="text-2xl">Contact Info</h2>
					<br />
					<p>Genet.B</p>
					<p>brightgenet@gmail.com</p>
					<p>phone</p>
				</div>
			</div>
		</>
	);
}

export default Footer;
