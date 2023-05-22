import EntryFormat from './EntryFormat';
import Link from 'next/link';
import styles from './entry.module.css';

export default function Projects() {
	return (
		<EntryFormat company='University of Glasgow' title='Student' date='2017-2022'>
			<p>
				Notable projects undertaken by myself and development teams I have worked with.
			</p>

			<ul>
				<li>
					<div className='inline-flex flex-col gap-1'>
						<div className='flex flex-row items-center gap-2'>
							<h4>
								<Link href='https://github.com/jfev20/Level-4-Project-Dissertation'>
									Context Relevant Anti-Phishing Training Scheme
								</Link>
							</h4>
						</div>
						<p>
							Year-long project developing a context relevant anti-phishing training web app using Flask, SQLite, HTML, CSS, and JavaScript.
						</p>
					</div>
				</li>

				<li>
					<div className='inline-flex flex-col gap-1'>
						<div className='flex flex-row items-center gap-2'>
							<h4>
								<Link href='https://github.com/CamMap/CamMapCesium'>
									Integrated Mapping Software for 2D and 3D Land Sensor
								</Link>
							</h4>
						</div>
						<p>
							Year-long team project developing an integrated mapping software tool for use by the Thales Group, making use of technologies such as HTML, CSS, TypeScript, Rust, ESLint, Karma, and CesiumJS.
						</p>
					</div>
				</li>
			</ul>
		</EntryFormat>
	);
}