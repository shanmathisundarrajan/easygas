// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";

// interface BookingProps {
//   handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
// }

// export default function BookingIndustries({ handleSubmit }: BookingProps) {
//   const { t } = useTranslation();

//   return (
//     <motion.section
//       key="booking-industries"
//       className="section booking"
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -30 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h2>{t("BOOK FOR INDUSTRIES")}</h2>
//       <p className="subtitle">{t("")}</p>

//       <form onSubmit={handleSubmit} className="form-container">
//         <label>{t("Phone Number")}</label>
//         <div className="phone-input">
//           <span className="prefix">+91</span>
//           <input type="tel" name="phone" placeholder={t("Enter your phone number")} required />
//         </div> 

//         <label>{t("Quantity")}</label>
//         <input type="number" name="qty" placeholder={t("Quantity Required")} required />

//         <div className="kyc-box">
//           <h4>{t("KYC Documents")}</h4>
//           <p>{t("")}</p>
//           <label>{t("business Certificate")}</label>
//           <input type="file" required />
//           <label>{t("Staff Id")}</label>
//           <input type="file" required />
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
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";

// interface BookingProps {
//   handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
// }

// export default function BookingIndustries({ handleSubmit }: BookingProps) {
//   const { t } = useTranslation();

//   return (
//     <motion.section
//       key="booking-industries"
//       className="section booking"
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -30 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h2>{t("BOOK FOR INDUSTRIES")}</h2>
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

//         {/* Industry Booking Section */}
//         <div className="industry-box">
//           <h4>{t("Industry Gas Booking Details")}</h4>

//           <label>{t("Industry/Company Name")}</label>
//           <input
//             type="text"
//             name="industryName"
//             placeholder={t("Enter Industry or Company Name")}
//             required
//           />

//           <label>{t("Name of Gas")}</label>
//           <input
//             type="text"
//             name="gasName"
//             placeholder={t("Enter Gas Name")}
//             required
//           />

//           <label>{t("Quantity")}</label>
//           <input
//             type="number"
//             name="gasQty"
//             placeholder={t("Enter Gas Quantity")}
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

// export default function BookingIndustries({ handleSubmit }: BookingProps) {
//   const { t } = useTranslation();

//   return (
//     <motion.section
//       key="booking-industries"
//       className="section booking px-4 py-8"
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -30 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h2 className="text-2xl font-bold mb-6">{t("BOOK FOR INDUSTRIES")}</h2>

//       <form onSubmit={handleSubmit} className="form-container max-w-xl mx-auto space-y-4">
//         <label className="block font-medium">{t("Phone Number")}</label>
//         <div className="phone-input flex items-center border rounded px-2 py-1">
//           <span className="prefix mr-2">+91</span>
//           <input
//             type="tel"
//             name="phone"
//             placeholder={t("Enter your phone number")}
//             required
//             className="flex-1 outline-none"
//           />
//         </div>

//         <div className="industry-box border rounded p-4 space-y-3">
//           <h4 className="text-lg font-semibold">{t("Industry Gas Booking Details")}</h4>

//           <label className="block">{t("Industry/Company Name")}</label>
//           <input
//             type="text"
//             name="industryName"
//             placeholder={t("Enter Industry or Company Name")}
//             required
//             className="w-full border rounded px-2 py-1"
//           />

//           <label className="block">{t("Name of Gas")}</label>
//           <input
//             type="text"
//             name="gasName"
//             placeholder={t("Enter Gas Name")}
//             required
//             className="w-full border rounded px-2 py-1"
//           />

//           <label className="block">{t("Quantity")}</label>
//           <input
//             type="number"
//             name="gasQty"
//             placeholder={t("Enter Gas Quantity")}
//             required
//             className="w-full border rounded px-2 py-1"
//           />
//         </div>

//         {/* KYC Section */}
//         <div className="flex justify-center">
//           <div className="kyc-box w-full max-w-md p-4 border rounded shadow-md space-y-2">
//             <h4 className="text-lg font-semibold">{t("KYC Documents")}</h4>
//             <label className="block">{t("Upload Industry Certificate")}</label>
//             <input type="file" name="industryCertificate" required className="w-full" />
//           </div>
//         </div>

//         <label className="block">{t("Address")}</label>
//         <textarea
//           placeholder={t("Enter the correct address")}
//           required
//           className="w-full border rounded px-2 py-1"
//         />

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           type="submit"
//           className="bg-blue-600 text-white font-semibold px-4 py-2 rounded mt-4"
//         >
//           {t("Confirm Booking")}
//         </motion.button>
//       </form>
//     </motion.section>
//   );
// }
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";
// import { useState } from "react";

// export default function BookingIndustries() {
//   const { t } = useTranslation();
//   const [formData, setFormData] = useState({
//     phone: "",
//     industryName: "",
//     gasName: "",
//     gasQty: "",
//     address: "",
//     industryCertificate: null as File | null,
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value, files } = e.target as HTMLInputElement;
//     if (files && files.length > 0) {
//       setFormData({ ...formData, [name]: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const form = new FormData();
//     form.append("phone", formData.phone);
//     form.append("industryName", formData.industryName);
//     form.append("gasName", formData.gasName);
//     form.append("gasQty", formData.gasQty);
//     form.append("address", formData.address);
//     if (formData.industryCertificate) {
//       form.append("industryCertificate", formData.industryCertificate);
//     }

//     try {
//       const response = await fetch("https://formspree.io/f/mzzjvzrr", {
//         method: "POST",
//         body: form,
//         headers: {
//           Accept: "application/json",
//         },
//       });

//       if (response.ok) {
//         alert("✅ Booking submitted successfully!");
//         setFormData({
//           phone: "",
//           industryName: "",
//           gasName: "",
//           gasQty: "",
//           address: "",
//           industryCertificate: null,
//         });
//       } else {
//         alert("❌ Failed to send booking. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <motion.section
//       key="booking-industries"
//       className="section booking px-4 py-8"
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -30 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h2 className="text-2xl font-bold mb-6">{t("BOOK FOR INDUSTRIES")}</h2>

//       <form onSubmit={handleSubmit} className="form-container max-w-xl mx-auto space-y-4">
//         <label className="block font-medium">{t("Phone Number")}</label>
//         <div className="phone-input flex items-center border rounded px-2 py-1">
//           <span className="prefix mr-2">+91</span>
//           <input
//             type="tel"
//             name="phone"
//             placeholder={t("Enter your phone number")}
//             required
//             className="flex-1 outline-none"
//             value={formData.phone}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="industry-box border rounded p-4 space-y-3">
//           <h4 className="text-lg font-semibold">{t("Industry Gas Booking Details")}</h4>

//           <label className="block">{t("Industry/Company Name")}</label>
//           <input
//             type="text"
//             name="industryName"
//             placeholder={t("Enter Industry or Company Name")}
//             required
//             className="w-full border rounded px-2 py-1"
//             value={formData.industryName}
//             onChange={handleChange}
//           />

//           <label className="block">{t("Name of Gas")}</label>
//           <input
//             type="text"
//             name="gasName"
//             placeholder={t("Enter Gas Name")}
//             required
//             className="w-full border rounded px-2 py-1"
//             value={formData.gasName}
//             onChange={handleChange}
//           />

//           <label className="block">{t("Quantity")}</label>
//           <input
//             type="number"
//             name="gasQty"
//             placeholder={t("Enter Gas Quantity")}
//             required
//             className="w-full border rounded px-2 py-1"
//             value={formData.gasQty}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="flex justify-center">
//           <div className="kyc-box w-full max-w-md p-4 border rounded shadow-md space-y-2">
//             <h4 className="text-lg font-semibold">{t("KYC Documents")}</h4>
//             <label className="block">{t("Upload Industry Certificate")}</label>
//             <input
//               type="file"
//               name="industryCertificate"
//               required
//               className="w-full"
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         <label className="block">{t("Address")}</label>
//         <textarea
//           name="address"
//           placeholder={t("Enter the correct address")}
//           required
//           className="w-full border rounded px-2 py-1"
//           value={formData.address}
//           onChange={handleChange}
//         />

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           type="submit"
//           className="bg-blue-600 text-white font-semibold px-4 py-2 rounded mt-4"
//         >
//           {t("Confirm Booking")}
//         </motion.button>
//       </form>
//     </motion.section>
//   );
// }

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function BookingIndustries() {
  const { t } = useTranslation();

  return (
    <motion.section
      key="booking-industries"
      className="section booking px-4 py-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6">{t("BOOK FOR INDUSTRIES")}</h2>

      {/* 🔗 Replace with your Formspree endpoint */}
      <form
        action="https://formspree.io/f/mzzjvzrr"
        method="POST"
        className="form-container max-w-xl mx-auto space-y-4"
      >
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

        <div className="industry-box border rounded p-4 space-y-3">
          <h4 className="text-lg font-semibold">{t("Industry Gas Booking Details")}</h4>

          <label className="block">{t("Industry/Company Name")}</label>
          <input
            type="text"
            name="industryName"
            placeholder={t("Enter Industry or Company Name")}
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

        {/* 🧾 Instead of file upload, ask for Drive link */}
        <div className="flex justify-center">
          <div className="kyc-box w-full max-w-md p-4 border rounded shadow-md space-y-2">
            <h4 className="text-lg font-semibold">{t("KYC Documents")}</h4>
            <label className="block">{t("Paste Google Drive File Link")}</label>
            <input
              type="url"
              name="industryCertificateLink"
              placeholder={t("Paste your Google Drive document link here")}
              required
              className="w-full border rounded px-2 py-1"
            />
            <p className="text-xs text-gray-500">
              {t("Upload your file to Google Drive and paste the shareable link here.")}
            </p>
          </div>
        </div>

        <label className="block">{t("Address")}</label>
        <textarea
          name="address"
          placeholder={t("Enter the correct address")}
          required
          className="w-full border rounded px-2 py-1"
        />

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
