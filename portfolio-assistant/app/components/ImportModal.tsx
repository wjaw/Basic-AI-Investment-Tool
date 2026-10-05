"use client";

interface ImportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ImportModal({
  isOpen,
  onClose,
}: ImportModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl dark:bg-zinc-900"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-semibold">Import Portfolio</h2>

            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Upload your existing portfolio to get started.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-2xl leading-none text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* File Upload */}
        <div className="mt-6">
          <label
            htmlFor="portfolio-file"
            className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-zinc-300 p-8 text-center transition hover:border-zinc-500 dark:border-zinc-700 dark:hover:border-zinc-500"
          >
            <span className="text-sm font-medium">
              Choose a portfolio file
            </span>

            <span className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
              JSON, PDF, or another supported format
            </span>

            <input
              id="portfolio-file"
              type="file"
              className="hidden"
              accept=".json,.pdf"
            />
          </label>
        </div>

        {/* Modal Actions */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full px-4 py-2 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            Cancel
          </button>

          <button
            type="button"
            className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          >
            Import
          </button>
        </div>
      </div>
    </div>
  );
}