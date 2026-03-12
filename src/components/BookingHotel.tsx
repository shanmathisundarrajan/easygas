// import { motion } from "framer-motion";

// interface BookingProps {
//   handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
// }

// export default function BookingHotel({ handleSubmit }: BookingProps) {
//   return (
//     <motion.section
//       key="booking-hotel"
//       className="section booking"
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -30 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h2>🍴 Book Gas for Hotels & Businesses</h2>
//       <p className="subtitle">
//         Bulk cylinder supply for restaurants, catering & enterprises.  
//         Complete your booking with <strong>KYC Verification</strong>.
//       </p>

//       <form onSubmit={handleSubmit} className="form-container">
//         <label>📱 Business Phone</label>
//         <div className="phone-input">
//           <span className="prefix">+91</span>
//           <input type="tel" name="phone" placeholder="Business contact number" required />
//         </div>

//         <label>📦 Quantity (Cylinders)</label>
//         <input type="number" name="qty" placeholder="Number of cylinders" required />

//         <div className="kyc-box">
//           <h4>🔐 KYC Verification</h4>
//           <p>Please upload required business documents</p>
//           <label>📝 Business Registration Certificate:</label>
//           <input type="file" required />
//           <label>🧑 Authorized Person ID:</label>
//           <input type="file" required />
//         </div>

//         <label>🏠 Delivery Address</label>
//         <textarea placeholder="Enter complete delivery address" required />

//         <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit">
//           ✅ Confirm Booking
//         </motion.button>
//       </form>
//     </motion.section>
//   );
// }
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";

// interface BookingProps {
//   handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
// }

// export default function BookingHotels({ handleSubmit }: BookingProps) {
//   const { t } = useTranslation();

//   return (
//     <motion.section
//       key="booking-hotels"
//       className="section booking"
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -30 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h2>{t("BOOK FOR HOTELS")}</h2>
//       <p className="subtitle">{t("")}</p>

//       <form onSubmit={handleSubmit} className="form-container">
//         <label>{t("Phone Number")}</label>
//         <div className="phone-input">
//           <span className="prefix">+91</span>
//           <input
//             type="tel"
//             name="phone"
//             placeholder={t("Enter your phone number")}
//             required
//           />
//         </div>

//         {/* Hotel Booking Section */}
//         <div className="hotel-box">
//           <h4>{t("Hotel Gas Booking Details")}</h4>

//           <label>{t("Hotel Name")}</label>
//           <input
//             type="text"
//             name="hotelName"
//             placeholder={t("Enter Hotel Name")}
//             required
//           />

//           <label>{t("Quantity of LPG Cylinders")}</label>
//           <input
//             type="number"
//             name="lpgQty"
//             placeholder={t("Enter LPG Cylinder Quantity")}
//             required
//           />
//         </div>

//         <label>{t("Address")}</label>
//         <textarea placeholder={t("Enter the correct address ")} required />

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           type="submit"
//         >
//           {t("Confirm Booking")}
//         </motion.button>
//       </form>
//     </motion.section>
//   );
// }
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";

// interface BookingProps {
//   handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
// }
// export default function BookingHotels({ handleSubmit }: BookingProps) {
//   const { t } = useTranslation();

//   return (
//     <motion.section
//       key="booking-hotels"
//       className="section booking"
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -30 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h2>{t("BOOK FOR HOTELS")}</h2>

//       <form onSubmit={handleSubmit} className="form-container">
//         <label>{t("Phone Number")}</label>
//         <div className="phone-input">
//           <span className="prefix">+91</span>
//           <input type="tel" name="phone" placeholder={t("Enter your phone number")} required />
//         </div>

//         <div className="hotel-box">
//           <h4>{t("Hotel Gas Booking Details")}</h4>

//           <label>{t("Hotel Name")}</label>
//           <input type="text" name="hotelName" placeholder={t("Enter Hotel Name")} required />

//           <label>{t("Quantity of LPG Cylinders")}</label>
//           <input type="number" name="lpgQty" placeholder={t("Enter LPG Cylinder Quantity")} required />
//         </div>

//         {/* KYC Section */}
//         <div className="kyc-box">
//           <h4>{t("KYC Documents")}</h4>
//           <label>{t("Upload Hotel Certificate/License")}</label>
//           <input type="file" name="hotelCertificate" required />
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

export default function BookingHotels() {
  const { t } = useTranslation();

  return (
    <motion.section
      key="booking-hotels"
      className="section booking px-4 py-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6">{t("BOOK FOR HOTELS")}</h2>

      {/* 👇 Replace with your Formspree form endpoint */}
      <form
        action="https://formspree.io/f/mblzklye"  
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

        {/* HOTEL BOOKING DETAILS */}
        <div className="hotel-box border rounded p-4 space-y-3">
          <h4 className="text-lg font-semibold">{t("Hotel Gas Booking Details")}</h4>

          <label className="block">{t("Hotel Name")}</label>
          <input
            type="text"
            name="hotelName"
            placeholder={t("Enter Hotel Name")}
            required
            className="w-full border rounded px-2 py-1"
          />

          <label className="block">{t("Quantity of LPG Cylinders")}</label>
          <input
            type="number"
            name="lpgQty"
            placeholder={t("Enter LPG Cylinder Quantity")}
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
            name="hotelCertificateLink"
            placeholder={t("Paste your Google Drive link for Hotel Certificate/License")}
            required
            className="w-full border rounded px-2 py-1"
          />
          <p className="text-xs text-gray-500">
            {t("Upload your document to Google Drive and paste the shareable link here.")}
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
