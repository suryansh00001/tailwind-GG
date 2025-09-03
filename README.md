# 🌐 Tailwind-GG

An interactive and beautifully designed **CSS Grid Generator** powered by **Tailwind CSS** and modern UI patterns.  
Easily create responsive and stunning grid layouts visually with live preview and copy-ready code.

---

## ✨ Features

- 🎨 **Modern Aesthetic** – Sleek glassmorphism + gradient UI with smooth shadows and animations  
- 🖥️ **Live Grid Preview** – Adjust rows, columns, and gaps interactively  
- 📱 **Responsive by Design** – Works across all screen sizes  
- 📋 **Copy & Paste Ready** – Export **HTML, CSS, or Tailwind** code instantly  
- ⚡ **Tailwind Integration** – Utility-first class generation for production-ready code  

---
## 📁 Project Structure

```
tailwind-GG/
├── src/
│   ├── components/
│   │   ├── GridPreview.jsx       # Live preview of the grid
│   │   ├── SettingsPanel.jsx     # Controls for rows, cols, gaps, etc.
│   │   ├── CodeOutput.jsx        # Tabs for HTML / CSS / Tailwind code
│   │   └── Header.jsx            # Title + theme
│   ├── utils/
│   │   ├── generateHTML.js
│   │   ├── generateCSS.js
│   │   └── generateTailwind.js
│   ├── App.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/suryansh00001/tailwind-GG.git
cd tailwind-GG
```

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## 📜 License

This project is licensed under the **MIT License** – see the [LICENSE](./LICENSE) file for details.

---

## 📝 How to Use

### 1. Set Grid Size
- Enter the number of **columns** and **rows** you want.    

### 2. Generate Grid
- The grid will appear with clickable cells.  

### 3. Merging Cells
- **Click once** on a cell to select it.  
- **Click another cell** to merge it with the first one.  
- The merged area will automatically adjust to span multiple rows/columns.  

### 4. Unmerging / Resetting
- To undo, simply clear the grid and start over.  

### 5. Get the CSS Code
- Once you’re happy with the layout, copy the generated **CSS/Tailwind Grid code**.  
- Paste it into your project and style your divs.  


---

🔥 With **tailwind-GG**, building responsive CSS Grid layouts is now visual, fast, and fun!
