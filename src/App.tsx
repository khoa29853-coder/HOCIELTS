import { useState, useRef, useEffect } from 'react'
import { Send, Menu, X, Settings, LogOut, User, Home, Book, BarChart3, MessageSquare } from 'lucide-react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import ChatInterface from './components/ChatInterface'
import Dashboard from './components/Dashboard'
import StudyPlans from './components/StudyPlans'
import './App.css'

export default function App() {
  const [activeTab, setActiveTab] = useState('chat')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [userProfile, setUserProfile] = useState({
    name: 'Học Viên',
    level: 'Beginner',
    score: 0,
    streak: 0
  })

  useEffect(() => {
    // Initialize app
    console.log('App initialized')
  }, [])

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return <Dashboard userProfile={userProfile} />
      case 'study':
        return <StudyPlans userProfile={userProfile} />
      case 'chat':
        return <ChatInterface userProfile={userProfile} />
      default:
        return <ChatInterface userProfile={userProfile} />
    }
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Sidebar */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <Navbar 
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
          userProfile={userProfile}
        />

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}
