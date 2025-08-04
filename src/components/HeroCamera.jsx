import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';

const HeroCamera = ({ targetRef }) => {
  const targetRotation = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = (event.clientY / window.innerHeight) * 2 - 1;
      targetRotation.current.y = x * Math.PI * 0.05;
      targetRotation.current.x = y * Math.PI * 0.04;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (targetRef.current) {
      const t = state.clock.getElapsedTime();
      const autoRotationY = Math.sin(t * 0.5) * 0.2;

      const targetY = targetRotation.current.y + autoRotationY;
      const targetX = targetRotation.current.x;

      targetRef.current.rotation.y += (targetY - targetRef.current.rotation.y) * 0.1;
      targetRef.current.rotation.x += (targetX - targetRef.current.rotation.x) * 0.1;

      const minY = -Math.PI / 6;
      const maxY = Math.PI / 6;
      const minX = -Math.PI / 12;
      const maxX = Math.PI / 12;

      targetRef.current.rotation.y = Math.max(minY, Math.min(maxY, targetRef.current.rotation.y));
      targetRef.current.rotation.x = Math.max(minX, Math.min(maxX, targetRef.current.rotation.x));
    }
  });

  return null;
};

export default HeroCamera;
