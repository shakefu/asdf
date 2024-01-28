import{_ as e,o as a,c as o,Q as t}from"./chunks/framework.0e8ae64e.js";const f=JSON.parse('{"title":"Introduction","description":"","frontmatter":{},"headers":[],"relativePath":"guide/introduction.md","filePath":"guide/introduction.md","lastUpdated":1629230537000}'),n={name:"guide/introduction.md"},r=t('<h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h1><p><code>asdf</code> is a tool version manager. All tool version definitions are contained within one file (<code>.tool-versions</code>) which you can check in to your project&#39;s Git repository to share with your team, ensuring everyone is using the <strong>exact</strong> same versions of tools.</p><p>The old way of working required multiple CLI version managers, each with their distinct API, configurations files and implementation (e.g. <code>$PATH</code> manipulation, shims, environment variables, etc...). <code>asdf</code> provides a single interface and configuration file to simplify development workflows, and can be extended to all tools and runtimes via a simple plugin interface.</p><h2 id="how-it-works" tabindex="-1">How It Works <a class="header-anchor" href="#how-it-works" aria-label="Permalink to &quot;How It Works&quot;">​</a></h2><p>Once <code>asdf</code> core is set up with your Shell configuration, plugins are installed to manage particular tools. When a tool is installed by a plugin, the executables that are installed have <a href="https://en.wikipedia.org/wiki/Shim_(computing)" target="_blank" rel="noreferrer">shims</a> created for each of them. When you try and run one of these executables, the shim is run instead, allowing <code>asdf</code> to identify which version of the tool is set in <code>.tool-versions</code> and execute that version.</p><h2 id="related-projects" tabindex="-1">Related Projects <a class="header-anchor" href="#related-projects" aria-label="Permalink to &quot;Related Projects&quot;">​</a></h2><h3 id="nvm-n-rbenv-etc" tabindex="-1">nvm / n / rbenv etc <a class="header-anchor" href="#nvm-n-rbenv-etc" aria-label="Permalink to &quot;nvm / n / rbenv etc&quot;">​</a></h3><p>Tools like <a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noreferrer">nvm</a>, <a href="https://github.com/tj/n" target="_blank" rel="noreferrer">n</a> and <a href="https://github.com/rbenv/rbenv" target="_blank" rel="noreferrer">rbenv</a> are all written as Shell scripts which create shims for the executables installed by these tools.</p><p><code>asdf</code> is very similar and was built to compete in this space of tool/runtime version management. The differentiating factor for <code>asdf</code> is its plugin system which removes the need for a manager per tool/runtime, different commands per manager and different <code>*-version</code> files in your repo.</p><h3 id="direnv" tabindex="-1">direnv <a class="header-anchor" href="#direnv" aria-label="Permalink to &quot;direnv&quot;">​</a></h3><blockquote><p>augments existing shells with a new feature that can load and unload environment variables depending on the current directory.</p></blockquote><p><code>asdf</code> does not manage Environment Variables, however there is a plugin <a href="https://github.com/asdf-community/asdf-direnv" target="_blank" rel="noreferrer"><code>asdf-direnv</code></a> to integrate direnv behaviour with <code>asdf</code>.</p><p>See <a href="https://direnv.net/" target="_blank" rel="noreferrer">direnv docs</a> for more.</p><h3 id="homebrew" tabindex="-1">Homebrew <a class="header-anchor" href="#homebrew" aria-label="Permalink to &quot;Homebrew&quot;">​</a></h3><blockquote><p>The Missing Package Manager for macOS (or Linux)</p></blockquote><p>Homebrew manages your packages and their upstream dependencies. <code>asdf</code> does not manage upstream dependencies, it is not a package manager, that burden is upon the user, though we try and keep the dependency list small.</p><p>See <a href="https://brew.sh/" target="_blank" rel="noreferrer">Homebrew docs</a> for more.</p><h3 id="nixos" tabindex="-1">NixOS <a class="header-anchor" href="#nixos" aria-label="Permalink to &quot;NixOS&quot;">​</a></h3><blockquote><p>Nix is a tool that takes a unique approach to package management and system configuration</p></blockquote><p>NixOS aims to build truly reproducible environments by managing exact versions of packages up the entire dependency tree of each tool, something <code>asdf</code> does not do. NixOS does this with its own programming language, many CLI tools and a package collection of over 60,000 packages.</p><p>Again, <code>asdf</code> does not manage upstream dependencies and is not a package manager.</p><p>See <a href="https://nixos.org/guides/how-nix-works.html" target="_blank" rel="noreferrer">NixOS docs</a> for more.</p><h2 id="why-use-asdf" tabindex="-1">Why use asdf? <a class="header-anchor" href="#why-use-asdf" aria-label="Permalink to &quot;Why use asdf?&quot;">​</a></h2><p><code>asdf</code> ensures teams are using the <strong>exact</strong> same versions of tools, with support for <strong>many</strong> tools via a plugin system, and the <em>simplicity and familiarity</em> of being a single <strong>Shell</strong> script you include in your Shell config.</p><div class="tip custom-block"><p class="custom-block-title">Note</p><p><code>asdf</code> is not intended to be a system package manager. It is a tool version manager. Just because you can create a plugin for any tool and manage its versions with <code>asdf</code>, does not mean that is the best course of action for that specific tool.</p></div>',25),i=[r];function s(d,c,l,h,u,p){return a(),o("div",null,i)}const g=e(n,[["render",s]]);export{f as __pageData,g as default};
