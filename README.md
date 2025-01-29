# Langkah - Langkah

- npm init
- npm create vite@latest
- remove exiting, react, javaScript
- cd, npm install, npm run dev

## Mengonfigurasi Tailwind CSS

- Instal Tailwind CSS beserta dependensinya:
  ```sh
  npm install -D tailwindcss postcss autoprefixer
  ```
- Inisialisasi Tailwind CSS:
  ```sh
  npx tailwindcss init -p
  ```
- Buka file `tailwind.config.js`, lalu ubah bagian `content` menjadi:

  ```js
  /** @type {import('tailwindcss').Config} */
  export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  ```

- Buka `src/index.css` atau `src/App.css`, lalu tambahkan kode berikut:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

---

## Hit API dari Backend

1. useState untuk store data secara state react nya | app.jsx
2. fetch data | app.jsx
3. instal axios
   - npm i axios
4. function async untuk fetch data lewat API axios
5. panggil functionya

hasil fect api sukses atau tidak inspact/network/fetch/response
![Deskripsi Gambar](public/images/fetch.png)

6. menyimpan data ke state (update)
7. tambah defind dependensi array kosong
   warning: infinite looping
   use effect harus ada parameter kedua (defind dependensis) yang menandakan jangan proses terus menerus, hanya terjadi saat komponen render pertama saja
8. panggil shop sebagai data
   key = mengambil setiap index dari datanya
   sesuaikan dengan nama tabelnya
   disini menggunakan shop karena data product belum selesai di BE (jika product sudah selesai maka langsung gunakan product)

## Eror

9. state untuk menyimpan error dan buat di try catch
   sesuatu yang null (sesuatu yang gak ada)
10. kondisional rendering untuk User Interface (UI) dan User Experience (UX)

## Loading

11. state Loading
    selalu dibuat dalam keadaan true (akan selalu loading)
12. saat fetch API simpan di Finaly
    jika ada eror akan trus loading dan saat berhasil akan selesai (mengakhirkan loading)
13. tambah loading di atas error untuk UI/UX

## Authenticate

untuk membuat user login dulu baru bisa get API

- nyalakan authenticate di BE

```js
router.get("", authenticate, shopController.getAllShop);
```

- maka di FE akan gagal fetch API nya
