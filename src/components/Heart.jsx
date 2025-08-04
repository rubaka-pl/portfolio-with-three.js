import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Heart = (props) => {
  const heartRef = useRef();

  const { scene } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/heart/model.gltf',
  );

  useGSAP(() => {
    const initialScale = heartRef.current.scale.clone();

    gsap.to(heartRef.current.scale, {
      x: initialScale.x * 1.1,
      y: initialScale.y * 1.1,
      z: initialScale.z * 1.1,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  });

  return (
    <mesh ref={heartRef} {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Heart;
