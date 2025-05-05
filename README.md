# 🥗 Sağlıklı Tarifler Mobil Uygulaması

Bu proje, **React Native + Expo** kullanılarak geliştirilen modern bir mobil uygulamadır. Kullanıcılara sağlıklı ve lezzetli yemek tariflerini sade ve kullanıcı dostu bir arayüzle sunar. Uygulama, **mobil cihazlar** ve **web tarayıcıları** üzerinde sorunsuz çalışacak şekilde optimize edilmiştir.

---

## ✨ Özellikler

- ✅ Karşılama (Giriş) ekranı  
- ✅ Tariflerin listelendiği ana ekran  
- ✅ Tarif detay sayfası:
  - 🧂 Malzemeler (ikon destekli)
  - 📋 Hazırlık adımları
  - 🍽️ Besin değerleri (protein, yağ, karbonhidrat)
  - ⏱️ Süre etiketi (örneğin: `15dk` süren yeşil rozet)
- ✅ Mobil ve web uyumlu tasarım
- ❌ NativeWind/TailwindCSS **kullanılmadı** — tüm stiller `StyleSheet.create` ile verildi

---

## 🧩 Kullanılan Teknolojiler

| Teknoloji         | Açıklama                                         |
|-------------------|--------------------------------------------------|
| **React Native**  | Mobil uygulama geliştirme çatısı                |
| **Expo**          | Hızlı geliştirme, test ve dağıtım aracı         |
| **TypeScript**    | Güvenli ve anlaşılır kodlama deneyimi           |
| **Expo Router**   | Dosya tabanlı sayfa yönlendirme sistemi         |
| **StyleSheet**    | Klasik stil tanımlama yöntemi (tailwind yerine) |

---

## 🚀 Kurulum ve Çalıştırma

Projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyin:

```bash
# 1️⃣ Depoyu klonlayın
git clone https://github.com/ACKNOWLEDGEME41/healthy-recipes-app.git
cd healthy-recipes-app

# 2️⃣ Bağımlılıkları yükleyin
npm install

# 3️⃣ Uygulamayı başlatın
npx expo start
