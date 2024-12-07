import Image from "next/image"
import Link from "next/link"
import { Menu, Search, ShoppingBag, User } from "lucide-react"
import { ReactNode } from "react"



const Button = ({ children, className = "", ...props }:{
  children:ReactNode;
  className?:string;
}) => {
  return (
    <button
      className={`w-full lg:w-auto bg-black text-white rounded-full py-4 px-12 text-lg font-medium hover:bg-gray-900 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="relative bg-black text-white text-sm py-2">
        <div className="text-center px-4">
          Sign up and get 20% off to your first order.{" "}
          <Link href="#" className="underline font-medium">
            Sign Up Now
          </Link>
        </div>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-xl lg:hidden">&times;</button>
      </div>

      {/* Navigation */}
      <header className="border-b border-gray-200">
        <div className="lg:max-w-7xl lg:mx-auto">
          <nav className="relative flex items-center justify-between h-16 px-4">
            {/* Mobile Menu & Logo */}
            <div className="flex items-center gap-8 lg:gap-16">
              <button className="lg:hidden">
                <Menu className="h-6 w-6" />
              </button>
              <Link href="/" className="text-2xl font-bold whitespace-nowrap lg:text-[28px]">
                SHOP.CO
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link href="#" className="text-base font-medium">
                Shop
              </Link>
              <Link href="#" className="text-base font-medium">
                On Sale
              </Link>
              <Link href="#" className="text-base font-medium">
                New Arrivals
              </Link>
              <Link href="#" className="text-base font-medium">
                Brands
              </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden lg:block flex-1 max-w-md px-8">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search for products..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-full text-sm border border-gray-200 focus:outline-none focus:border-gray-300"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4 lg:gap-6">
              <button className="lg:hidden">
                <Search className="h-6 w-6" />
              </button>
              <Link href="#" aria-label="Shopping cart">
                <ShoppingBag className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="User account">
                <User className="h-6 w-6" />
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="px-4 pt-8 lg:pt-16 pb-0 lg:pb-16">
        <div className="lg:max-w-7xl lg:mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-6 lg:space-y-8">
              <h1 className="text-[40px] leading-[1.1] lg:text-[64px] font-bold">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="text-gray-600 text-base lg:text-lg max-w-lg">
                Browse through our diverse range of meticulously crafted garments, designed
                to bring out your individuality and cater to your sense of style.
              </p>
              <Button>Shop Now</Button>

              {/* Stats Section */}
              <div className="pt-8">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="lg:text-center">
                    <div className="text-3xl font-bold mb-1">200+</div>
                    <div className="text-sm text-gray-600">International Brands</div>
                  </div>
                  <div className="lg:text-center">
                    <div className="text-3xl font-bold mb-1">2,000+</div>
                    <div className="text-sm text-gray-600">High-Quality Products</div>
                  </div>
                  <div className="col-span-2 lg:col-span-1 text-center">
                    <div className="text-3xl font-bold mb-1">30,000+</div>
                    <div className="text-sm text-gray-600">Happy Customers</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <Image
                src="/hero.png"
                alt="Fashion Models"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Brand Logos */}
        <div className="mt-16 bg-black py-8 lg:py-12 -mx-4">
          <div className="px-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 items-center justify-items-center">
              <div className="text-white text-2xl font-serif">VERSACE</div>
              <div className="text-white text-2xl">ZARA</div>
              <div className="text-white text-2xl font-serif">GUCCI</div>
              <div className="text-white text-2xl font-serif">PRADA</div>
              <div className="text-white text-2xl col-span-2 lg:col-span-1">Calvin Klein</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}