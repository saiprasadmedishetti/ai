type SearchProps = {
  name: string;
  placeholder: string;
};

export default function Search({ name, placeholder }: SearchProps) {
  return (
    <div className="flex w-full flex-col gap-1.5 rounded-[26px] p-1.5 transition-colors contain-inline-size bg-[#2f2f2f]">
      <div className="flex items-end gap-1.5 pl-4 md:gap-2">
        <div className="flex min-w-0 flex-1 flex-col">
          <div className=" text-primary max-h-[25dvh] max-h-52 overflow-auto default-browser">
            <input
              className="block h-10 w-full resize-none border-0 bg-transparent px-0 py-2 text-primary placeholder:text-token-text-secondary shadow-none outline-0"
              autoFocus={true}
              placeholder={placeholder}
              name={name}
              autoComplete="off"
            />
          </div>
        </div>
        <span className="" data-state="closed">
          <button
            disabled={false}
            aria-label="Send prompt"
            data-testid="send-button"
            className="mb-1 me-1 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:outline-black disabled:text-[#f4f4f4] disabled:hover:opacity-100 dark:bg-[#4f4f4f] dark:text-[#828282] dark:focus-visible:outline-white disabled:dark:bg-token-text-quaternary dark:disabled:text-token-main-surface-secondary disabled:bg-[#D7D7D7]"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon-2xl"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.1918 8.90615C15.6381 8.45983 16.3618 8.45983 16.8081 8.90615L21.9509 14.049C22.3972 14.4953 22.3972 15.2189 21.9509 15.6652C21.5046 16.1116 20.781 16.1116 20.3347 15.6652L17.1428 12.4734V22.2857C17.1428 22.9169 16.6311 23.4286 15.9999 23.4286C15.3688 23.4286 14.8571 22.9169 14.8571 22.2857V12.4734L11.6652 15.6652C11.2189 16.1116 10.4953 16.1116 10.049 15.6652C9.60265 15.2189 9.60265 14.4953 10.049 14.049L15.1918 8.90615Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </span>
      </div>
    </div>
  );
}
