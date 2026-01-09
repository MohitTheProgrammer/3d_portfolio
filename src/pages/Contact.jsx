import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Alert from "../components/Alert";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Fox from "../models/Fox";
import SocialLink from "../components/SocialLink";
import { socialLinks } from "../constants";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const { alert, showAlert, hideAlert } = useAlert();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => {
    setCurrentAnimation("walk");
    hideAlert();
  };
  const handleBlur = () => setCurrentAnimation("idle");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.name || !form.message) {
      showAlert({
        show: true,
        text: "All fields required!",
        type: "danger",
      });

      return;
    }
    setIsLoading(true);
    setCurrentAnimation("hit");
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        // show success message
        showAlert({
          show: true,
          text: "Message sent successfully!",
          type: "success",
        });
        // hide alert

        setTimeout(() => {
          hideAlert();
          setCurrentAnimation("idle");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        }, [3000]);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        setCurrentAnimation("idle");
        showAlert({
          show: true,
          text: "I didnt receive you message!",
          type: "danger",
        });
        // show error message
      });
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-w-5xl mx-auto sm:p-16 pb-12 pt-31.5! px-8 min-h-[calc(100vh-80px)]">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins">
          Get in touch
        </h1>
        <form action="" className="w-full flex flex-col gap-7 mt-4">
          <label htmlFor="name" className="text-black font-semibold">
            Name
            <input
              type="text"
              name="name"
              placeholder="John"
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
              className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-card"
            />
          </label>
          <label htmlFor="email" className="text-black font-semibold">
            Email
            <input
              type="email"
              name="email"
              placeholder="john@gmail.com"
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
              className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-card"
            />
          </label>
          <label htmlFor="message" className="text-black font-semibold">
            Message
            <textarea
              name="message"
              placeholder="Let me know how I can help you!"
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
              className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-card h-36"
            />
          </label>
          <button
            className="text-white cursor-pointer hover:scale-102 transition-transform bg-linear-to-r from-[#00c6ff] to-[#0072ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            type="submit"
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isLoading}
            onClick={handleSubmit}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
        <div className="flex justify-between w-full mt-6">
          {socialLinks.map((link, i) => (
            <SocialLink
              icon={link.iconUrl}
              url={link.link}
              key={i}
              text={link.name}
            />
          ))}
        </div>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-137.5 h-87.5">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
              currentAnimation={currentAnimation}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
