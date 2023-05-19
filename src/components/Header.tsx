import ProfileImage from './ProfileImage';
import Link from 'next/link';

export default function Header() {
	return (
		<div className=''>
			<ProfileImage />
			<div className=''>
				<h1 className=''>Joel Feven</h1>
				<p className=''>Graduate Software Engineer</p>
				<ul className=''>
					<Link href=''>
						LinkedIn
					</Link>
					<Link href=''>
						GitHub
					</Link>
				</ul>
			</div>
		</div>
	);
}