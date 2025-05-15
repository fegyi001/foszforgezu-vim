# DOBD EL AZ EGERED

Hogyan navigálj a kódban egér használata nélkül

---

# DOBD EL AZ EGERED

Vim / Neovim kezdőknek

---

## De miért?

- ⚡ Gyorsabb szerkesztés
- ⌨ Keyboard-first workflow
- 🎯 Precízebb kontroll
- 🔄 Mindenhol működik
- 🧠 Hosszútávú befektetés

---

## Mi a Vim / Neovim?

- Szövegszerkesztő
- Terminál alapú
- Egér használata nélkül

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

- Normal mode
- ...
- ...
- ...
- ...

---

## Modal editor

- Normal mode
- Insert mode
- ...
- ...
- ...

---

## Modal editor

- Normal mode
- Insert mode
- Visual mode
- ...
- ...

---

## Modal editor

- Normal mode
- Insert mode
- Visual mode
- Command mode
- ...

---

## Modal editor

- Normal mode
- Insert mode
- Visual mode
- Command mode
- Replace mode

---

## Modal editor

- Normal mode
- Insert mode
- Visual mode
- Command mode
- Replace mode
- etc.

---

### Normal mode - arrow keys

- `j` - lefele nyíl
- `k` - felfele nyíl
- `h` - balra nyíl
- `l` - jobbra nyíl

---

### Normal mode - sor eleje, vége

- `0` - sor első karakterére ugrik
- `$` - sor utolsó karakterére ugrik

---

### Normal mode - fájl eleje, vége

- `gg` - fájl elejére ugrik
- `G` - fájl végére ugrik

---

### Normal mode - ugrás egy szónyit

- `w` - következő szó elejére ugrik
- `b` - előző szó elejére ugrik
- `e` - következő szó végére ugrik
- `W` - következő szó elejére ugrik (írásjelek figyelmen kívül hagyásával)
- `B` - előző szó elejére ugrik (írásjelek figyelmen kívül hagyásával)
- `E` - következő szó végére ugrik (írásjelek figyelmen kívül hagyásával)
