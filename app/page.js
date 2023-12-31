import Link from 'next/link.js';
import StudentInfo from './studentInfo';

export default function Home() {
  return (
    <>
        <StudentInfo />
        <Link href="\week2">Week 2</Link>
        <div>
        <Link href="\week3">Week 3</Link>
        </div>
        <div>
        <Link href="\week4">Week 4</Link>
        </div>
        <h2> 2 + 3 = {Add(2, 3)}</h2>
    </>
  );
}

function Add(x, y) {
  return (x+y);
}
