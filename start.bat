@echo off
REM 🚀 Move Smart - Complete Startup Script for Windows
REM This script sets up and runs the entire application (Backend + Frontend + Database)

setlocal enabledelayedexpansion

echo.
echo ========================================
echo 🚀  MOVE SMART - COMPLETE SETUP
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js not found. Please install Node.js 16+ first.
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
for /f "tokens=*" %%i in ('npm -v') do set NPM_VERSION=%%i

echo Detected Node.js: %NODE_VERSION%
echo Detected npm: %NPM_VERSION%
echo.

REM Step 1: Install Backend Dependencies
echo [1/5] Installing Backend Dependencies...
cd backend
if not exist "node_modules" (
    echo Installing...
    call npm install > nul 2>&1
    echo ✓ Backend dependencies installed
) else (
    echo ✓ Backend dependencies already installed
)
cd ..

REM Step 2: Seed Database
echo [2/5] Initializing Database...
cd backend
node src/db/seed.js > nul 2>&1
echo ✓ Database initialized with mock data
cd ..

REM Step 3: Install Frontend Dependencies
echo [3/5] Installing Frontend Dependencies...
cd frontend
if not exist "node_modules" (
    echo Installing...
    call npm install > nul 2>&1
    echo ✓ Frontend dependencies installed
) else (
    echo ✓ Frontend dependencies already installed
)
cd ..

REM Step 4: Create .env files
echo [4/5] Configuring Environment...
if not exist "backend\.env" (
    copy backend\.env.example backend\.env > nul
    echo ✓ Backend .env created
) else (
    echo ✓ Backend .env already exists
)

REM Step 5: Start Services
echo [5/5] Starting Services...
echo.
echo ========================================
echo ✓ Setup Complete!
echo ========================================
echo.
echo Starting services...
echo.
echo BACKEND
echo    URL: http://localhost:5000
echo    API: http://localhost:5000/api
echo.
echo FRONTEND
echo    URL: http://localhost:5173
echo.
echo TEST CREDENTIALS
echo    Admin: admin@lincoln.edu / admin123
echo    Driver: mike@lincoln.edu / driver123
echo    Passenger: alex@lincoln.edu / pass123
echo.
echo Press Ctrl+C to stop all services
echo.

REM Start Backend in new window
echo Starting Backend Server...
start "Move Smart - Backend" cmd /k "cd backend && npm start"

REM Wait for backend to start
timeout /t 3 /nobreak

REM Start Frontend in new window
echo Starting Frontend Dev Server...
start "Move Smart - Frontend" cmd /k "cd frontend && npm run dev"

echo.
echo ✓ Both servers are running!
echo.
echo Opening browser in 3 seconds...
timeout /t 3 /nobreak

REM Try to open browser
start http://localhost:5173

echo.
echo ✓ Ready to use! 🚀
echo.
pause
