import { MapPin, Phone, Mail, Facebook } from 'lucide-react';
import logoImg from 'figma:asset/721e527b47461bb53ccf0f4e3ee576ae7fab6faa.png';

export function Footer() {
  return (
    <footer className="bg-[#002D72] text-white pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo - hidden, replaced with text */}
        <div className="mb-8">
          <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.1em' }}>
            <span style={{ fontSize: '1.3em' }}>S</span>TANTON <span style={{ fontSize: '1.3em' }}>U</span>NIVERSITY
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Anaheim Campus */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Anaheim (Main Campus)</h3>
            <div className="space-y-3 text-white/90">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p>888 Disneyland Dr.</p>
                  <p>Suite: 400</p>
                  <p>Anaheim, California 92802</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:714-539-6561" className="hover:text-white transition-colors">
                  714-539-6561
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@stanton.edu" className="hover:text-white transition-colors">
                  info@stanton.edu
                </a>
              </div>
            </div>
          </div>

          {/* Los Angeles Campus */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Los Angeles (Satellite Campus)</h3>
            <div className="space-y-3 text-white/90">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p>5700 Wilshire Blvd.</p>
                  <p>Suite: 120</p>
                  <p>Los Angeles, California 90036</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-white/60">(currently unavailable)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@stanton.edu" className="hover:text-white transition-colors">
                  info@stanton.edu
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/70">
            Copyright © 2026 Stanton University. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}