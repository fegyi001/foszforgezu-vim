# DOBD EL AZ EGERED

Hogyan navigálj a kódban egér használata nélkül

---

# DOBD EL AZ EGERED

Vim / Neovim kezdőknek

---

## De miért?

- ⌨ Keyboard-first workflow
- ⚡ Gyorsabb szerkesztés
- 🎯 Precízebb kontroll
- 🔄 Mindenhol működik
- 🧠 Hosszútávú befektetés

---

## Mi a Vim / Neovim?

- 📝 Szövegszerkesztő
- ⌨️ Terminál alapú
- 🚫🖱️ Egér használata nélkül

---

## Vi

- 1976
- Bill Joy

---

## Vim

- 1991
- Bram Moolenaar
- Vi IMproved
- Vimscript
- szervereken tulajdonképpen mindenhol

---

## Neovim

- 2015
- Thiago de Arruda
- Vim fork
- Lua
- LSP (Language Server Protocol)
- plugin architektúra
- IDE vs. PDE (Personal Development Environment)

---

## Neovim

- <https://survey.stackoverflow.co/2023/#section-admired-and-desired-integrated-development-environment>
- Visual Studio Code is the preferred IDE as far as what users want but Neovim has a higher proportion of users that want to continue using it next year (81% vs 77%).

---

## Alternatívák

- Emacs
- Helix

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

---

## NORMAL mode

### Arrow keys

- `j` - lefele nyíl
- `k` - felfele nyíl
- `h` - balra nyíl
- `l` - jobbra nyíl

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

- `y` - másolás (`yank`)
- `d` - törlés (és vágólapra illesztés)
- `p` - beillesztés
- `P` - beillesztés a kurzor elé
- `x` - törlés

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

---

## INSERT mode

- `i` - INSERT módba lép a kurzor előtt
- `a` - INSERT módba lép a kurzor mögött
- `I` - INSERT módba lép a sor elején
- `A` - INSERT módba lép a sor végén
- `o` - új sort nyit INSERT módban
- `O` - új sort nyit fölötte INSERT módban

---

## VISUAL mode

---

## VISUAL mode

- `v` - VISUAL módba lép
- `V` - VISUAL LINE (V-LINE) módba lép (teljes sor kijelölése)
- `Ctrl+v` - VISUAL BLOCK (V-BLOCK) módba lép (oszlop kijelölése)

---

## REPLACE mode

---

## REPLACE mode

- `r` - karaktert cserél
- `R` - REPLACE módba lép (több karakter cseréje)

---

## OPERATOR-PENDING (O-PENDING) mode

-
