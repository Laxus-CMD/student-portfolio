# Project images

Drop one image per project into the **`images/`** folder (`assets/projects/images/`) using these filenames:

| Project | File |
| --- | --- |
| Amarra | `amarra.jpg` |
| College Hub | `college-hub.jpg` |
| Hinigram | `hinigram.jpg` |
| 30th PCPUG Technical Forum | `pcpug-forum.jpg` |
| Notion Workspace Briefing | `notion-relaunch.jpg` |

**Tips**

- Landscape works best: about **1600 × 1000 px (16:10)**. Images are cropped to fill the card, and the same image is used, taller, at the top of the case-study pop-up.
- Want a `.png` or `.webp` instead? Change the `image:` path for that project at the top of `script.js`.
- If the important part gets cropped, add `imagePosition: "top"` (or `"left"`, `"30% 20%"`, etc.) to that project in `script.js`.
- No image yet? The card keeps its generated glass mock-up. While you preview locally, a dashed hint shows the filename to use; it never appears on the published site.
- Keep files under ~300 KB so the page stays fast (export as JPG/WebP at ~80% quality).
