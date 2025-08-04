import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center">
        <span className="loader" />
        <p className="text-white mt-4 text-sm">{progress.toFixed(0)}% loaded</p>
      </div>
    </Html>
  );
};

export default CanvasLoader;
