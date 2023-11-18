import { today } from "./Footer.astro";

<Fragment>
  <footer id="footer" class="text-center bg-zinc-900 text-slate-300">
    &copy; {today.getFullYear()} Nealle Page. All rights reserved.
    <div class="grid justify-center gap-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center">
        <a
          href="https://linkedin.com/in/neallepage"
          target="_blank"
          class="hover:text-slate-500"
        >
          <span class="sr-only">Connect on LinkedIn</span>
          <div class="grid place-content-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"></path>
            </svg>
          </div>
          <div class="grid">
            <span class="">Connect on LinkedIn</span>
          </div>
        </a>
      </div>
      <a
        href="mailto:hello@nealle.page"
        target="_blank"
        class="hover:text-slate-500"
      >
        <span class="sr-only">Email Nealle</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M20.5 4H3.5A2.5 2.5 0 0 0 1 6.5v11A2.5 2.5 0 0 0 3.5 20h17a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 20.5 4m0 2v1.5l-8.5 5-8.5-5V6.5h17m0 11h-17V9.44l8.5 5 8.5-5V17Z"
          ></path>
        </svg>
        <span class="">Email Nealle</span>
      </a>
      <style>{`
      footer {
        padding: 2em 1em 6em 1em;
      }
      .social-links {
        justify-content: center;
        gap: 1em;
        margin-top: 1em;
      }
    `}</style>
    </div>
  </footer>
</Fragment>;
