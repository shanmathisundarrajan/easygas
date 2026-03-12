// ✅ Make sure to run:
// npm install @formspree/react framer-motion react-i18next

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactUs() {
  const { t } = useTranslation();
  
  // 👇 Replace "xgvnvwov" with your own Formspree form ID
  const [state, handleSubmit] = useForm("xgvnvwov");

  if (state.succeeded) {
    return (
      <motion.section
        key="thank-you"
        className="section contact"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
      >
        <h2>{t("Thank you for contacting us!")}</h2>
        <p>{t("We’ll get back to you soon.")}</p>
      </motion.section>
    );
  }

  return (
    <motion.section
      key="contact"
      className="section contact"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <h2>{t("contact.title")}</h2>
      <form onSubmit={handleSubmit}>
        <input
          id="name"
          type="text"
          name="name"
          placeholder={t("Contact Name")}
          required
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <div className="phone-input">
          <span className="prefix">+91</span>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder={t("Enter Your Phone Number")}
            required
          />
        </div>
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />

        <textarea
          id="message"
          name="message"
          placeholder={t("Message here!")}
        ></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <button type="submit" disabled={state.submitting}>
          {t("Submit")}
        </button>
      </form>
    </motion.section>
  );
}
