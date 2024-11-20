import { useState, useEffect } from 'react'
import useWebSocket from '../hooks/useWebSocket'

interface UseWebSocketHookReturn {
  messages: string[]
  sendMessageHandler: (message: string) => void
}

const SendMessage = (): UseWebSocketHookReturn => {
  const wsUrl = import.meta.env.VITE_WS_URL
  const { message, sendMessage } = useWebSocket(wsUrl)
  const [messages, setMessages] = useState<string[]>([])
  
  // Función para enviar mensajes
  const sendMessageHandler = (msg: string) => {
    console.log("🚀 ~ sendMessageHandler ~ msg:", msg)
    if (msg.trim()) {
      setMessages((prev) => [...prev, `Mensaje enviado: ${msg}`])
      sendMessage(msg)
    }
  }

  // Escucha mensajes entrantes y actualiza la lista
  useEffect(() => {
    if (message) {
      console.log("🚀 ~ useEffect ~ message:", message)
      setMessages((prev) => [...prev, `Mensaje recibido: ${message}`])
    }
  }, [message])

  return { messages, sendMessageHandler }
}

export default SendMessage
