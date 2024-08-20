# PrimeVideo X-Ray Blocker

[![Chrome Web Store](https://img.shields.io/badge/Chrome%20Web%20Store-PrimeVideo%20X--Ray%20Blocker-brightgreen?style=for-the-badge&logo=google-chrome)](https://chromewebstore.google.com/detail/acijakofobffmjdhkdcijbmcledbeikg?hl=tr&authuser=0)

PrimeVideo X-Ray Blocker is a lightweight Chrome extension that disables Amazon Prime Video's X-Ray feature. With this extension, you can enjoy uninterrupted viewing by blocking those often intrusive X-Ray info pop-ups while watching your favorite shows and movies on Prime Video.

![Icon](https://raw.githubusercontent.com/firatkaanbitmez/primevideo-xray-blocker-extension/main/source/icon128.png)

## Features

- **Disables Prime Video's X-Ray feature**: Blocks X-Ray pop-ups that appear while watching videos.
- **Toggle Control**: Easily enable or disable the feature with a simple switch.
- **User-Friendly Interface**: Clean and intuitive design for seamless usage.
- **Easy Installation and Setup**: Quickly set up and start using the extension with minimal effort.

![Extension Enable/Disable](https://raw.githubusercontent.com/firatkaanbitmez/primevideo-xray-blocker-extension/main/source/image.png)

## Download and Installation

You can directly download the extension from the Chrome Web Store by clicking the button below:

[![Get it on Chrome Web Store](https://img.shields.io/badge/Get%20it%20on-Chrome%20Web%20Store-blue?style=for-the-badge&logo=google-chrome)](https://chromewebstore.google.com/detail/acijakofobffmjdhkdcijbmcledbeikg?hl=tr&authuser=0)

Alternatively, you can install it manually by following these steps:

1. Clone the repository or download it as a ZIP file:
    ```sh
    git clone https://github.com/firatkaanbitmez/primevideo-xray-blocker-extension.git
    ```
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer Mode** at the top-right corner.
4. Drag and drop the `.crx` file from the project folder onto the `chrome://extensions/` page.
5. Click "Install" to complete the setup.

## Fixing Chrome and Edge Errors

If you encounter the following warnings during installation:

EN: _"This extension is not from any known source, and may have been added without your knowledge."_

TR: _"Bu uzantı, bilinen herhangi bir kaynaktan değil ve bilginiz dışında eklenmiş olabilir."_

Follow these steps to resolve the issue:

- Run the `fix.bat` file located in the project folder as an administrator. This will adjust the necessary Windows Registry settings to support the extension installation.
- After the process completes, restart your browser for the changes to take effect.

## Usage

1. Once installed, you will see the `PrimeVideo X-Ray Blocker` icon in your browser toolbar.
2. Navigate to Amazon Prime Video and open any video.
3. Click the extension icon in the toolbar to toggle the X-Ray feature on or off.

### X-Ray Feature Disabled
![X-Ray Disable](https://raw.githubusercontent.com/firatkaanbitmez/primevideo-xray-blocker-extension/main/source/img_disable.png)

### X-Ray Feature Enabled
![X-Ray Enable](https://raw.githubusercontent.com/firatkaanbitmez/primevideo-xray-blocker-extension/main/source/img_enable.png)

## Browser Compatibility

This extension has been tested on the following browsers:

- ![Chrome](https://img.icons8.com/color/48/000000/chrome--v1.png) **Chrome** ✔️
- ![Edge](https://img.icons8.com/color/48/000000/ms-edge-new.png) **Edge** ✔️ (Unstable)
- ![Opera](https://img.icons8.com/color/48/000000/opera--v1.png) **Opera** ✔️

## Project Structure

- `background.js`: Handles background processes for the extension.
- `content.js`: Contains the script that runs on Prime Video to block the X-Ray feature.
- `manifest.json`: The configuration file defining the extension’s behavior and settings.
- `popup.html`: The extension’s user interface.
- `popup.js`: The script managing the user interface functionality.
