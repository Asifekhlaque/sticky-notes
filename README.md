# sticky-notes
working: https://asifekhlaque.github.io/sticky-notes/
# 📝 Sticky Notes

Welcome to the Sticky Notes project! This application allows you to create, customize, and move sticky notes on your screen.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Demo
![Sticky Notes Demo](demo.gif)

## Features
- 🎨 **Create Sticky Notes**: Add new sticky notes with a single click.
- 🖍 **Color Picker**: Choose a color for the sticky note's border.
- 🖋 **Editable Content**: Write and edit text within the sticky notes.
- ✖ **Close Notes**: Remove sticky notes when they're no longer needed.
- ↔ **Draggable Notes**: Move sticky notes around the screen to organize them as you like.

## Getting Started

### Prerequisites
- Web browser (Chrome, Firefox, Safari, etc.)

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/sticky-notes.git
    ```
2. Navigate to the project directory:
    ```bash
    cd sticky-notes
    ```
3. Open `index.html` in your web browser:
    ```bash
    open index.html
    ```

## Usage
1. **Create a Sticky Note**:
    - Click the `+` button to create a new sticky note. 🆕

2. **Choose a Color**:
    - Use the color picker to select a border color for your new note. 🎨

3. **Write Notes**:
    - Click inside the note to start writing. 📝

4. **Move Notes**:
    - Click and hold a note to drag it to a new position. 🖱️

5. **Delete Notes**:
    - Click the `x` button to close and remove the note. ✖

## Customization
### HTML Structure
- The main structure is defined in `index.html`.
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sticky Notes</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <main>
            <form>
                <input type="color" id="color">
                <button type="button" id="creatBtn">+</button>
            </form>
            <div id="list"></div>
        </main>
        <script src="script.js"></script>
    </body>
    </html>
    ```

### CSS Styling
- Styles are defined in `style.css`.
    ```css
    * {
        margin: 0;
        padding: 0;
    }
    body {
        background-color: rgb(33, 33, 33);
        font-family: Poppins, sans-serif;
    }
    main {
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        background-image: repeating-linear-gradient(to right, transparent 0 50px, #fff1 50px 51px),
        repeating-linear-gradient(to bottom, transparent 0 50px, #fff1 50px 51px);
        position: relative;
    }
    form {
        background-color: #eee;
        width: max-content;
        padding: 5px;
        margin: 10px;
        border-radius: 24px;
        display: flex;
        gap: 10px;
    }
    form input, button {
        width: 30px;
        height: 30px;
        padding: 0;
        border: none;
        background-color: transparent;
        font-size: large;
        cursor: pointer;
    }
    form input::-webkit-color-swatch-wrapper {
        padding: 0;
    }
    form input::-webkit-color-swatch {
        border: none;
        border-radius: 50%;
    }
    #list textarea {
        all: unset;
        color: #ffffff;
    }
    #list .note {
        background-color: #333;
        width: max-content;
        border-top: 30px solid #ffbb00;
        border-radius: 10px;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
        padding: 10px;
        position: absolute;
        top: 60px;
        left: 50px;
    }
    #list .note span {
        position: absolute;
        bottom: 100%;
        right: 0;
        height: 30px;
        font-family: cursive;
        font-size: large;
        padding-right: 10px;
        cursor: pointer;
        color: #eee;
    }
    ```

### JavaScript Functionality
- Interactive functionalities are implemented in `script.js`.
    ```javascript
    let color = document.getElementById("color");
    let creatBtn = document.getElementById("creatBtn");
    let list = document.getElementById("list");

    creatBtn.onclick = () => {
        let newnode = document.createElement("div");
        newnode.classList.add("note");
        newnode.innerHTML = `
        <span class="close">x</span>
        <textarea placeholder="Write something..." rows="10" cols="30"></textarea>
        `;
        newnode.style.borderColor = color.value;
        list.appendChild(newnode);
    };

    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("close")) {
            e.target.parentElement.remove();
        }
    });

    let cursor = {
        x: null,
        y: null
    };
    let note = {
        dom: null,
        x: null,
        y: null
    };

    document.addEventListener("mousedown", (e) => {
        if (e.target.classList.contains("note")) {
            cursor = {
                x: e.clientX,
                y: e.clientY
            };
            note = {
                dom: e.target,
                x: e.target.getBoundingClientRect().left,
                y: e.target.getBoundingClientRect().top
            };
        }
    });

    document.addEventListener("mousemove", (e) => {
        if (note.dom == null) return;
        let currentCursor = {
            x: e.clientX,
            y: e.clientY
        };
        let distance = {
            x: currentCursor.x - cursor.x,
            y: currentCursor.y - cursor.y
        };

        note.dom.style.left = (note.x + distance.x) + "px";
        note.dom.style.top = (note.y + distance.y) + "px";
        note.dom.style.cursor = "grabbing";
    });

    document.addEventListener("mouseup", (e) => {
        if (note.dom == null) return;
        note.dom.style.cursor = "grab";
        note.dom = null;
    });
    ```

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
