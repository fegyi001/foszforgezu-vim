---
author: Padányi-Gulyás Gergely
date: YYYY.MM.DD.
paging: Foszforgézu 2025 | Slide %d / %d
---

# DOBD EL AZ EGERED

_Avagy hogyan navigálj a kódban egér használata nélkül, hatékonyan_

---

# DOBD EL AZ EGERED

_Vim motions kedvcsináló_

---

## De miért?

- 💪 Hatékonyabb
- ❤️ Nagyobb élvezet
- 😎 Menőbb

---

## Ki az, aki...?

---

## Mi a Vim?

- 📝 Szövegszerkesztő (text editor)
- ⌨️ Terminál alapú
- 🌍 Nyílt forráskódú
- 📅 Több évtizedes múltra tekint vissza
- 🖥️ Cross-platform (Linux, macOS, Windows)
- 🧩 Bővíthető és testreszabható

---

## Történet

### Vi - 1976

### Vim - 1991

### Neovim - 2015

---

## Statisztika

<https://survey.stackoverflow.co/2024/technology#2-integrated-development-environment>

| Editor             | 🏆 Legnépszerűbb   | ❤️ Legjobban kedvelt |
| ------------------ | ------------------ | -------------------- |
| Visual Studio Code | 73% (1. helyezett) | 77%                  |
| Vim                | 22%                | 69%                  |
| Neovim             | 12.5%              | 83% (1. helyezett)   |

---

## Mi a Vim motions?

- 🖋️ Vim szerkesztési stílus
- 🚫🖱️ Egér használata nélküli navigáció / szerkesztés
- 🧠 Memorizálható billentyűparancsok
- 📚 Különböző módok
- 🛠️ Különböző szerkesztési műveletek
- 🌐 Integrálható más eszközökkel

---

## Vim !== Vim motions

Plugin-ek segítségével:

- VSCode
- IntelliJ (IDEA, PyCharm, WebStorm, stb.)
- Android Studio
- Jupyter Notebook
- Obsidian
- stb.

---

## Modal editor

NORMAL mode

INSERT mode

...

---

## Modal editor

### NORMAL mode

INSERT mode

...

---

## Modal editor

NORMAL mode

### INSERT mode

...

---

## Modal editor

NORMAL mode

INSERT mode

### VISUAL mode, REPLACE mode, OPERATOR-PENDING mode stb

---

## Ökölszabály

- _NORMAL_ mode: amennyit csak lehet

- _INSERT_ mode: csak amennyit muszáj

---

## NORMAL mode

### Arrow keys (home row)

- `h` - ← balra
- `j` - ↓ le
- `k` - ↑ fel
- `l` - → jobbra

---

## NORMAL mode

### Sor eleje, vége

- `0` - sor első karakterére ugrik
- `$` - sor utolsó karakterére ugrik

---

## NORMAL mode

### Fájl eleje, vége

- `gg` - fájl elejére ugrik
- `G` - fájl végére ugrik

---

## NORMAL mode

### Ugrás

- `C-u` - fél képernyőnyit felfelé ugrik
- `C-d` - fél képernyőnyit lefelé ugrik

---

## NORMAL mode

### Ugrás egy szónyit

- `w` - következő szó elejére ugrik
- `b` - előző szó elejére ugrik
- `e` - aktuális szó végére ugrik

---

## NORMAL mode

### Törlés, másolás, beillesztés

- `x` - egy karakter törlése
- `d` - kijelölés törlése (és vágólapra illesztés)
- `y` - kijelölés másolása (yank)
- `p`, `P` - beillesztés

---

## NORMAL mode

### Törlés, másolás teljes soron

- `dd` - teljes sor törlése
- `cc` - teljes sor törlése és _INSERT_ módba lépés
- `yy` - teljes sor másolása

---

## NORMAL mode

### Visszavonás, újra

- `u` - visszavonás
- `Ctrl+r` - újra

---

## INSERT mode

- `i` - _INSERT_ módba lép a kurzor előtt
- `a` - _INSERT_ módba lép a kurzor mögött
- `I` - _INSERT_ módba lép a sor elején
- `A` - _INSERT_ módba lép a sor végén
- `o` - új sort nyit _INSERT_ módban
- `O` - új sort nyit fölötte _INSERT_ módban
- `Esc` - vissza _NORMAL_ módba

---

## VISUAL mode

- `v` - karakterek kijelölése (innen `hjkl`, `b`, `w`, `e` stb...)
- `V` - _VISUAL LINE (V-LINE)_ mód, teljes sor kijelölése
- `Ctrl+v` - _VISUAL BLOCK (V-BLOCK)_ mód, oszlop kijelölése
- `o` - kijelölés másik végére ugrás
- `Esc` - vissza _NORMAL_ módba

---

## REPLACE mode

- `r` - karaktert cserél
- `R` - REPLACE módba lép (több karakter cseréje)
- `Esc` - vissza _NORMAL_ módba

---

## OPERATOR-PENDING mode

- `diw` - töröld a teljes szót
- `ciw` - módosítsd a teljes szót, _INSERT_ módba vált
- `yip` - töröld a teljes bekezdést
- `vi'` - jelöld ki az idézőjel közötti részt
- `di{` - töröld a kapcsos zárójelek közötti részt
- `ca(` - módosítsd a zárójelek közötti részt, zárójelekkel együtt, INSERT módba vált
- `dt(` - töröld a zárójelig (zárójelet már ne)
- `df)` - töröld a zárójelig (zárójelet is)

---

## Keresés

- `/` - keresés előrefelé
- `?` - visszafelé keresés
- `n` - következő találat
- `N` - előző találat
- `*` - következő szó keresése
- `#` - előző szó keresése

---

## Keresés (LSP - Language Server Protocol)

- `gd` - ugrás a definícióra
- `gr` - ugrás a referenciára

---

## Jumplist

- `C-o` - ugrás vissza
- `C-i` - ugrás előre

---

## Vegyes

- `.` - ismétli az utolsó parancsot
- `g;` - ugrás a legutóbb szerkesztett helyre
- `gv` - legutóbbi kijelölés helyreállítása

---

## Nvim disztribúciók

- LazyVim
- NvChad
- LunarVim
- AstroNvim
- Kickstart.nvim

---

## LazyVim

- <https://www.lazyvim.org/>
- <https://lazyvim-ambitious-devs.phillips.codes/>

## Kickstart.nvim

- <https://github.com/nvim-lua/kickstart.nvim>

---

## LazyVim

- 🌐 LSP
- 🌳 Treesitter
- 📦 Plugin manager
- ✨ Autocompletion
- 󰊢 Git integration
- 🔍 Fuzzy finder
- 📂 File explorer
- 🎨 Colorscheme
- ⌨️ Keymaps

---

# DEMO

- <https://github.com/fegyi001/foszforgezu-vim>

---

# MY CONFIG

## Neovim

- <https://github.com/fegyi001/nvim>

---

# MY CONFIG

## Dotfiles

- <https://github.com/fegyi001/dotfiles>
- tmux, zsh, wezterm, yazi, starship stb.

---

# SLIDES

- <https://github.com/maaslalani/slides>
- markdown alapú prezentációs eszköz
- parancssoros
