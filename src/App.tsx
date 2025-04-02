import React from 'react';
import { Bell, MessageCircle, Link as LinkIcon, Laptop2, Cat } from 'lucide-react';
import { useLanguage } from './contexts/LanguageContext';
import { LanguageSelector } from './components/LanguageSelector';

function App() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#250045] text-white font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-black to-[#250045] p-4 fixed w-full top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Laptop2 className="w-8 h-8 text-purple-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
              {t('hero.title')}
            </span>
          </div>
          <div className="flex space-x-4 items-center">
            <button className="p-2 hover:bg-purple-800 rounded-full transition-all duration-300" title={t('nav.notifications')}>
              <Bell className="w-6 h-6 text-cyan-400" />
            </button>
            <button className="p-2 hover:bg-purple-800 rounded-full transition-all duration-300" title={t('nav.chat')}>
              <MessageCircle className="w-6 h-6 text-pink-400" />
            </button>
            <button className="p-2 hover:bg-purple-800 rounded-full transition-all duration-300" title={t('nav.links')}>
              <LinkIcon className="w-6 h-6 text-purple-400" />
            </button>
            <LanguageSelector />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto text-center relative">
          <div className="relative inline-block">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-600 shadow-[0_0_30px_rgba(168,85,247,0.5)] mx-auto">
              <img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop"
                alt={t('hero.title')}
                className="w-full h-full object-cover"
              />
            </div>
            <Cat className="absolute bottom-0 right-0 w-12 h-12 text-pink-400 animate-bounce" />
          </div>
          <h1 className="text-4xl font-bold mt-6 mb-2">{t('hero.title')}</h1>
          <p className="text-xl text-purple-300 mb-8">{t('hero.subtitle')}</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid gap-6 max-w-2xl mx-auto">
            <button className="w-full p-4 rounded-xl bg-gradient-to-r from-purple-900 to-purple-800 hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
              {t('services.telegram')}
            </button>
            <button className="w-full p-4 rounded-xl bg-gradient-to-r from-purple-900 to-purple-800 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-pink-500/25">
              {t('services.instagram')}
            </button>
            <button className="w-full p-4 rounded-xl bg-gradient-to-r from-purple-900 to-purple-800 hover:from-purple-600 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-green-500/25">
              {t('services.fiverr')}
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-12 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <button className="w-full p-4 rounded-xl bg-gradient-to-r from-purple-900 to-purple-800 hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-pink-500/25">
              {t('portfolio.work')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;