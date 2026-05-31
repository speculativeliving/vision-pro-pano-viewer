# vision-pro-pano-viewer

Simple A-Frame 1.6.0 panorama viewer for GitHub Pages, intended to be opened over HTTPS in Safari on Apple Vision Pro for stable non-immersive panorama preview.

Included test asset:

- `demo-panorama.png` is a bundled 2:1 panorama you can load with the on-page `Load Demo Panorama` button to verify that the viewer works before testing your own file.

## Setup

1. Create a GitHub repository named `vision-pro-pano-viewer`.
2. Upload `index.html`, `README.md`, and `demo-panorama.png` to the repository root on the `main` branch.
3. In GitHub, open `Settings` -> `Pages`.
4. Under `Build and deployment`, set `Source` to `Deploy from a branch`.
5. Choose the `main` branch and the `/ (root)` folder, then save.
6. Visit:

   `https://USERNAME.github.io/vision-pro-pano-viewer/`

## Vision Pro Workflow

1. Open the GitHub Pages URL in Safari on Apple Vision Pro.
2. First try `Load Demo Panorama` to confirm the viewer itself is working.
3. Then choose a local JPG or PNG panorama.
4. Grant motion/orientation permission if Safari prompts for it.
5. Use `Recenter View` if the orientation feels off after resizing or moving between windows.
6. Compare sharpness and viewing behavior against your native RealityKit app.

## Notes

- The page assumes standard 2:1 equirectangular panoramas, such as `8192x4096`.
- The selected image remains local to the browser session and is loaded with `URL.createObjectURL(...)`.
- A-Frame uses `look-controls` for orientation-driven viewing, but browser behavior on Vision Pro can differ from a native immersive app.
- This version intentionally avoids immersive Safari XR because that path is currently unreliable for this workflow on Vision Pro.
- Motion permission behavior varies across Apple platforms, so the page includes a dedicated permission button and logs the result in the browser console.
