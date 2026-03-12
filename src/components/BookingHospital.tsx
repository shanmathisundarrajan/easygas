// ✅ Make sure to install:
// npm install @formspree/react framer-motion react-i18next

//  import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";

// interface BookingProps {
//   handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
// }

// export default function BookingHospitals({ handleSubmit }: BookingProps) {
//   const { t } = useTranslation();

//   return (
//     <motion.section
//       key="booking-hospitals"
//       className="section booking"
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -30 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h2>{t("BOOK FOR HOSPITALS")}</h2>

//       <form onSubmit={handleSubmit} className="form-container">
//         <label>{t("Phone Number")}</label>
//         <div className="phone-input">
//           <span className="prefix">+91</span>
//           <input type="tel" name="phone" placeholder={t("Enter your phone number")} required />
//         </div>

//         <div className="hospital-box">
//           <h4>{t("Hospital Gas Booking Details")}</h4>

//           <label>{t("Hospital Name")}</label>
//           <input type="text" name="hospitalName" placeholder={t("Enter Hospital Name")} required />

//           <label>{t("Name of Gas")}</label>
//           <input type="text" name="gasName" placeholder={t("Enter Gas Name")} required />

//           <label>{t("Quantity")}</label>
//           <input type="number" name="gasQty" placeholder={t("Enter Gas Quantity")} required />
//         </div>

//         {/* KYC Section */}
//         <div className="kyc-box">
//           <h4>{t("KYC Documents")}</h4>
//           <label>{t("Upload Hospital Certificate/Accreditation")}</label>
//           <input type="file" name="hospitalCertificate" required />
//         </div>

//         <label>{t("Address")}</label>
//         <textarea placeholder={t("Enter the correct address ")} required />

//         <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit">
//           {t("Confirm Booking")}
//         </motion.button>
//       </form>
//     </motion.section>
//   );
// }
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function BookingHospitals() {
  const { t } = useTranslation();

  return (
    <motion.section
      key="booking-hospitals"
      className="section booking px-4 py-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6">{t("BOOK FOR HOSPITALS")}</h2>

      {/* 👇 Replace with your Formspree endpoint */}
      <form
        action="https://formspree.io/f/xanpbnby"  
        method="POST"
        className="form-container max-w-xl mx-auto space-y-4"
      >
        {/* PHONE NUMBER */}
        <label className="block font-medium">{t("Phone Number")}</label>
        <div className="phone-input flex items-center border rounded px-2 py-1">
          <span className="prefix mr-2">+91</span>
          <input
            type="tel"
            name="phone"
            placeholder={t("Enter your phone number")}
            required
            className="flex-1 outline-none"
          />
        </div>

        {/* HOSPITAL BOOKING DETAILS */}
        <div className="hospital-box border rounded p-4 space-y-3">
          <h4 className="text-lg font-semibold">{t("Hospital Gas Booking Details")}</h4>

          <label className="block">{t("Hospital Name")}</label>
          <input
            type="text"
            name="hospitalName"
            placeholder={t("Enter Hospital Name")}
            required
            className="w-full border rounded px-2 py-1"
          />

          <label className="block">{t("Name of Gas")}</label>
          <input
            type="text"
            name="gasName"
            placeholder={t("Enter Gas Name")}
            required
            className="w-full border rounded px-2 py-1"
          />

          <label className="block">{t("Quantity")}</label>
          <input
            type="number"
            name="gasQty"
            placeholder={t("Enter Gas Quantity")}
            required
            className="w-full border rounded px-2 py-1"
          />
        </div>

        {/* KYC SECTION - Google Drive Link */}
        <div className="kyc-box border rounded p-4 shadow-md space-y-2">
          <h4 className="text-lg font-semibold">{t("KYC Documents")}</h4>
          <label className="block">{t("Paste Google Drive File Link")}</label>
          <input
            type="url"
            name="hospitalCertificateLink"
            placeholder={t("Paste your Google Drive document link here")}
            required
            className="w-full border rounded px-2 py-1"
          />
          <p className="text-xs text-gray-500">
            {t("Upload your certificate/accreditation to Google Drive and paste the shareable link here.")}
          </p>
        </div>

        {/* ADDRESS FIELD */}
        <label className="block">{t("Address")}</label>
        <textarea
          name="address"
          placeholder={t("Enter the correct address")}
          required
          className="w-full border rounded px-2 py-1"
        />

        {/* SUBMIT BUTTON */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-blue-600 text-white font-semibold px-4 py-2 rounded mt-4"
        >
          {t("Confirm Booking")}
        </motion.button>
      </form>
    </motion.section>
  );
}
