import { motion } from 'framer-motion';
import Globe from 'react-globe.gl';
import Button from '../components/Button';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 2, ease: 'easeOut' } },
};

const About = () => {
  return (
    <section className="c-space my-20" id="about">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Block 1 */}
        <motion.div variants={itemVariants} className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Hi, I’m Daniel</p>
              <p className="grid-subtext">
                With 1 year of experience, I have honed my skills in frontend, creating dynamic and responsive websites.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Block 2 */}
        <motion.div variants={itemVariants} className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in JavaScript, React, and tools that allow me to build robust and scalable applications.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Globe Block */}
        <motion.div variants={itemVariants} className="xl:col-span-1 custom-row-span-xl">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Torun, Poland and open to remote work worldwide.</p>
              <p className="grid-subtext mt-5 mb-5">You can download my resume in PDF format.</p>

              <Button
                name="Download Resume"
                isBeam
                containerClass="sm:w-fit w-full sm:min-w-64"
                href="/Daniel S. Frontend developer(eng).pdf"
                download
              />
            </div>
          </div>
        </motion.div>

        {/* Passion Block */}
        <motion.div variants={itemVariants} className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container justify-center">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies and enhancing my skills.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
