import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer
      className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}>
      <motion.div className="text-white-500 flex gap-2" whileHover={{ scale: 1.05 }}>
        <p>Terms & Conditions</p>
      </motion.div>

      <motion.div className="flex gap-3">
        <motion.a
          href="https://github.com/rubaka-pl"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}>
          <img src="/assets/github.svg" alt="GitHub" className="w-1/2 h-1/2" />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/rubaka-pl/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          whileHover={{ scale: 1.2, rotate: -5 }}
          transition={{ type: 'spring', stiffness: 300 }}>
          <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-1/2 h-1/2" />
        </motion.a>
      </motion.div>

      <p className="text-white-500">© 2024 Rubaka-pl</p>
    </footer>
  );
};

export default Footer;
