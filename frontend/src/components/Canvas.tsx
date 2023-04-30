import { useState, useRef, useEffect } from "react";


export default function Canvas() {
  const [color, setColor] = useState("#FF0000")
  const [penSize, setPenSize] = useState(4)
  const colorRef = useRef("#FF0000")
  const penSizeRef = useRef(4)
  const mouseDown = useRef(false)
  const drawTime = useRef(0)
  const canvas = useRef<HTMLCanvasElement>(null)
  const lastMouse = useRef<{ x: number, y: number } | null>(null)
  const drawLine = useRef<{ x: number, y: number }[]>([])

  const colors = [
    '#FF0000', '#FF9900', '#FFFF00', '#00FF00',
    '#00FFFF', '#0000FF', '#FF00FF', '#555555',
    '#FFFFFF'
  ]
  const penSizes = [
    4, 8, 12, 16, 20
  ]

  useEffect(() => {
    if (canvas.current == null) return

    canvas.current.width = 800
    canvas.current.height = 400

    canvas.current.onmousedown = () => {
      // setMouseDown(true)
      mouseDown.current = true;
    }
    canvas.current.onmouseup = canvas.current.onmouseleave = () => {
      // setMouseDown(false)
      mouseDown.current = false
      lastMouse.current = null

      // console.log("Drew...", drawLine.current)
      drawLine.current = []
    }
    canvas.current.onmousemove = (ev: MouseEvent) => {
      const ctx = canvas.current?.getContext("2d")
      if (!ctx || !canvas.current || !mouseDown.current || Date.now() - drawTime.current < 10) return

      const [x, y] = [ev.offsetX, ev.offsetY]

      drawLine.current.push({ x, y })

      if (lastMouse.current != null) {
        ctx.strokeStyle = colorRef.current
        ctx.fillStyle = colorRef.current
        ctx.lineWidth = penSizeRef.current

        ctx.beginPath()
        ctx.moveTo(lastMouse.current.x, lastMouse.current.y)
        ctx.lineTo(x, y)
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(x, y, penSizeRef.current / 2, Math.PI * 2, 0)
        ctx.fill()

        drawTime.current = Date.now()
      }

      lastMouse.current = { x, y }
    }
  }, []);

  useEffect(() => {
    colorRef.current = color
    penSizeRef.current = penSize
  }, [color, penSize])

  return (
    <main id="Canvas">
      <div id="settings">
        <div id="colors">
          {colors.map((c, i) => (
            <div key={i} style={{ backgroundColor: c }} onClick={() => setColor(c)} className={`${color == c ? "selected" : ""} color`}></div>
          ))}
        </div>
        <div id="pen-dropdown">
          <i id="dropdown-btn" className="btn btn-primary dropdown-toggle bi bi-brush-fill" data-bs-toggle="dropdown" aria-expanded="false" />
          <ul className="dropdown-menu">
            {penSizes.map((size, i) => (
              <li key={i} onClick={() => setPenSize(size)} className="dropdown-item pen-size">
                <div style={{
                  width: Math.floor(size / 20 * 100 - 10) + "%",
                  height: Math.floor(size / 20 * 100 - 10) + "%",
                  backgroundColor: penSize == size ? color : undefined,
                  border: [...color].reduce((p, c) => c == "F" ? p + 1 : p, 0) >= 4 ? "1px solid black" : undefined,
                }} className="inner"></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <canvas ref={canvas}></canvas>
    </main >
  )
}