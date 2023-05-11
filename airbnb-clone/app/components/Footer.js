import React from 'react';

export default function Footer() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-4 gap-y-15 px-32 py-14 bg-gray-100 text-gray-600">
			<div className="space-y-4 text-xs text-gray-800">
				<h5 className="font-bold">About</h5>
				<p className="">How Airbnb works</p>
				<p className="">Newsroom</p>
				<p className="">Investors</p>
				<p className="">Airbnb Plus</p>
				<p className="">Airbnb Luxe</p>
			</div>
			<div className="space-y-4 text-xs text-gray-800 ">
				<h5 className="font-bold">Community</h5>
				<p className="">Accessibility</p>
				<p className="">This is not a real site</p>
				<p className="">It's a pretty awesome clone</p>
				<p className="">Referrals accepted</p>
				<p className="">Developers point</p>
			</div>
			<div className="space-y-4 text-xs text-gray-800 ">
				<h5 className="font-bold">Host</h5>
				<p className="">Github Pages</p>
				<p className="">Present</p>
				<p className="">Zero to Full Stack Hero</p>
				<p className="">Hundreds os Students</p>
				<p className="">Join now</p>
			</div>
			<div className="space-y-4 text-xs text-gray-800 ">
				<h5 className="font-bold">Support</h5>
				<p className="">Help center</p>
				<p className="">Trust and Safety</p>
				<p className="">Say Hi Youtube</p>
				<p className="">Developers</p>
				<p className="">For the win</p>
			</div>
		</div>
	);
}
