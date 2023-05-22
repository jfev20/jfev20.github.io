import ProfileImage from './ProfileImage';
import Link from 'next/link';

export default function Header() {
	return (
		<header className='flex flex-col items-center p-1 w-full' id='header'>
			<div className='flex flex-row items-center max-w-2xl w-full gap-2'>
				<ProfileImage />
				<div className='grow'>
					<h1 className='text-xl'>Joel Feven | Graduate Software Engineer</h1>
					<ul className='flex flex-row gap-x-4'>
						<Link href='https://www.linkedin.com/in/joel-f-83b7b21b3/'>
							LinkedIn
						</Link>
						<Link href='https://github.com/jfev20'>
							GitHub
						</Link>
					</ul>
				</div>
			</div>
		</header>
	);
}