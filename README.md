# PrimeVideo X-Ray Blocker

PrimeVideo X-Ray Blocker, Amazon Prime Video'nun X-Ray özelliğini devre dışı bırakmak için geliştirilmiş bir Chrome uzantısıdır. Bu uzantı, Prime Video izlerken ekranı kaplayan X-Ray bilgi pencerelerini devre dışı bırakmanıza olanak tanır.

## Özellikler

- Prime Video'nun X-Ray özelliğini devre dışı bırakma
- Kullanıcı dostu arayüz
- Kolay kurulum ve kullanım

## Kurulum

### Chrome Web Mağazası

1. [Chrome Web Mağazası](https://chrome.google.com/webstore) sayfasına gidin.
2. `PrimeVideo X-Ray Blocker` uzantısını arayın.
3. `Chrome'a Ekle` butonuna tıklayın.
4. Uzantıyı yükleyin ve tarayıcınızı yeniden başlatın.

### Manuel Kurulum

1. Bu projeyi klonlayın veya ZIP dosyası olarak indirin.
    ```sh
    git clone https://github.com/kullaniciadi/primevideo-xray-blocker-extension.git
    ```
2. Chrome tarayıcısında `chrome://extensions/` adresine gidin.
3. Sağ üst köşedeki `Geliştirici modu` seçeneğini etkinleştirin.
4. `Paketlenmemiş uzantı yükle` butonuna tıklayın.
5. Proje klasörünü seçin.

## Kullanım

1. Uzantı yüklendikten sonra tarayıcınızın araç çubuğunda `PrimeVideo X-Ray Blocker` simgesini göreceksiniz.
2. Prime Video'ya gidin ve izlemek istediğiniz videoyu açın.
3. Araç çubuğundaki uzantı simgesine tıklayarak X-Ray özelliğini etkinleştirin veya devre dışı bırakın.

## Geliştirme

### Gereksinimler

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Projeyi Çalıştırma

1. Gerekli bağımlılıkları yükleyin.
    ```sh
    npm install
    ```
2. Projeyi başlatın.
    ```sh
    npm start
    ```

### Dosya Yapısı

- `background.js`: Uzantının arka plan işlemlerini yöneten dosya.
- `content.js`: Prime Video sayfasında çalışan ve X-Ray özelliğini devre dışı bırakan betik.
- `manifest.json`: Uzantının yapılandırma dosyası.
- `popup.html`: Uzantının kullanıcı arayüzü.
- `popup.js`: Kullanıcı arayüzü için betik dosyası.

## Katkıda Bulunma

Katkılarınızı bekliyoruz! Her türlü katkı için lütfen bir pull request oluşturun. Büyük değişiklikler için lütfen önce bir tartışma başlatmak üzere bir issue açın.

### Nasıl Katkıda Bulunabilirim?

1. Projeyi forklayın.
2. Kendi dalınızı oluşturun (`git checkout -b özellik/BenimYeniÖzelliğim`).
3. Değişikliklerinizi yapın ve commit edin (`git commit -am 'Yeni özellik ekle'`).
4. Dalınıza push edin (`git push origin özellik/BenimYeniÖzelliğim`).
5. Bir pull request oluşturun.

## Lisans

Bu proje MIT Lisansı ile lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasına bakabilirsiniz.

## İletişim

- **Fırat Kaan Bitmez**
- Email: [firatbitmez@gmail.com](mailto:firatbitmez@gmail.com)
- [Web Sitesi](https://www.firatbitmez.com)
- [LinkedIn](https://www.linkedin.com/in/firatbitmez)
- [GitHub](https://github.com/kullaniciadi)

