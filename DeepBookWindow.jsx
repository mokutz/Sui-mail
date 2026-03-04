import React, { useState } from 'react';

export default function DeepBookWindow({ close }) {
  const [amount, setAmount] = useState('');
  const [orderType, setOrderType] = useState('Limit'); // Limit for zero slippage

  const handleTrade = () => {
    // This is where IronClaw and DeepBook V3 SDK integrate
    console.log(`Executing ${orderType} order for ${amount} SUI...`);
    // Logic: check YubiKey -> sign PTB -> broadcast to Sui
    close();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-slate-900 border border-cyan-500/30 w-96 rounded-lg shadow-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-cyan-400 font-mono font-bold">DEEPBOOK_V3_TERMINAL</h2>
          <button onClick={close} className="text-slate-400 hover:text-white">✕</button>
        </div>

        <div className="space-y-4">
          <div className="flex gap-2">
            <button className="flex-1 bg-green-600/20 text-green-400 py-2 rounded border border-green-600/40">BUY</button>
            <button className="flex-1 bg-red-600/20 text-red-400 py-2 rounded border border-red-600/40">SELL</button>
          </div>

          <input 
            type="number" 
            placeholder="Amount (SUI)" 
            className="w-full bg-slate-800 border border-slate-700 p-3 rounded text-white focus:outline-none focus:border-cyan-500"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <div className="bg-slate-800/50 p-3 rounded text-xs font-mono text-slate-400">
            <p>ESTIMATED_GAS: ~0.002 SUI</p>
            <p>LIQUIDITY: DeepBook_V3_Base_Pool</p>
          </div>

          <button 
            onClick={handleTrade}
            className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 rounded shadow-lg transition-all"
          >
            CONFIRM_EXECUTION
          </button>
        </div>
      </div>
    </div>
  );
}
