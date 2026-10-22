import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 px-4 py-4">
      <div className="mx-auto flex max-w-3xl items-center justify-between">
        <p className="text-sm font-medium">Site Name</p>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-label="メニューを開く"
        >
          <span
            className={`block h-0.5 w-6 bg-gray-800 transition-transform duration-300 ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-800 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-800 transition-transform duration-300 ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>

        {/* ナビゲーション */}
        <nav
          className={`absolute inset-x-0 top-[57px] border-b border-gray-200 bg-white px-4 py-6 md:static md:block md:border-none md:p-0 ${isMenuOpen ? 'block' : 'hidden'}`}
        >
          <ul className="flex flex-col gap-4 md:flex-row md:gap-8">
            <li>
              <a href="#" className="text-sm hover:opacity-60">
                Menu 1
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:opacity-60">
                Menu 2
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:opacity-60">
                Menu 3
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
