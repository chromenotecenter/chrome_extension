document.addEventListener("mouseup", e => {
    if (document.getSelection().toString().length) {
        let selection = document.getSelection().toString();
        createPopup(e);
    }
    else {
        deleteIcon();
    }
})

function createPopup(e) {
    var hasicon = document.getElementById("iconid")
    if (hasicon) {
        console.log('has it')
    }
    else {
        let x = e.pageX
        let y = e.pageY
        var icon = document.createElement("div");
        icon.setAttribute("id", "iconid");
        var head = document.getElementsByTagName('head')[0]
        var style = document.createElement("style")
        style.innerHTML = `        #iconid {
        display: flex;
        width: 50px;
        height: 25px;
        border-radius: 10px;
        }

        #iconid>div {
            flex: auto;
        }

        #left {
            background-color: lightgrey;
            width: 22px;
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;

        }

        #middle {
            background-color: brown;
            width: 40px;
        }

        #right {
            background-color: lightgrey;
            width: 9px;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
        }

        .xxrx{
            max-width: 18px;
            max-height: 18px;
            padding-top: 5px;
            margin-left: auto;
            margin-right: auto;
            display: block;
        }`
        head.appendChild(style)
        icon.innerHTML = `
        <div id="left">
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="save" class="xxrx" role="img"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor"
                    d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM272 80v80H144V80h128zm122 352H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h42v104c0 13.255 10.745 24 24 24h176c13.255 0 24-10.745 24-24V83.882l78.243 78.243a6 6 0 0 1 1.757 4.243V426a6 6 0 0 1-6 6zM224 232c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88zm0 128c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z">
                </path>
            </svg>
        </div>
        <div id="right">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-v" class="xxrx" role="img"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                <path fill="currentColor"
                    d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z">
                </path>
            </svg>
        </div>
        `
        document.body.appendChild(icon);
        icon.style.position = "absolute";
        icon.style.top = (y - 30) + "px";
        icon.style.left = (x - 50) + "px";
    }
}

function deleteIcon() {
    var hasicon = document.getElementById("iconid")
    if (hasicon) {
        hasicon.remove();
    }
}
