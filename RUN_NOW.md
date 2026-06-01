# 🚀 Move Smart - Complete Running Guide

## ⚡ FASTEST WAY TO RUN EVERYTHING

### Option 1: One-Command Setup (Recommended)

```bash
# Clone repository
git clone https://github.com/alaaabdalazeemomer-sys/move-smart-.git
cd move-smart-

# Make script executable
chmod +x start.sh

# Run everything in one command
bash start.sh   # macOS/Linux
start.bat       # Windows
```

✅ This will:
- Install all dependencies
- Create and seed the database
- Start backend on port 5000
- Start frontend on port 5173
- Automatically open browser

---

## 🎯 Option 2: Two Terminal Setup (More Control)

### Terminal 1 - Start Backend

```bash
cd backend
npm install
npm run seed
npm start
```

✅ Backend running on: `http://localhost:5000`

### Terminal 2 - Start Frontend

```bash
cd frontend
npm install
npm run dev
```

✅ Frontend running on: `http://localhost:5173`

---

## 🐳 Option 3: Docker (If You Have It)

```bash
cd move-smart-
docker-compose up
```

✅ Both services will run automatically

---

## 🌐 Access Your Application

Once running, open your browser:

### Frontend URL
```
http://localhost:5173
```

### Backend API
```
http://localhost:5000/api
```

### Backend Health Check
```
http://localhost:5000/health
```

---

## 🧪 Test Immediately

Use these credentials to login:

### 👤 Admin Account
```
Email: admin@lincoln.edu
Password: admin123
Role: Administrator
```
Access admin dashboard with analytics

### 🚗 Driver Account
```
Email: mike@lincoln.edu
Password: driver123
Role: Driver
```
View driver dashboard and start trips

### 👨‍👩‍👧‍👦 Passenger Account
```
Email: alex@lincoln.edu
Password: pass123
Role: Passenger
```
Confirm attendance and track bus

---

## 🎮 What to Test

### Phase 1: Authentication ✅
1. Login as Admin
2. Logout and login as Driver
3. Logout and login as Passenger

### Phase 2: Route Optimization ✅
1. **As Admin**: Check "Daily Attendance Report"
2. **As Driver**: See optimized route stops
3. **As Admin**: View "Fuel Saved" metrics

### Phase 3: Live Tracking ✅
1. **As Driver**: Click "Start Trip"
2. **As Passenger**: Watch bus location update in real-time
3. **As Passenger**: See ETA countdown

### Phase 4: Ad Monetization ✅
1. **As Passenger**: Scroll down to see ad banner
2. **As Admin**: Check "Ad Performance" section
3. **As Admin**: View impressions and CTR

---

## 📊 Database

### Pre-Seeded Data Includes:
- **3 Organizations** (Schools, Corporate, Transport)
- **10 Users** (2 Admins, 3 Drivers, 5 Passengers)
- **5 Buses** with OBD-II device IDs
- **3 Routes** with multiple stops
- **15 Attendance Records** for today
- **3 Ads** ready to serve

### Reset Database Anytime

```bash
cd backend
rm db/move_smart.db
npm run seed
```

---

## 🛠️ Troubleshooting

### Issue: Port 5000 already in use

```bash
# macOS/Linux
lsof -ti:5000 | xargs kill -9

# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### Issue: Dependencies not installing

```bash
rm -rf node_modules package-lock.json
rm -rf backend/node_modules backend/package-lock.json
rm -rf frontend/node_modules frontend/package-lock.json
npm install
```

### Issue: Database error

```bash
cd backend
rm -rf db/
npm run seed
npm start
```

### Issue: CORS error

Update `backend/.env`:
```
CORS_ORIGIN=http://localhost:5173
```

### Issue: WebSocket not connecting

1. Ensure backend is running
2. Check browser console for errors
3. Verify `http://localhost:5000` is accessible

---

## 📂 Project Structure

```
move-smart-/
├── backend/
│   ├── src/
│   │   ├── db/
│   │   │   ├── schema.js (Database tables)
│   │   │   └── seed.js (Mock data)
│   │   ├── routes/ (API endpoints)
│   │   ├── services/ (Business logic)
│   │   └── middleware/ (Auth, etc)
│   ├── package.json
│   ├── server.js (Start point)
│   ├── .env (Environment config)
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── components/ (React components)
│   │   ├── pages/ (Page components)
│   │   ├── services/ (API & Socket)
│   │   ├── App.jsx (Main app)
│   │   └── index.css (Tailwind styles)
│   ├── package.json
│   ├── vite.config.js (Build config)
│   └── Dockerfile
├── docs/ (Documentation)
├── start.sh / start.bat (Startup scripts)
├── docker-compose.yml (Docker setup)
└── README.md
```

---

## 🚀 Next Steps

1. ✅ Run the app using one of the methods above
2. ✅ Test all three user roles
3. ✅ Explore all 4 phases
4. ✅ Check `/docs` folder for detailed docs
5. ✅ Customize for your use case

---

## 📚 Documentation

- **API Documentation**: `/docs/API.md`
- **Database Schema**: `/docs/DATABASE.md`
- **Feature Phases**: `/docs/PHASES.md`

---

## ✨ You're All Set!

Your Move Smart application is ready to run! 🚀

Choose your setup method above and start building! 🎉
