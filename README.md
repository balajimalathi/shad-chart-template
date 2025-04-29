# Chart Generator with shadcn/ui + Vite

A template for generating standalone HTML charts using React, shadcn/ui, and Vite. Designed for integration with Flutter applications.

## Features

- 🚀 7+ pre-built chart types (bar, line, pie, etc.)
- 🎨 shadcn/ui for beautiful, customizable components
- 📦 Self-contained HTML output (single file per chart)
- ⚡ Optimized for Flutter WebView integration

## Prerequisites

- Node.js v18+
- npm v9+
- Git

## Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/balajimalathi/shad-chart-template.git
   cd shad-chart-template
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

## Development

### Running the dev server

```bash
npm run dev
```

When testing in development (`npm run dev`), use `index.html` like this:

```html
<body data-page="area_interactive">
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>
```

- Change the `data-page` attribute (`area_interactive`, `bar_multiple`, `pie_donut`, etc.) to test different charts during development.
- Supported variables
  - `bar_interactive`
  - `bar_multiple`
  - `area_interactive`
  - `line_interactive`
  - `pie_donut`
  - `pie_legend`
  - `radical_stacked`

### Building all charts

```bash
npm run build:all
```

### Building specific chart types

```bash
# Build just pie charts
npm run build:pieL && npm run build:pieD

# Build bar charts
npm run build:barI && npm run build:barM
```

## Chart Types

| Command        | Chart Type          | Output File               |
|----------------|---------------------|---------------------------|
| `build:pieL`   | Pie with Legend     | `dist/pie-legend.html`    |
| `build:pieD`   | Donut Chart         | `dist/pie-donut.html`     |
| `build:radi`   | Radical Stacked     | `dist/radical-stacked.html`|
| `build:line`   | Line Chart          | `dist/line-interactive.html`|
| `build:barI`   | Interactive Bar     | `dist/bar-interactive.html`|
| `build:barM`   | Multi-series Bar    | `dist/bar-multiple.html`   |
| `build:area`   | Area Chart          | `dist/area-interactive.html`|

## Integration with Flutter

1. After building, copy the HTML files from `dist/` to your Flutter project's assets:

   ```yaml
   # flutter/pubspec.yaml
   assets:
     - assets/charts/bar-interactive.html
     - assets/charts/pie-legend.html
     # Add other charts
   ```

2. Use in Flutter with `webview_flutter`:

   ```dart
   WebViewController().loadFile('assets/charts/bar-interactive.html');
   ```

## Deployment

For production builds:

```bash
npm run build:all
```

The output will be in the `dist/` folder - each chart as a self-contained HTML file.

## Troubleshooting

**Issue**: Build errors about missing dependencies  
**Fix**: Run `npm install` and verify all packages in package.json

**Issue**: Charts not rendering in Flutter  
**Fix**: Ensure you've:

1. Added files to pubspec.yaml
2. Proper asset paths in WebView
3. Built with `npm run build:all`

## License

MIT License - see LICENSE file for details.

---

**Happy charting!** 📊✨
