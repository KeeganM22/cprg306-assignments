import Link from 'next/link.js';
import StudentInfo from './studentInfo';

export default function Home() {
  return (
    <>
        <StudentInfo />
        <Link href="\week2\page.js">Shopping List</Link>
    </>
    
    
  );
  
}

