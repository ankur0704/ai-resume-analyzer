import {Link} from 'react-router';

function ResumeCard() {
  return (
    <Link to={'/resume/${resume.id}'} className='resume-card animate-in fade-in duration-1000'>ResumeCard
    <div className='flex flex-col gap-2'>
        <h2 className='text-black font-bold break-words '>
            {resume.companyName}
        </h2>
        <h3 className='text-lg break-words text-gray-500'>
            
        </h3>
    </div>
    </Link>
  )
}

export default ResumeCard