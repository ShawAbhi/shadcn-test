'use client'; // Add this line at the top

import Image from "next/image";

import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'

//import { Button } from "@/components/ui/button";
import { Button } from 'antd';
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <axesHelper />
      </Canvas>
      

       {/*
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Button>Click me</Button>
      </div>
     
      <div id="Container3D" style={{ width: '100%', height: '100%' }}>
        <Spline
          scene="https://prod.spline.design/jHGW9ytaIgnMpRdT/scene.splinecode" 
        />
      </div>
      */}
      
    </main>
  )
}
