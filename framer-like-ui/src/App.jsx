import { motion,useScroll,useTransform } from "framer-motion";
import { useRef } from "react";
import "./App.css";

export default function App() {

  const servicesRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: servicesRef,
    offset: ["start end", "center center"],
  });

  // 🔥 Scroll based motion
const rotateY = useTransform(scrollYProgress, [0, 1], [20, 0]);
const x = useTransform(scrollYProgress, [0, 1], [60, 0]);

const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);






  return (
    <>
{/* navbar */}

<motion.nav
  className="navbar"
  initial={{ opacity: 0, y: -8 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, ease: "easeOut" }}
>
  <div className="nav-pill">
    {/* LEFT */}
    <img
      src="https://i.pravatar.cc/40"
      className="nav-avatar"
      alt="avatar"
    />

    {/* CENTER */}
    <div className="nav-links">
      <span>Home</span>
      <span>About</span>
      <span>Projects</span>
      <span>Blogs</span>
    </div>

    {/* RIGHT */}
    <button className="contact-btn">Contact</button>
  </div>
</motion.nav>
{/* navbar end */}


      {/* HERO section */}
      <section className="hero">
        {/* LEFT TEXT */}
        <div className="hero-left">
          <p className="small-name">SHRADHA GUNJKAR</p>
          <h1>WEB</h1>
        </div>

   {/* IMAGE */}
    
<motion.div
  className="hero-image-wrap"
  initial={{ rotateY: -25, opacity: 0, y: 40 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, ease: "easeOut" }}
  style={{
    rotateY,
    x,
    y,
    scale,
  }}
>


  <img
    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
    alt="hero"
    className="hero-image"
  />

  {/* HI BADGE */}
  <motion.div
    className="hi-badge"
    initial="rest"
    whileHover="hover"
    animate="rest"
  >
    {/* HAND */}
    <motion.span
      variants={{
        rest: { rotate: 0 },
        hover: {
          rotate: [0, 20, -10, 20, 0],
          transition: {
            duration: 0.6,
            repeat: Infinity,
            repeatType: "loop",
          },
        },
      }}
      style={{ display: "inline-block" }}
    >
      👋
    </motion.span>

    {/* TEXT — ONLY ON HOVER */}
    <motion.span
      className="hi-text"
      variants={{
        rest: { opacity: 0, y: 6 },
        hover: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.2 }}
    >
     hi
    </motion.span>
  </motion.div>
</motion.div>



        {/* RIGHT TEXT */}
        <div className="hero-right">
          <h1>DEVELOPER</h1>
          <p className="small-name">I’m a Mern stack / Full stack Developer</p>
        </div>
      </section>

      {/* TOGGLE */}
      <div className="toggle-wrap">
        <div className="toggle-dot"></div>
      </div>
   {/* hero  section end */}

    {/* SERVICES */}
      <section className="services" ref={servicesRef}>
        <div className="services-left">
          <h2>WHAT I CAN DO FOR YOU</h2>
          <p>
            As a MERN Stack Full-Stack Developer, I build scalable,
            high-performance web applications with clean design.
          </p>

          <ul>
            <li>1. Full-Stack Development (MERN)</li>
            <li>2. Frontend Development</li>
            <li>3. Backend Development</li>
          </ul>
        </div>

        {/* IMAGE */}

      </section>


    </>
  


  );
}
