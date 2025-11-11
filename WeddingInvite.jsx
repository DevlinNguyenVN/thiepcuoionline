import React, { useState } from "react";
import { motion } from "framer-motion";

export default function WeddingInvite() {
  const [groom, setGroom] = useState("Nguyễn Văn A");
  const [bride, setBride] = useState("Trần Thị B");
  const [dateTime, setDateTime] = useState("Thứ Bảy, 20 Tháng 6, 2026 — 17:00");
  const [venueName, setVenueName] = useState("Nhà hàng Hoa Mai");
  const [venueAddress, setVenueAddress] = useState("123 Đường Lương, Quận 1, TP.HCM");
  const [message, setMessage] = useState("Chúng tôi trân trọng kính mời quý khách đến chung vui cùng hai họ.");
  const photos = [
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=1200&q=80",
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=1200&q=80"
  ];
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-50 via-white to-yellow-50">
      <div className="max-w-4xl bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-serif text-rose-600 mb-4 text-center">{groom} & {bride}</h1>
        <p className="text-center text-gray-600 mb-4">{message}</p>
        <p className="text-center text-gray-800 font-medium">{dateTime}</p>
        <p className="text-center text-gray-600 mb-4">{venueName} - {venueAddress}</p>
        <div className="grid grid-cols-2 gap-4">
          {photos.map((p,i)=>(
            <img key={i} src={p} className="rounded-lg shadow" alt="photo" />
          ))}
        </div>
        <div className="text-center mt-6 text-gray-500 text-sm">Thiết kế bởi Thiệp Cưới Online</div>
      </div>
    </div>
  );
}
