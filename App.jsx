import React, { useState } from 'react';
import { Sidebar, MessageList, DeepBookWindow, ComposeMail } from './components';

export default function AuraCommandDesk() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to Syndicate Dark
  const [activeWindow, setActiveWindow] = useState(null); // Controls pop-ups

  return (
    <div className={isDarkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-gray-50 text-gray-900'}>
      <div className="flex h-screen overflow-hidden">
        
        {/* Left: Gmail-style Sidebar */}
        <Sidebar setWindow={setActiveWindow} />

        {/* Center: The Message/Asset Feed */}
        <main className="flex-1 border-x border-slate-800 overflow-y-auto">
          <header className="p-4 border-b border-slate-800 flex justify-between items-center">
            <h1 className="text-xl font-bold">Sovereign Inbox</h1>
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 bg-slate-800 rounded-full">
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </header>
          <MessageList />
        </main>

        {/* POP-OPEN WINDOWS (Floating Modals) */}
        {activeWindow === 'trading' && (
          <DeepBookWindow close={() => setActiveWindow(null)} />
        )}
        {activeWindow === 'compose' && (
          <ComposeMail close={() => setActiveWindow(null)} />
        )}

      </div>
    </div>
  );
}
