import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, Monitor, Share2, Server, Globe, Lock, Shield, 
  EyeOff, QrCode, ArrowRight, Play, Pause, RotateCcw,
  CheckCircle
} from "lucide-react";
import screenshot from "@assets/screenshot-1772215324785.png";

const SCENES = [
  {
    id: 1,
    duration: 5000,
    content: (
      <div className="flex flex-col items-center justify-center text-center space-y-8 h-full w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          Every dev knows this screen...
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="w-full max-w-2xl bg-[#121212] border border-[#1C1C1C] rounded-xl overflow-hidden shadow-2xl"
        >
          <div className="flex items-center px-4 py-3 bg-[#1C1C1C] border-b border-[#2A2A2A] space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <div className="flex-1 text-center text-xs text-[#D1D1D6] font-mono bg-[#121212] py-1 rounded">localhost:3000</div>
          </div>
          <div className="p-12 flex items-center justify-center bg-white text-black min-h-[200px]">
            <h1 className="text-3xl font-bold font-sans">My Awesome App</h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="text-xl md:text-2xl text-muted-foreground mt-8"
        >
          It looks great on your machine... but how do you show it to anyone else?
        </motion.div>
      </div>
    )
  },
  {
    id: 2,
    duration: 6000,
    content: (
      <div className="flex flex-col items-center justify-center text-center space-y-12 h-full w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold leading-tight"
        >
          So you send screenshots, record clunky screen shares, or fight with tunnels and ports.
        </motion.div>
        
        <div className="flex justify-center gap-8 md:gap-16 w-full py-8">
          {[Monitor, Share2, Server].map((Icon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 1 + i * 0.4, type: "spring" }}
              className="p-6 bg-secondary/50 rounded-2xl border border-border"
            >
              <Icon className="w-12 h-12 text-muted-foreground" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="text-xl md:text-2xl text-red-400 font-medium"
        >
          Teammates can’t click it. Clients can’t try it. Feedback is slow, and ‘I’ll deploy it later’ never ends.
        </motion.div>
      </div>
    )
  },
  {
    id: 3,
    duration: 4500,
    content: (
      <div className="flex flex-col items-center justify-center text-center space-y-8 h-full w-full">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="w-24 h-24 bg-primary/20 text-primary rounded-3xl flex items-center justify-center mb-4 shadow-[0_0_40px_rgba(255,95,87,0.4)]"
        >
          <Zap className="w-12 h-12" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter"
        >
          Meet <span className="text-primary">Nivii</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-2xl md:text-4xl text-muted-foreground"
        >
          Share any project instantly.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          {["One command", "Polished URL", "No setup"].map((text, i) => (
            <span key={i} className="px-4 py-2 bg-secondary rounded-full text-lg border border-border">
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    )
  },
  {
    id: 4,
    duration: 5500,
    content: (
      <div className="flex flex-col items-center justify-center text-center space-y-12 h-full w-full max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold"
        >
          Install once. Run anywhere.
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="w-full text-left bg-[#121212] border border-[#1C1C1C] rounded-xl overflow-hidden shadow-2xl font-mono text-lg md:text-xl"
        >
          <div className="flex items-center px-4 py-3 bg-[#1C1C1C] border-b border-[#2A2A2A] space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <div className="flex-1 text-center text-xs text-[#D1D1D6] font-sans">Terminal</div>
          </div>
          <div className="p-6 md:p-8 space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="flex items-center text-primary"
            >
              <span className="text-muted-foreground mr-4">❯</span> npm i -g nivii
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="text-muted-foreground text-sm"
            >
              added 1 package, and audited 2 packages in 1s
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5 }}
              className="flex items-center text-accent mt-4"
            >
              <span className="text-muted-foreground mr-4">❯</span> nivii share
            </motion.div>
          </div>
        </motion.div>
      </div>
    )
  },
  {
    id: 5,
    duration: 6500,
    content: (
      <div className="flex flex-col items-center justify-center text-center space-y-10 h-full w-full max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl md:text-5xl font-bold"
        >
          The Magic Moment
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {[
            { text: "Auto-detects framework", delay: 0.5 },
            { text: "Builds project", delay: 1.5 },
            { text: "Deploys to Cloudflare edge", delay: 2.5 }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: item.delay }}
              className="bg-secondary/50 p-6 rounded-2xl border border-border flex flex-col items-center justify-center gap-4"
            >
              <CheckCircle className="w-8 h-8 text-green-400" />
              <p className="text-lg font-medium">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 4 }}
          className="mt-8 p-6 bg-primary/10 border border-primary/30 rounded-2xl text-xl md:text-2xl flex items-center justify-center gap-4"
        >
          <Globe className="text-primary w-8 h-8" />
          <span className="font-mono text-primary">your-demo.nivii.app</span>
          <span className="text-sm text-muted-foreground ml-2">(Copied!)</span>
        </motion.div>
      </div>
    )
  },
  {
    id: 6,
    duration: 5500,
    content: (
      <div className="flex flex-col items-center justify-center text-center space-y-10 h-full w-full max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold"
        >
          What others see
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="w-full bg-[#121212] border border-[#1C1C1C] rounded-xl overflow-hidden shadow-2xl relative"
        >
          <div className="flex items-center px-4 py-3 bg-[#1C1C1C] border-b border-[#2A2A2A] space-x-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="flex items-center gap-2 bg-[#000] px-4 py-1 rounded-md text-sm border border-[#2A2A2A] text-muted-foreground w-2/3">
                <Lock className="w-3 h-3 text-green-400" />
                <span className="font-mono">your-demo.nivii.app</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <motion.div 
              initial={{ filter: "blur(10px)" }}
              animate={{ filter: "blur(0px)" }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <img src={screenshot} alt="Nivii App Demo" className="w-full h-auto object-cover max-h-[400px] object-top opacity-80" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="absolute inset-0 bg-black/60 flex items-center justify-center"
            >
               <div className="text-2xl md:text-4xl font-bold text-white text-center px-8">
                 They’re using your app for real.<br/>
                 <span className="text-primary mt-4 block text-xl">No Node, no git clone, no setup.</span>
               </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    )
  },
  {
    id: 7,
    duration: 6000,
    content: (
      <div className="flex flex-col items-center justify-center text-center space-y-12 h-full w-full max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Extra Powers
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {[
            { icon: Shield, title: "Need privacy?", desc: "Add a password or one-time code.", delay: 0.5 },
            { icon: EyeOff, title: "Want it temporary?", desc: "Use self-destruct links.", delay: 1.5 },
            { icon: QrCode, title: "On mobile?", desc: "Scan the QR code in terminal.", delay: 2.5 }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: item.delay }}
              className="bg-secondary/30 p-8 rounded-2xl border border-border flex flex-col items-center text-center gap-4 hover:border-primary/50 transition-colors"
            >
              <item.icon className="w-12 h-12 text-accent" />
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 8,
    duration: 5000,
    content: (
      <div className="flex flex-col items-center justify-center text-center space-y-10 h-full w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 1.5 }}
          className="relative w-48 h-48 mb-8"
        >
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <Globe className="w-full h-full text-primary relative z-10" strokeWidth={1} />
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-3xl md:text-5xl font-bold leading-tight"
        >
          Ship WIP ideas, design reviews, and live demos without touching production.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-2xl text-muted-foreground"
        >
          Localhost isn’t stuck on your laptop anymore — <span className="text-accent font-bold">it’s already online.</span>
        </motion.p>
      </div>
    )
  },
  {
    id: 9,
    duration: 8000,
    content: (
      <div className="flex flex-col items-center justify-center text-center space-y-12 h-full w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mb-4 shadow-[0_0_40px_rgba(255,95,87,0.4)]"
        >
          <Zap className="w-10 h-10 text-white" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter"
        >
          Stop hiding your work on localhost.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="bg-secondary/50 border border-border px-8 py-6 rounded-2xl font-mono text-xl md:text-2xl text-primary shadow-xl"
        >
          npm i -g nivii && nivii share
        </motion.div>

        <motion.a
          href="https://nivii.app"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-8 py-4 rounded-full text-xl font-bold flex items-center gap-2 hover:bg-white/90 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        >
          Get started at nivii.app
          <ArrowRight className="w-6 h-6" />
        </motion.a>
      </div>
    )
  }
];

export default function VideoPresentation() {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  
  const requestRef = useRef<number>();
  const startTimeRef = useRef<number | null>(null);
  const pausedTimeRef = useRef<number>(0);

  const animate = (time: number) => {
    if (!isPlaying) {
      startTimeRef.current = null;
      requestRef.current = requestAnimationFrame(animate);
      return;
    }

    if (!startTimeRef.current) {
      startTimeRef.current = time - pausedTimeRef.current;
    }

    const elapsed = time - startTimeRef.current;
    const sceneDuration = SCENES[currentScene].duration;
    const currentProgress = (elapsed / sceneDuration) * 100;

    if (currentProgress >= 100) {
      if (currentScene < SCENES.length - 1) {
        setCurrentScene(s => s + 1);
        startTimeRef.current = time;
        pausedTimeRef.current = 0;
        setProgress(0);
      } else {
        setIsPlaying(false);
        setProgress(100);
      }
    } else {
      setProgress(currentProgress);
    }

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [currentScene, isPlaying]);

  const togglePlay = () => {
    if (!isPlaying && progress >= 100) {
      setCurrentScene(0);
      setProgress(0);
      pausedTimeRef.current = 0;
    } else if (isPlaying) {
      const sceneDuration = SCENES[currentScene].duration;
      pausedTimeRef.current = (progress / 100) * sceneDuration;
    }
    setIsPlaying(!isPlaying);
  };

  const jumpToScene = (index: number) => {
    setCurrentScene(index);
    setProgress(0);
    pausedTimeRef.current = 0;
    startTimeRef.current = null;
    setIsPlaying(true);
  };

  return (
    <div className="w-screen h-screen bg-background text-foreground flex flex-col overflow-hidden font-sans select-none">
      {/* Video Progress Bar */}
      <div className="w-full flex h-1.5 bg-secondary/50 gap-1 z-50">
        {SCENES.map((scene, idx) => (
          <div 
            key={scene.id} 
            className="flex-1 bg-white/10 h-full cursor-pointer relative overflow-hidden group"
            onClick={() => jumpToScene(idx)}
          >
            <div 
              className="absolute top-0 left-0 bottom-0 bg-primary/80 transition-all duration-75 group-hover:bg-primary"
              style={{ 
                width: idx < currentScene ? '100%' : idx === currentScene ? `${progress}%` : '0%' 
              }}
            />
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 relative flex items-center justify-center p-6 md:p-12 overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-background to-background">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScene}
            initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center justify-center p-8"
          >
            {SCENES[currentScene].content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Video Controls Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-center z-50">
        <div className="flex items-center gap-6 bg-secondary/80 backdrop-blur-md px-6 py-3 rounded-full border border-border/50 shadow-2xl">
          <button 
            onClick={togglePlay}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black hover:scale-105 active:scale-95 transition-all"
          >
            {progress >= 100 ? <RotateCcw className="w-6 h-6 ml-0" /> : 
             isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
          </button>
          
          <div className="flex items-center gap-3 text-sm font-mono text-muted-foreground">
            <span>Scene {currentScene + 1}</span>
            <span>/</span>
            <span>{SCENES.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
