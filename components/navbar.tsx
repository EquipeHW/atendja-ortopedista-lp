"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X, MessageCircle } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              {/* Placeholder for logo - replace with actual logo */}
              <div className="h-10 w-32 bg-primary flex items-center justify-center text-white font-bold rounded">
                LOGO
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#tratamentos" className="text-dark hover:text-primary font-medium">
              Tratamentos
            </Link>
            <Link href="#sintomas" className="text-dark hover:text-primary font-medium">
              Sintomas
            </Link>
            <Link href="#diferenciais" className="text-dark hover:text-primary font-medium">
              Diferenciais
            </Link>
            <Link href="#depoimentos" className="text-dark hover:text-primary font-medium">
              Depoimentos
            </Link>
            <Link href="#faq" className="text-dark hover:text-primary font-medium">
              FAQ
            </Link>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-primary" />
              <span className="font-semibold">(75) 3026-8494</span>
            </div>
            <Button className="bg-accent hover:bg-accent/90 text-white">
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-dark hover:text-primary"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#tratamentos"
                className="text-dark hover:text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Tratamentos
              </Link>
              <Link
                href="#sintomas"
                className="text-dark hover:text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sintomas
              </Link>
              <Link
                href="#diferenciais"
                className="text-dark hover:text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Diferenciais
              </Link>
              <Link
                href="#depoimentos"
                className="text-dark hover:text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Depoimentos
              </Link>
              <Link
                href="#faq"
                className="text-dark hover:text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <div className="flex items-center space-x-2 pt-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="font-semibold">(75) 3026-8494</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
