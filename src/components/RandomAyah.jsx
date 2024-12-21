const ayahs = [
  {
    arabic: "وَإِذَا قِيلَ لَهُمْ لَا تُفْسِدُوا فِي الْأَرْضِ قَالُوا إِنَّمَا نَحْنُ مُصْلِحُونَ",
    translation:
      "আর যখন তাদেরকে বলা হয়, ‘পৃথিবীতে দুষ্কর্ম করো না,’ তারা বলে, ‘আমরা তো সংশোধনকারী।’",
    reference: "আল-কুরআন ২:১১",
  },
  {
    arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "নিশ্চয়ই কঠিনের সাথে সহজ রয়েছে।",
    reference: "আল-কুরআন ৯৪:৬",
  },
  {
    arabic: "وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ",
    translation: "নামাজ কায়েম করো এবং যাকাত দাও।",
    reference: "আল-কুরআন ২:৪৩",
  },
  {
    arabic:
      "وَمَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
    translation:
      "যে আল্লাহর উপর ভরসা করে, তার জন্য তিনিই যথেষ্ট।",
    reference: "আল-কুরআন ৬৫:৩",
  },
  {
    arabic: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
    translation: "নিশ্চয়ই আল্লাহ ধৈর্যশীলদের সঙ্গে আছেন।",
    reference: "আল-কুরআন ২:১৫৩",
  },
  {
    arabic:
      "إِنَّ اللَّهَ غَفُورٌ رَحِيمٌ",
    translation: "নিশ্চয়ই আল্লাহ অতি ক্ষমাশীল, দয়ালু।",
    reference: "আল-কুরআন ২:১৭۳",
  },
  {
    arabic:
      "وَلَا تَقْرَبُوا الزِّنَا إِنَّهُ كَانَ فَاحِشَةً",
    translation: "ব্যভিচারের ধারে কাছে যেও না; এটা অতি জঘন্য কাজ।",
    reference: "আল-কুরআন ১৭:৩২",
  },
  {
    arabic: "وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا",
    translation:
      "তোমরা সকলে আল্লাহর দড়ি শক্তভাবে ধারণ করো।",
    reference: "আল-কুরআন ৩:১০৩",
  },
  {
    arabic: "وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ",
    translation: "ধৈর্য ও নামাজের মাধ্যমে সাহায্য প্রার্থনা করো।",
    reference: "আল-কুরআন ২:৪৫",
  },
  {
    arabic: "وَلَا تَيْأَسُوا مِنْ رَوْحِ اللَّهِ",
    translation: "আল্লাহর রহমত থেকে নিরাশ হয়ো না।",
    reference: "আল-কুরআন ১২:৮۷",
  },
];

// Random Ayah Component
export default function RandomAyah() {

  const randomAyah = ayahs[Math.floor(Math.random() * ayahs.length)];

  return (  
      <div className="ayah-box">
        <p className="arabic-text">{randomAyah.arabic}</p>
        <p className="translation-text">{randomAyah.translation}</p>
        <p className="reference-text">{randomAyah.reference}</p>
      </div> 
  )
}