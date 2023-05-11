import { Nunito } from 'next/font/google';

import Navbar from '@/app/components/navbar/Navbar';
import LoginModal from './components/models/LoginModel';
import RegisterModal from './components/models/RegisterModel';
import SearchModal from './components/models/SearchModel';
import RentModal from './components/models/RentModel';
import ToasterProvider from './providers/TosterProvider';

import './globals.css';
import ClientOnly from './components/ClientOnly';
import getCurrentUser from './actions/getCurrentUser';

export const metadata = {
	title: 'Airbnb',
	description: 'Airbnb Clone',
};

const font = Nunito({
	subsets: ['latin'],
});

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const currentUser = await getCurrentUser();

	return (
		<html lang="en">
			<body className={font.className}>
				<ClientOnly>
					<ToasterProvider />
					<LoginModal />
					<RegisterModal />
					<SearchModal />
					<RentModal />
					<Navbar currentUser={currentUser} />
				</ClientOnly>
				<div className="pt-28">{children}</div>
			</body>
		</html>
	);
}
