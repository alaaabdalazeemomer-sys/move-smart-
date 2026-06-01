#!/bin/bash

# 🚀 Move Smart - Complete Startup Script
# This script sets up and runs the entire application (Backend + Frontend + Database)

set -e

echo ""
echo "========================================"
echo "🚀  MOVE SMART - COMPLETE SETUP"
echo "========================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node.js 16+ first."
    exit 1
fi

echo -e "${BLUE}Detected Node.js: $(node -v)${NC}"
echo -e "${BLUE}Detected npm: $(npm -v)${NC}"
echo ""

# Step 1: Install Backend Dependencies
echo -e "${YELLOW}[1/5] Installing Backend Dependencies...${NC}"
cd backend
if [ ! -d "node_modules" ]; then
    npm install > /dev/null 2>&1
    echo -e "${GREEN}✓ Backend dependencies installed${NC}"
else
    echo -e "${GREEN}✓ Backend dependencies already installed${NC}"
fi
cd ..

# Step 2: Seed Database
echo -e "${YELLOW}[2/5] Initializing Database...${NC}"
cd backend
node src/db/seed.js > /dev/null 2>&1
echo -e "${GREEN}✓ Database initialized with mock data${NC}"
cd ..

# Step 3: Install Frontend Dependencies
echo -e "${YELLOW}[3/5] Installing Frontend Dependencies...${NC}"
cd frontend
if [ ! -d "node_modules" ]; then
    npm install > /dev/null 2>&1
    echo -e "${GREEN}✓ Frontend dependencies installed${NC}"
else
    echo -e "${GREEN}✓ Frontend dependencies already installed${NC}"
fi
cd ..

# Step 4: Create .env files if they don't exist
echo -e "${YELLOW}[4/5] Configuring Environment...${NC}"

if [ ! -f "backend/.env" ]; then
    cp backend/.env.example backend/.env
    echo -e "${GREEN}✓ Backend .env created${NC}"
else
    echo -e "${GREEN}✓ Backend .env already exists${NC}"
fi

# Step 5: Display startup info
echo -e "${YELLOW}[5/5] Starting Services...${NC}"
echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}✓ Setup Complete!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo -e "${BLUE}Starting services...${NC}"
echo ""
echo -e "${GREEN}📊 BACKEND${NC}"
echo -e "${GREEN}   URL: http://localhost:5000${NC}"
echo -e "${GREEN}   API: http://localhost:5000/api${NC}"
echo -e "${GREEN}   WebSocket: ws://localhost:5000${NC}"
echo ""
echo -e "${GREEN}🎨 FRONTEND${NC}"
echo -e "${GREEN}   URL: http://localhost:5173${NC}"
echo ""
echo -e "${GREEN}🧪 TEST CREDENTIALS${NC}"
echo -e "${GREEN}   Admin: admin@lincoln.edu / admin123${NC}"
echo -e "${GREEN}   Driver: mike@lincoln.edu / driver123${NC}"
echo -e "${GREEN}   Passenger: alex@lincoln.edu / pass123${NC}"
echo ""
echo -e "${BLUE}Press Ctrl+C to stop all services${NC}"
echo ""

# Function to cleanup on exit
cleanup() {
    echo ""
    echo -e "${YELLOW}Shutting down services...${NC}"
    kill %1 %2 2>/dev/null
    echo -e "${GREEN}✓ Services stopped${NC}"
    exit 0
}

trap cleanup EXIT INT TERM

# Start Backend
echo -e "${BLUE}→ Starting Backend Server...${NC}"
cd backend
npm start &
BACKEND_PID=$!
cd ..

# Wait for backend to start
sleep 3

# Start Frontend
echo -e "${BLUE}→ Starting Frontend Dev Server...${NC}"
cd frontend
npm run dev &
FRONTEND_PID=$!
cd ..

echo ""
echo -e "${GREEN}✓ Both servers are running!${NC}"
echo ""
echo -e "${YELLOW}Opening browser in 3 seconds...${NC}"
sleep 3

# Try to open browser
if command -v xdg-open &> /dev/null; then
    xdg-open "http://localhost:5173" > /dev/null 2>&1 &
elif command -v open &> /dev/null; then
    open "http://localhost:5173" > /dev/null 2>&1 &
elif command -v start &> /dev/null; then
    start "http://localhost:5173" > /dev/null 2>&1 &
fi

echo -e "${GREEN}✓ Ready to use! 🚀${NC}"
echo ""

# Keep processes running
wait
