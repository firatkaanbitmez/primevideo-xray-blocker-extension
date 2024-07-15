# PrimeVideo X-Ray Blocker

PrimeVideo X-Ray Blocker, Amazon Prime Video'nun X-Ray özelliğini devre dışı bırakmak için geliştirilmiş bir Chrome uzantısıdır. Bu uzantı, Prime Video izlerken ekranı kaplayan X-Ray bilgi pencerelerini devre dışı bırakmanıza olanak tanır.

![Icon](https://github.com/firatkaanbitmez/primevideo-xray-blocker-extension/blob/main/icon128.png)

## Özellikler

- Prime Video'nun X-Ray özelliğini devre dışı bırakma
- Kullanıcı dostu arayüz
- Kolay kurulum ve kullanım

## Kurulum

1. Bu projeyi klonlayın veya ZIP dosyası olarak indirin.
    ```sh
    git clone https://github.com/firatkaanbitmez/primevideo-xray-blocker-extension.git
    ```
2. Chrome tarayıcısında `chrome://extensions/` adresine gidin.
3. Sağ üst köşedeki `Geliştirici modu` seçeneğini etkinleştirin.
4. `Paketlenmemiş uzantı yükle` butonuna tıklayın.
5. Proje klasörünü seçin.

## Kullanım

1. Uzantı yüklendikten sonra tarayıcınızın araç çubuğunda `PrimeVideo X-Ray Blocker` simgesini göreceksiniz.
2. Prime Video'ya gidin ve izlemek istediğiniz videoyu açın.
3. Araç çubuğundaki uzantı simgesine tıklayarak X-Ray özelliğini etkinleştirin veya devre dışı bırakın.

### X-Ray Özelliği Devre Dışı
![X-Ray Disable](https://github.com/firatkaanbitmez/primevideo-xray-blocker-extension/blob/main/img_disable.png)

### X-Ray Özelliği Etkin
![X-Ray Enable](https://github.com/firatkaanbitmez/primevideo-xray-blocker-extension/blob/main/img_enable.png)

### Dosya Yapısı

- `background.js`: Uzantının arka plan işlemlerini yöneten dosya.
- `content.js`: Prime Video sayfasında çalışan ve X-Ray özelliğini devre dışı bırakan betik.
- `manifest.json`: Uzantının yapılandırma dosyası.
- `popup.html`: Uzantının kullanıcı arayüzü.
- `popup.js`: Kullanıcı arayüzü için betik dosyası.
