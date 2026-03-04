import React, { useState } from 'react';

export default function ComposeMail({ close }) {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSend = () => {
    // 1. Encrypt body client-side using Seal/Sui primitives
    // 2. Upload to Walrus as an encrypted Blob
    // 3. Create a Sui Object representing the "Mail"
    console.log(`Sending encrypted asset to ${recipient}...`);
    close();
  };

  return (
    <div className="fixed bottom-0 right-10 w-[500px] bg-slate-900 border-t border-x border-cyan-500/40 rounded-t-xl shadow-2xl z-50">
      <div className="bg-slate-800 p-3 flex justify-between items-center rounded-t-xl">
        <span className="text-sm font-bold text-cyan-400 font-mono">NEW_MISSION_BRIEF</span>
        <button onClick={close} className="text-slate-400 hover:text-white">✕</button>
      </div>

      <div className="p-4 space-y-2">
        <input 
          placeholder="Recipient (e.g. name.sui)" 
          className="w-full bg-transparent border-b border-slate-700 py-2 focus:outline-none focus:border-cyan-500 text-sm"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
        <input 
          placeholder="Subject" 
          className="w-full bg-transparent border-b border-slate-700 py-2 focus:outline-none focus:border-cyan-500 text-sm"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea 
          placeholder="Enter encrypted message..." 
          className="w-full h-64 bg-transparent mt-4 resize-none focus:outline-none text-sm leading-relaxed"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>

      <div className="p-4 border-t border-slate-800 flex justify-between items-center">
        <button 
          onClick={handleSend}
          className="bg-cyan-600 px-6 py-2 rounded-lg font-bold hover:bg-cyan-500 transition-all text-sm"
        >
          SEND_ASSET
        </button>
        <div className="flex gap-4 text-slate-500">
          <button className="hover:text-cyan-400 text-lg">📎</button>
          <button className="hover:text-cyan-400 text-lg">🔒</button>
        </div>
      </div>
    </div>
  );
}
