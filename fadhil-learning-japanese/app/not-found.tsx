import Link from "next/link"
import Image from "next/image"
import { Github, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center">
              <Github className="h-8 w-8" />
            </Link>
            <nav className="hidden md:flex space-x-4">
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                Projects
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                About
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Input
                type="text"
                placeholder="Search..."
                className="w-64 pl-10 pr-4 py-2 rounded-md border border-gray-300"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            <Button variant="outline" size="sm">
              Sign in
            </Button>
            <Button size="sm">Sign up</Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-center">
          <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-9xl font-bold text-gray-200 mb-4">404</h1>
            <div className="bg-white p-6 rounded-lg shadow-md inline-block">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">This is not the web page you are looking for.</h2>
              <p className="text-gray-600 mb-4">The page you requested could not be found.</p>
              <Link href="/">
                <Button className="w-full">Return to Homepage</Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64">
              <Image
                src="/placeholder.svg?height=256&width=256"
                alt="404 Illustration"
                width={256}
                height={256}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="container mx-auto px-4 pb-16 text-center">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Find what you're looking for:</h3>
          <div className="max-w-md mx-auto flex">
            <Input
              type="text"
              placeholder="Search for projects, code, or pages..."
              className="flex-grow rounded-r-none"
            />
            <Button className="rounded-l-none">Search</Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-gray-900">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-gray-600 hover:text-gray-900">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-gray-900">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/docs" className="text-gray-600 hover:text-gray-900">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/api" className="text-gray-600 hover:text-gray-900">
                    API
                  </Link>
                </li>
                <li>
                  <Link href="/tutorials" className="text-gray-600 hover:text-gray-900">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-600 hover:text-gray-900">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/github" className="text-gray-600 hover:text-gray-900">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="/twitter" className="text-gray-600 hover:text-gray-900">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="/linkedin" className="text-gray-600 hover:text-gray-900">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="/discord" className="text-gray-600 hover:text-gray-900">
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Subscribe</h4>
              <p className="text-gray-600 mb-4">Get updates on new projects and features.</p>
              <div className="flex">
                <Input type="email" placeholder="Your email" className="flex-grow rounded-r-none" />
                <Button className="rounded-l-none">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>© {new Date().getFullYear()} Fadhil Muhammad. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
