# vision-pro-pano-viewer

Simple A-Frame 1.6.0 panorama viewer for GitHub Pages, intended to be opened over HTTPS in Safari on Apple Vision Pro.

Included test asset:

- `demo-panorama.png` is a bundled 2:1 panorama you can load with the on-page `Load Demo Panorama` button to verify that the viewer works before testing your own file.


## Vision Pro Workflow

1. Open the GitHub Pages URL in Safari on Apple Vision Pro.
2. First try `Load Demo Panorama` to confirm the viewer itself is working.
3. Then choose a local JPG or PNG panorama.
4. Grant motion/orientation permission if Safari prompts for it.
5. Enter XR / immersive mode if the browser reports that it is available.
6. Compare sharpness and viewing behavior against your native RealityKit app.

## Notes

- The page assumes standard 2:1 equirectangular panoramas, such as `8192x4096`.
- The selected image remains local to the browser session and is loaded with `URL.createObjectURL(...)`.
- A-Frame uses `look-controls` for orientation-driven viewing, but browser behavior on Vision Pro can differ from a native immersive app.
- WebXR support and immersive mode availability vary by Safari version, so the page logs XR availability in the browser console.
- Motion permission behavior varies across Apple platforms, so the page includes a dedicated permission button and logs the result in the browser console.
