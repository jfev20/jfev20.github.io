import EntryFormat from './EntryFormat';
import Link from 'next/link';
import styles from './entry.module.css';

export default function Education() {
	return (
		<EntryFormat company='University of Glasgow' title='Student' date='2017-2022'>
			<p>
				Relevant Courses Taken
			</p>

			<ul>
				<li>
					<div className='inline-flex flex-col gap-1'>
						<p>SQL, Python, Computer Systems (<Link href='https://jtod.github.io/home/Sigma16/'>Sigma16</Link>/Assembly Language).</p>
					</div>
				</li>
				<li>
					<div className='inline-flex flex-col gap-1'>
						<p>Algorithmics and Data Structures, Java Programming, Networks and Operating Systems, Object Oriented Software Engineering.</p>
					</div>
				</li>
				<li>
					<div className='inline-flex flex-col gap-1'>
						<p>Professional Software Development, Interactive Systems, Mobile HCI, Robotics Systems.</p>
					</div>
				</li>
				<li>
					<div className='inline-flex flex-col gap-1'>
						<p>Cyber Security, Functional Programming (Haskell), Start Up Growth Engineering, Advanced Software Engineering Practices.</p>
					</div>
				</li>
			</ul>
		</EntryFormat>
	);
}