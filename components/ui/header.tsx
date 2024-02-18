import Link from 'next/link'
import Logo from './logo'
import Dropdown from '@/components/utils/dropdown'
import ThemeToggle from './theme-toggle'
import MobileMenu from './mobile-menu'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">



          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center font-medium">

            </ul>

            {/* Desktop lights switch */}
            <ThemeToggle className="ml-3" />


          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
