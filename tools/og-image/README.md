# og-image

Regenerate `assets/og-image.png` by screenshotting `og-image.html` at 1200x630 with any headless Chrome/Chromium, from the repository root:

```bash
chrome --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --screenshot=assets/og-image.png --window-size=1200,630 tools/og-image/og-image.html
```
