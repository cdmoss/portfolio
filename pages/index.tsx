import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <header className='flex content-center justify-center'>
      <Link className='text-3xl font-thin pt-10' href="/">CHASE MOSSING</Link>
    </header>
    <main className='flex flex-col w-5/6 m-auto'>
      <h3 className='mb-3 ml-10'>My work</h3>
      <div className='flex border-t border-top border-black pt-3'>
        <div className='flex flex-col'>
          <p className='work-item'>Trad Data Monitor</p>
          <p className='work-item
        '>Volunteer Manager</p>
          <p className='work-item'>Click & Push - Atlas</p>
          <p className='work-item'> YARO</p>
        </div>
        <div className='flex'>
        </div>
      </div>
    </main>
    </>
  )
}
