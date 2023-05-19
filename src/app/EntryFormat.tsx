import { ReactNode } from 'react';
import styles from './Entry.css';

export default function EntryFormat({
	company,
	title,
	date,
	children,
}: {
	company: string;
	title: string;
	date: string;
	children?: ReactNode;
}) {
	return (
		<div className={styles.entry}>
			<div className=''>
				<h3>
					{company} | {title}
				</h3>
				<p>{date}</p>
			</div>

			{children}
		</div>
	);
}