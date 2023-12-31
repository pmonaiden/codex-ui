"use client";

import Home from "@/components/home";
import CdxLitTabs from "./CdxLitTabs";
import BunniLPTabs from "./BunniLPTabs";

export default function Stake() {
  return (
    <Home>
      <div className="m-4">
        <div>
          <div className="flex justify-between mb-6">
            <div>
              <h1 className="font-bold text-2xl">Farming</h1>
              <span className="text-gray-400">
                Bunni Liquidity providers can farm relavant tokens
              </span>
            </div>
          </div>
        </div>
        <CdxLitTabs />
      </div>
      <BunniLPTabs />
    </Home>
  );
}
