// src/components/CitySelector.tsx

'use client'; // <-- 這行是關鍵！它告訴 Next.js 這是一個客戶端元件

import { useRouter, useSearchParams } from 'next/navigation';

// 台灣縣市列表
const CITIES = [
  "臺北市", "新北市", "桃園市", "臺中市", "臺南市", "高雄市",
  "基隆市", "新竹縣", "新竹市", "苗栗縣", "彰化縣", "南投縣",
  "雲林縣", "嘉義縣", "嘉義市", "屏東縣", "宜蘭縣", "花蓮縣",
  "臺東縣", "澎湖縣", "金門縣", "連江縣"
];

export default function CitySelector() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCity = searchParams.get('city') || '臺北市'; // 從 URL 讀取當前城市，預設為臺北市

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newCity = event.target.value;
    // 使用 router.push 來改變 URL，觸發 page.tsx 重新渲染
    router.push(`/?city=${newCity}`);
  };

  return (
    <div className="mb-4">
      <label htmlFor="city-select" className="mr-2 font-semibold text-white/90">選擇縣市：</label>
      <select
        id="city-select"
        value={currentCity}
        onChange={handleCityChange}
        className="rounded-md bg-white/30 px-3 py-2 text-white placeholder-white shadow-sm focus:border-sky-300 focus:outline-none focus:ring focus:ring-sky-200 focus:ring-opacity-50"
      >
        {CITIES.map((city) => (
          <option key={city} value={city} className="text-black">
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}