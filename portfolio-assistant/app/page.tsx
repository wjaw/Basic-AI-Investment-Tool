"use client";

import Link from "next/link";
import { useState } from "react";
import ImportModal from "./components/ImportModal";


export default function Home() {
  const [isImportOpen, setIsImportOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      {/* Header */}
      <header className="w-full px-8 py-6">
        <h1 className="text-2xl font-bold">Portfolio Assistant</h1>
      </header>

      {/* Main Buttons */}
      <main className="flex flex-1 items-center justify-center">
        <div className="flex flex-col gap-6 text-base font-medium sm:flex-row">
          {/* New Portfolio Redirect */}
          <Link
            href={"/new-portfolio"}
            className="flex h-40 w-64 flex-col items-center justify-center rounded-2xl border border-zinc-200 bi-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
          >
            <span className="text-lg font-semibold">New Portfolio</span>
            <span className="mt-2 text-center text-sm text-zinc-500">
              Create a new portfolio from scratch
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setIsImportOpen(true)}
            className="flex h-40 w-64 flex-col items-center justify-center rounded-2xl border border-zinc-200 bi-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              <span className="text-lg font-semibold">New Portfolio</span>
              <span className="mt-2 text-center text-sm text-zinc-500">
                Import an exsisting portfolio
              </span>
          </button>
        </div>
      </main>

      {/* Import Modal */}
      <ImportModal
        isOpen={isImportOpen}
        onClose={() => setIsImportOpen(false)}
      />
    </div>
  );
}
