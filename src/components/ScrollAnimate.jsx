import { useState, useEffect } from "react";

const ScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle the scroll event to detect visibility
  const handleScroll = () => {
    const element = document.getElementById("animateOnScroll");
    const rect = element.getBoundingClientRect();
    
    // If the element is in view, set the animation state to true
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add scroll event listener on mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="animateOnScroll"
      className={`transition-all duration-1000 ease-in-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ height: "300px", backgroundColor: "lightblue", margin: "20px" }}
    >
      <h2 className="text-3xl text-center py-8">Scroll Animation</h2>
    </div>
  );
};

export default ScrollAnimation;
