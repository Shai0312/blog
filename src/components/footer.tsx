export default function Footer() {
  return (
    <footer className="text-gray-600 body-font bg-zinc-200">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="ml-3 text-xl">Shaista</span>
        </a>
        <p className="text-sm text-gray-600 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-400 sm:py-2 sm:mt-0 mt-4">© 2024 —
          <a href="https://twitter.com/knyttneve" className="text-gray-700 ml-1" rel="noopener noreferrer" target="_blank">@Dynamicblog</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start items-center space-x-6">
          {/* facebook Icon */}
          <a href="https://www.facebook.com/ukhteali.abdulhakeem.3?mibextid=ZbWKwL" className="text-gray-800">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>

          {/* GitHub Icon */}
          <a href="https://github.com/Shai0312" className="text-gray-800">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" className="w-7 h-7" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.15 6.84 9.49.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.79.61-3.38-1.35-3.38-1.35-.45-1.14-1.1-1.45-1.1-1.45-.91-.62.07-.61.07-.61 1.01 0 1.55 1.05 1.55 1.05 1.15 1.97 3.02 1.4 3.76 1.07.12-.84.45-1.4.82-1.72-2.38-.27-4.87-1.19-4.87-5.3 0-1.17.42-2.12 1.11-2.86-.11-.27-.48-1.38.1-2.87 0 0 .9-.28 2.95 1.08a10.74 10.74 0 012.68-.36c.91 0 1.82.12 2.68.36 2.05-1.36 2.94-1.08 2.94-1.08.58 1.49.21 2.6.1 2.87.69.74 1.11 1.69 1.11 2.86 0 4.12-2.5 5.03-4.88 5.29.46.4.87 1.14.87 2.28 0 1.65-.01 2.98-.01 3.38 0 .27.18.58.69.48 4.02-1.34 6.84-5.08 6.84-9.49 0-5.52-4.48-10-10-10z"></path>
            </svg>
          </a>

          {/* insta Icon */}
          <a href="https://www.instagram.com/ukhteali_abdulhakeem/profilecard/?igsh=MTg4NTY5NG9zaG4z" className="text-gray-800">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>

          {/* LinkedIn Icon */}
          <a href="https://www.linkedin.com/in/shaista-abdulhakeem-2935732a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-800">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-6 h-6" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}
