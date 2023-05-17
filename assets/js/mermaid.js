import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@{{ site.Params.mermaid.version | default 10 }}/dist/mermaid.esm.min.mjs';
mermaid.initialize({ startOnLoad: true, 'theme': '{{ $.Params.mermaid.theme | default "base" }}' });
