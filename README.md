# PrimeVideo X-Ray Blocker

PrimeVideo X-Ray Blocker, Amazon Prime Video'nun X-Ray özelliğini devre dışı bırakmak için geliştirilmiş bir Chrome uzantısıdır. Bu uzantı, Prime Video izlerken ekranı kaplayan X-Ray bilgi pencerelerini devre dışı bırakmanıza olanak tanır.

![Icon](https://raw.githubusercontent.com/firatkaanbitmez/primevideo-xray-blocker-extension/main/source/icon128.png)

## Özellikler

- Prime Video'nun X-Ray özelliğini devre dışı bırakma
- Default olarak devre dışı bırakılmış şekilde gelir (Switch-Enable)
- Kullanıcı dostu arayüz
- Kolay kurulum ve kullanım

## Kurulum

1. Bu projeyi klonlayın veya ZIP dosyası olarak indirin.
    ```sh
    git clone https://github.com/firatkaanbitmez/primevideo-xray-blocker-extension.git
    ```
2. Chrome tarayıcısında `chrome://extensions/` adresine gidin.
3. Geliştirici Modunu Aktif edin
4. Proje içerisindeki `.crx` uzantılı dosyayı sürükleyip bırak yöntemiyle `chrome://extensions/` sekmesine atın.
5. "Yükle" butonuna tıklayın.

## Kullanım

1. Uzantı yüklendikten sonra tarayıcınızın araç çubuğunda `PrimeVideo X-Ray Blocker` simgesini göreceksiniz.
2. Prime Video'ya gidin ve izlemek istediğiniz videoyu açın.
3. Araç çubuğundaki uzantı simgesine tıklayarak X-Ray özelliğini etkinleştirin veya devre dışı bırakın.

### X-Ray Özelliği Devre Dışı
![X-Ray Disable](https://raw.githubusercontent.com/firatkaanbitmez/primevideo-xray-blocker-extension/main/source/img_disable.png)

### X-Ray Özelliği Etkin
![X-Ray Enable](https://raw.githubusercontent.com/firatkaanbitmez/primevideo-xray-blocker-extension/main/source/img_enable.png)

## Tarayıcı Uyumluluğu

Bu uzantı aşağıdaki tarayıcılarda test edilmiştir:

- ![Chrome](https://img.icons8.com/color/48/000000/chrome--v1.png) **Chrome** ✔️
- ![Edge](https://img.icons8.com/color/48/000000/ms-edge-new.png) **Edge** ✔️
- ![Opera](https://img.icons8.com/color/48/000000/opera--v1.png) **Opera** ✔️

## Dosya Yapısı

- `background.js`: Uzantının arka plan işlemlerini yöneten dosya.
- `content.js`: Prime Video sayfasında çalışan ve X-Ray özelliğini devre dışı bırakan betik.
- `manifest.json`: Uzantının yapılandırma dosyası.
- `popup.html`: Uzantının kullanıcı arayüzü.
- `popup.js`: Kullanıcı arayüzü için betik dosyası.
