// Professional Layout Shell
export default function ProCommandDesk() {
  return (
    <div className="flex h-screen bg-black text-slate-200 font-sans antialiased">
      {/* Sidebar: Compressed, high-utility */}
      <nav className="w-16 border-r border-slate-800 flex flex-col items-center py-4 space-y-8 bg-slate-900/50">
        <div className="w-8 h-8 bg-cyan-500 rounded-lg shadow-[0_0_15px_rgba(6,182,212,0.5)]" /> {/* Aura Logo */}
        <button className="text-slate-500 hover:text-cyan-400">📥</button>
        <button className="text-slate-500 hover:text-cyan-400">📈</button>
        <button className="text-slate-500 hover:text-cyan-400">🛡️</button>
      </nav>

      {/* Main Work Area */}
      <main className="flex-1 flex flex-col">
        <header className="h-14 border-b border-slate-800 flex justify-between items-center px-6 bg-slate-900/20 backdrop-blur-md">
          <span className="font-mono text-xs text-slate-500">SUI_MAINNET_CONNECTED</span>
          <div className="flex items-center gap-4">
             <span className="text-sm font-bold text-cyan-400">$1,240.45 SUI</span>
             <button className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700" />
          </div>
        </header>

        {/* Dynamic Content: Gmail-style list with professional spacing */}
        <section className="flex-1 overflow-y-auto p-4 space-y-2">
           {/* MessageItem logic goes here */}
        </section>
      </main>
    </div>
  );
}
