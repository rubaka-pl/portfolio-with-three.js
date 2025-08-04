import { Suspense, lazy } from 'react';
import ErrorBoundary from './components/ErrorBoundary.jsx';

const Navbar = lazy(() => import('./sections/Navbar'));
const Hero = lazy(() => import('./sections/Hero'));
const About = lazy(() => import('./sections/About'));
const Projects = lazy(() => import('./sections/Projects'));
const WorkExperience = lazy(() => import('./sections/Experience'));
const Contact = lazy(() => import('./sections/Contact'));
const Footer = lazy(() => import('./sections/Footer'));

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <ErrorBoundary>
        <Suspense fallback={<div className="text-white text-center p-4">Loading...</div>}>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <WorkExperience />
          <Contact />
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
};

export default App;
