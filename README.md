# @richmd/react

React component for [Richmd](https://github.com/richmd/core) - a tool for creating rich content with Markdown.

## Installation

```bash
# Using npm
npm install @richmd/react

# Using yarn
yarn add @richmd/react

# Using pnpm
pnpm add @richmd/react
```

## Usage with Next.js (App Router)

### 1. Import CSS in your root layout

First, import the required CSS in your root layout file (`app/layout.tsx`):

```tsx
import "@richmd/react/dist/richmd.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

### 2. Use the Richmd component in your pages or components

Since the Richmd component uses client-side features, you need to use the "use client" directive when using it in your pages or components:

```tsx
"use client";

import { Richmd } from "@richmd/react";

export default function MyPage() {
  const markdownText = `# Hello, Richmd!

This is a **bold text** and *italic text*.

## Features
- Rich markdown support
- Easy to use
- Customizable

\`\`\`js
// Code block example
const hello = "world";
console.log(hello);
\`\`\`

> Blockquote example

| Table | Example |
|-------|---------|
| Cell 1 | Cell 2 |
| Cell 3 | Cell 4 |
`;

  return (
    <div className="container">
      <Richmd text={markdownText} className="markdown-content" />
    </div>
  );
}
```

### 3. Create a markdown editor (optional)

You can create a simple markdown editor with live preview:

```tsx
"use client";

import { useState } from "react";
import { Richmd } from "@richmd/react";

export default function MarkdownEditor() {
  const [text, setMarkdown] = useState('# Start typing here...');

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="w-full md:w-1/2">
        <textarea 
          className="w-full h-[500px] p-4 border rounded"
          value={text}
          onChange={(e) => setMarkdown(e.target.value)}
        />
      </div>
      <div className="w-full md:w-1/2 border rounded p-4">
        <Richmd text={text} className="prose" />
      </div>
    </div>
  );
}
```

## Component API

The `Richmd` component accepts the following props:

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `text` | string | Yes | The markdown text to render |
| `id` | string | No | HTML id attribute for the container div |
| `className` | string | No | CSS class name for the container div |

## Supported Markdown Features

Richmd supports a wide range of markdown features:

- Basic formatting (bold, italic, strikethrough)
- Headings (h1-h6)
- Lists (ordered and unordered)
- Checkbox lists
- Code blocks with syntax highlighting
- Blockquotes
- Tables
- Horizontal rules
- Links and images
- TeX syntax (using [KaTeX](https://katex.org/))
- Color inline blocks
- Dropdown details
- Video (HTML5 video tag)
- Custom HTML tags

For detailed syntax documentation, refer to the [Richmd Markdown Syntax Documentation](https://github.com/richmd/core/blob/main/docs/md-syntax.md).

## License

MIT
