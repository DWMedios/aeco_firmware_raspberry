const { SerialPort } = require('serialport')

const findArduinoPort = async () => {
  try {
	  const ports = await SerialPort.list()
	  console.log('Puertos encontrados:', ports)
	  for (const port of ports) {
		  if (port.manufacturer && port.manufacturer.includes('Arduino')) {
        return '/dev/ttyACM0'
      	}
	  }
	  return '/dev/ttyACM0'
  } catch (error) {
	  console.error('Error al listar los puertos seriales:', error?.message)
	  return null
  }
}

module.exports = {
	  findArduinoPort,
}