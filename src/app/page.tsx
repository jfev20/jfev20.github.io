import Education from './Education';
import Projects from './Projects';

export default function Home() {
  return (
    <>
    <div className='max-w-2xl w-full flex flex-col gap-4'>
      <section>
        <h2>Education</h2>
        <Education />
        <h2>Experience</h2>
        <Projects />
      </section>
    </div>
    </>
  )
}
