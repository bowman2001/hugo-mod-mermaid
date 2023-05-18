# hugo-mod-mermaid
Render Mermaid diagrams in Markdown content. 

[Mermaid](https://mermaid.js.org) is a open source Javascript library by [Knut Sveidqvist](https://github.com/knsv) and many contributors. This module retrieves the library on demand from the CDN jsdelivr.com.

## Syntax

The module provides a code block render hook for the identifier `mermaid`. We can copy our Mermaid code into this Markdown block:

```md
‍```mermaid
flowchart TB
A[Fenced code] -->|render-hook| B[Tagged code]
B -->|Mermaid| C(Diagram)
‍```
```

## Configuration

We can initialize the Mermaid module globally in the file `data/hugoModMermaid.json` with all available configuration parameters.

If we want to change the configuration for a specific diagram we need to use the preamble with the same JSON syntax enclosed in `%%`. 

## Layout

For examples run `hugo server` in the folder `exampleSite`.
