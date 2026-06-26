/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="flex h-screen w-full bg-slate-50 font-sans text-slate-900 overflow-hidden">
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col shrink-0">
        <div className="p-6 border-b border-slate-800">
          <div className="text-2xl font-bold text-white tracking-tighter">
            PASAL<span className="text-orange-500">.</span>
          </div>
          <div className="text-[10px] text-slate-500 font-mono mt-1">v2.4.0-STABLE (NP-PROD)</div>
        </div>
        <nav className="flex-1 py-6 space-y-1">
          <div className="px-6 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Architect Overview
          </div>
          <a
            href="#"
            className="flex items-center px-6 py-3 bg-slate-800 text-white border-r-4 border-orange-500"
          >
            <span className="w-5 h-5 mr-3 opacity-80">⊞</span> System Health
          </a>
          <a
            href="#"
            className="flex items-center px-6 py-3 hover:bg-slate-800 hover:text-white transition-colors"
          >
            <span className="w-5 h-5 mr-3 opacity-80">⇶</span> Order Splitting
          </a>
          <a
            href="#"
            className="flex items-center px-6 py-3 hover:bg-slate-800 hover:text-white transition-colors"
          >
            <span className="w-5 h-5 mr-3 opacity-80">💳</span> Payout Engine (NPR)
          </a>
          <a
            href="#"
            className="flex items-center px-6 py-3 hover:bg-slate-800 hover:text-white transition-colors"
          >
            <span className="w-5 h-5 mr-3 opacity-80">🔌</span> Integrations
          </a>
        </nav>
        <div className="p-6 bg-slate-950/50">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs">
              AS
            </div>
            <div>
              <div className="text-sm font-medium text-white">Arch. Sharma</div>
              <div className="text-[10px] text-emerald-400 font-mono">MASTER_DB_READ</div>
            </div>
          </div>
          <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-orange-500 w-[84%]"></div>
          </div>
          <div className="text-[10px] mt-2 flex justify-between">
            <span>Cluster Load</span>
            <span>84%</span>
          </div>
        </div>
      </aside>
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-4">
            <h1 className="text-lg font-semibold">Marketplace Control Plane</h1>
            <span className="px-2 py-1 bg-slate-100 rounded text-[10px] font-mono text-slate-600 border border-slate-200 uppercase tracking-tighter">
              Shard-1-KTM
            </span>
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center text-emerald-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span> eSewa v2: UP
            </div>
            <div className="flex items-center text-emerald-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span> Khalti: UP
            </div>
            <div className="flex items-center text-orange-500">
              <span className="w-2 h-2 rounded-full bg-orange-400 mr-2"></span> Upaya API: 12ms
            </div>
          </div>
        </header>
        <div className="flex-1 p-8 grid grid-cols-12 grid-rows-12 gap-6 overflow-auto">
          <section className="col-span-8 row-span-7 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col min-h-0">
            <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Live Order Multi-Vendor Routing
              </h2>
              <button className="text-[10px] font-mono bg-white border border-slate-200 px-2 py-1 rounded shadow-sm hover:bg-slate-50 cursor-pointer">
                RE-ROUTE ALL
              </button>
            </div>
            <div className="flex-1 overflow-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50 text-[10px] text-slate-500 uppercase font-mono sticky top-0">
                  <tr className="border-b border-slate-100">
                    <th className="px-6 py-3">Parent UID</th>
                    <th className="px-6 py-3">Vendor Split</th>
                    <th className="px-6 py-3">Logistics Hub</th>
                    <th className="px-6 py-3">Payment Method</th>
                    <th className="px-6 py-3">Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-mono">ORD-9821-XP</td>
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium">KTM Gadgets</div>
                        <div className="text-[10px] text-slate-400">NP-VEN-001</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full font-semibold">
                        Pathao NP
                      </span>
                    </td>
                    <td className="px-6 py-4">eSewa (ePay v2)</td>
                    <td className="px-6 py-4 font-semibold text-slate-700">Rs. 12,450</td>
                  </tr>
                  <tr className="hover:bg-slate-50 bg-orange-50/20">
                    <td className="px-6 py-4 font-mono">ORD-9821-XP</td>
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium">Patan Crafts</div>
                        <div className="text-[10px] text-slate-400">NP-VEN-042</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full font-semibold">
                        Upaya Cargo
                      </span>
                    </td>
                    <td className="px-6 py-4">eSewa (ePay v2)</td>
                    <td className="px-6 py-4 font-semibold text-slate-700">Rs. 3,200</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-mono">ORD-9833-ZT</td>
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium">Everest Gear</div>
                        <div className="text-[10px] text-slate-400">NP-VEN-991</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full font-semibold">
                        Pathao NP
                      </span>
                    </td>
                    <td className="px-6 py-4">Khalti Pay</td>
                    <td className="px-6 py-4 font-semibold text-slate-700">Rs. 45,900</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="col-span-4 row-span-7 bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
              Regional Financials (NPR)
            </h2>
            <div className="space-y-6 flex-1">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                <div className="text-[10px] text-slate-500 uppercase">Gross Merch. Value (Daily)</div>
                <div className="text-2xl font-bold tracking-tight">Rs. 1,420,500.25</div>
                <div className="text-[10px] text-emerald-500 mt-1">+12.4% vs Yesterday</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-slate-100 p-3 rounded-lg">
                  {' '}
                  <div className="text-[10px] text-slate-500">eSewa Pool</div>
                  <div className="text-sm font-semibold">Rs. 892K</div>
                </div>
                <div className="border border-slate-100 p-3 rounded-lg">
                  {' '}
                  <div className="text-[10px] text-slate-500">Khalti Pool</div>
                  <div className="text-sm font-semibold">Rs. 412K</div>
                </div>
              </div>
              <div className="flex-1 mt-6">
                <div className="text-[10px] font-bold text-slate-400 uppercase mb-3">
                  Vendor Payout Queue
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="text-slate-600">Kathmandu Gadgets</span>
                      <span className="font-mono">Rs. 44,200</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full">
                      <div className="h-full bg-slate-300 w-[60%] rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="text-slate-600">Patan Crafts</span>
                      <span className="font-mono">Rs. 18,120</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full">
                      <div className="h-full bg-slate-300 w-[20%] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="col-span-12 row-span-5 bg-slate-900 rounded-xl shadow-xl p-6 flex flex-col text-slate-400 font-mono text-[11px] min-h-0">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                <span className="text-white font-bold">Integration Webhook Stream</span>
              </div>
              <span className="text-[10px] opacity-50">FILTER: [payment_complete, shipping_init]</span>
            </div>
            <div className="flex-1 bg-black/40 rounded p-4 overflow-y-auto border border-slate-800 space-y-2">
              <div className="flex space-x-2">
                <span className="text-emerald-500">[2024-05-21 14:12:01]</span>
                <span className="text-blue-400 italic w-16">INFO</span>
                <span>- eSewa HMAC-SHA256 Sig Verified for payload_id=e772b-x1</span>
              </div>
              <div className="flex space-x-2">
                <span className="text-emerald-500">[2024-05-21 14:12:05]</span>
                <span className="text-purple-400 italic w-16">PROCESS</span>
                <span>- SplitOrder::Executor: Parent ORD-9821-XP mapped to 2 children.</span>
              </div>
              <div className="flex space-x-2">
                <span className="text-emerald-500">[2024-05-21 14:12:08]</span>
                <span className="text-blue-400 italic w-16">INFO</span>
                <span>- Khalti callback received for txn_uuid=6c22-b91. Status: COMPLETED.</span>
              </div>
              <div className="flex space-x-2">
                <span className="text-emerald-500">[2024-05-21 14:12:12]</span>
                <span className="text-orange-400 italic w-16">WEBHOOK</span>
                <span>
                  - Upaya API: Creating booking job for Vendor: KTM Gadgets (Lat: 27.7, Long: 85.3)
                </span>
              </div>
              <div className="flex space-x-2 opacity-50">
                <span className="text-emerald-500">[2024-05-21 14:12:15]</span>
                <span className="text-slate-400 italic w-16">DEBUG</span>
                <span>- Pathao RateLimiter: 45/1000 requests used in current window.</span>
              </div>
            </div>
            <div className="mt-4 flex space-x-6">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div> Database Latency: 4ms
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div> Redis Cache: 98.4% Hit
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div> Shipping Webhooks:
                Processing
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
