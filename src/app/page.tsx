import Image from "next/image";
//import { Button } from "@/components/ui/button";
import { Button } from 'antd';

export default function Home() {
  return (
    <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <Button>Click me</Button>
      </div>
    </main>
  )
}
