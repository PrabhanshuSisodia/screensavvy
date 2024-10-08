import {Link} from 'react-router-dom';

const Footer = () => {
  return (


    <footer className="bg-white shadow w-full my-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to="/" className="hover:underline">ScreenSavvy™</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link to="https://www.instagram.com/prabhanshusisodiya34/" target="_blank" rel='noreferrer' className="hover:underline me-4 md:me-6">Instagram</Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/prabhanshu-sisodia-986796255/" target="_blank" rel='noreferrer' className="hover:underline me-4 md:me-6">LinkedIn</Link>
          </li>
          <li>
            <Link to="https://github.com/PrabhanshuSisodia/PrabhanshuSisodia/" target="_blank" rel='noreferrer' className="hover:underline">Github</Link>
          </li>
        </ul>
      </div>
    </footer>

  )
}

export { Footer }
