import { Link } from 'react-router-dom'
import logo from '~/assets/icons/logo.png'
const Header = () => {
  return (
    <header
      className='sticky top-0 px-4 py-1 z-10'
      style={{
        backgroundImage: 'linear-gradient(134deg,#0052e0,#74009d 93.8%)',
        boxShadow: '0 2px 1px -1px rgba(0,0,0,0.2),0 1px 1px 0 rgba(0,0,0,0.14),0 1px 3px 0 rgba(0,0,0,0.12)'
      }}
    >
      <div className='max-w-[1200px] mx-auto flex items-center justify-between'>
        <div className='flex items-center  justify-between gap-3 '>
          <button className='text-white md:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
            </svg>
          </button>
          <Link to={'/'}>
            <img src={logo} alt='logo' loading='lazy' width={58} height={58} />
          </Link>
        </div>
        <nav className='md:flex gap-6 text-white text font-normal hidden'>
          <Link to={'/'} className='px-3 font-medium'>
            Trang chủ
          </Link>
          <Link to={'/'} className='px-3'>
            Tin tức
          </Link>
          <Link to={'/'} className='px-3'>
            Giới thiệu
          </Link>
          <Link to={'/'} className='px-3'>
            Điều khoản sử dụng
          </Link>
        </nav>
        <div className='flex items-center gap-4'>
          <button className='hidden md:flex items-center justify-center text-sm text-[#0a3f9b] gap-1 px-4 rounded h-[36px] bg-white'>
            <p className='font-medium '>Đăng nhập</p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='size-[18px]'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
              />
            </svg>
          </button>
          <button
            style={{
              backgroundImage: 'linear-gradient(134deg,#0052e0,#74009d 93.8%)',
              boxShadow: '0 3px 1px -2px rgba(0,0,0,0.2),0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12)'
            }}
            className='hidden md:flex items-center justify-center text-sm text-white gap-1 px-4 rounded h-[36px] bg-white'
          >
            <p className='font-medium '>Đăng ký</p>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='size-[18px]'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
            </svg>
          </button>
          <button className='text-[#9e9e9e] md:hidden'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-[35px]'>
              <path
                fillRule='evenodd'
                d='M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
