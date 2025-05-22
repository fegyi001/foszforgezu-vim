---
author: Padányi-Gulyás Gergely
date: YYYY.MM.DD.
paging: Foszforgézu 2025 | Slide %d / %d
---

# DOBD EL AZ EGERED

Avagy hogyan navigálj a kódban egér használata nélkül

---

# DOBD EL AZ EGERED

Vim / Neovim kedvcsináló

---

# KI AZ, AKI

---

## De miért?

- 💪 Hatékonyabb
- 😎 Menőbb
- ❤️ Nagyobb élvezet

---

## Mi a Vim / Neovim?

- 📝 Szövegszerkesztő (text editor)
- ⌨️ Terminál alapú
- 🚫🖱️ Egér használata nélkül

---

## Történet

### Vi - 1976

### Vim - 1991

- Vi improved

### Neovim - 2015

- plugin-ek
- LSP

---

## Neovim

- <https://survey.stackoverflow.co/2023/#section-admired-and-desired-integrated-development-environment>
- Visual Studio Code is the preferred IDE as far as what users want but Neovim has a higher proportion of users that want to continue using it next year (81% vs 77%).

---

## Vim vs. Vim motions

- VSCode
- IntelliJ (IDEA, PyCharm, WebStorm, stb.)
- Android Studio
- Sublime Text
- Jupyter Notebook
- Obsidian
- Zsh/Bash
- LazyGit
- etc.

---

## Indítás

- `vim` - Vim indítása
- `vim <filename>` - Vim indítása fájllal
- `nvim` - Neovim indítása
- `nvim <filename>` - Neovim indítása fájllal

---

## Mentés és kilépés

- `:q` - kilépés
- `:q!` - kilépés mentés nélkül
- `:wq` - mentés és kilépés
- `:w` - mentés

---

## Modal editor

NORMAL mode

INSERT mode

VISUAL mode

COMMAND mode

REPLACE mode

---

## Modal editor

### NORMAL mode

INSERT mode

VISUAL mode

COMMAND mode

REPLACE mode

---

## Modal editor

NORMAL mode

### INSERT mode

VISUAL mode

COMMAND mode

REPLACE mode

---

## Modal editor

NORMAL mode

INSERT mode

### VISUAL mode

COMMAND mode

REPLACE mode

---

## Modal editor

NORMAL mode

INSERT mode

VISUAL mode

### COMMAND mode

REPLACE mode

---

## Modal editor

NORMAL mode

INSERT mode

VISUAL mode

COMMAND mode

### REPLACE mode

---

## NORMAL mode

### Arrow keys (home row)

- `j` - le
- `k` - fel
- `h` - balra
- `l` - jobbra

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
- `e` - következő szó végére ugrik
- `W` - következő szó elejére ugrik (írásjelek figyelmen kívül hagyásával)
- `B` - előző szó elejére ugrik (írásjelek figyelmen kívül hagyásával)
- `E` - következő szó végére ugrik (írásjelek figyelmen kívül hagyásával)

---

## NORMAL mode

### Másolás, törlés, beillesztés

- `y` - másolás (yank)
- `x` - egy karakter törlése
- `d` - törlés (és vágólapra illesztés)
- `p` - beillesztés
- `P` - beillesztés a kurzor elé

---

## NORMAL mode

### Másolás, törlés teljes soron

- `yy` - teljes sor másolás
- `dd` - teljes sor törlés

---

## NORMAL mode

### Visszavonás, újra

- `u` - visszavonás
- `Ctrl+r` - újra

---

## INSERT mode

- `i` - INSERT módba lép a kurzor előtt
- `a` - INSERT módba lép a kurzor mögött
- `I` - INSERT módba lép a sor elején
- `A` - INSERT módba lép a sor végén
- `o` - új sort nyit INSERT módban
- `O` - új sort nyit fölötte INSERT módban
- `Esc` - vissza NORMAL módba

---

## VISUAL mode

- `v` - karakterek kijelölése (hjkl, b, w, e stb...)
- `V` - VISUAL LINE (V-LINE) mód, teljes sor kijelölése
- `Ctrl+v` - VISUAL BLOCK (V-BLOCK) mód, oszlop kijelölése

---

## REPLACE mode

- `r` - karaktert cserél
- `R` - REPLACE módba lép (több karakter cseréje)

---

## OPERATOR-PENDING mode

- `diw` - töröld a teljes szót
- `ciw` - módosítsd a teljes szót, INSERT módba vált
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

## Keresés

- `gd` - ugrás a definícióra
- `gr` - ugrás a referenciára

---

## Jumplist

- `C-o` - ugrás vissza
- `C-i` - ugrás előre
- `g;` - ugrás a legutóbb szerkesztett helyre
- `g,` - ugrás a legutóbb szerkesztett helyre (fordított sorrendben)
- `gv` - legutóbbi kijelölés helyreállítása

---

## LazyVim

- 2023
- Folke Lemaitre
- Neovim disztribúció (pre-configured setup)
- <https://www.lazyvim.org/>
- <https://lazyvim-ambitious-devs.phillips.codes/>

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

# MY CONFIG

## Neovim

- <https://github.com/fegyi001/nvim>

---

# MY CONFIG

## Dotfiles

- <https://github.com/fegyi001/dotfiles>
- tmux, zsh, wezterm, yazi, starship etc.

---

# DEMO
