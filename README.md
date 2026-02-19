# Smart Watering System

## Authors
- Name: Saed Hassuna | ID: 213521099
- Name: Mohammad AlaaElden | ID: 214082893

## Project Description
Smart irrigation system based on ESP controller, sensors, MQTT and full backend server.

The system supports real-time mode switching via MQTT and provides REST API for control and monitoring.

## System Modes
1. **Weather Mode**
   - Hot days: 3 times per day, 3 hours each
   - Cold days: 2 times per day, 2 hours each

2. **Soil Moisture Mode**
   - Pump starts when soil is dry
   - Pump stops when target moisture is reached

3. **Manual Mode**
   - User can turn pump ON/OFF via UI
   - Light sensor protection with override warning

4. **Scheduled Mode**
   - Pump works according to predefined schedule
   - No dependency on sensors

## Project Structure


Watering_plant/
└── smart_watering/
├── servers # REST API + MQTT + DB
├── esp_client # ESP firmware
└── client # Web client (bonus)


## MQTT Topics
- `system/mode/set`
- `system/mode/current`
- `sensors/data`
- `pump/control`
- `pump/status`

## Server Setup
```bash
cd Watering_plant/smart_watering/servers
npm install
npm start

ESP Setup

Upload ESP firmware using Arduino IDE / PlatformIO.

Requirements Checklist

Irrigation logs

Water consumption tracking

Sensor samples saved 4 times per day

Real-time MQTT mode switching

Separate ESP and WEB routes

Light sensor protection



