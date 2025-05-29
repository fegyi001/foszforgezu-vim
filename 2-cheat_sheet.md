---
author: Padányi-Gulyás Gergely
date: YYYY.MM.DD.
paging: Foszforgézu 2025 | Slide %d / %d
---

# NORMAL mode

## Arrow keys (home row)

- `h` - ← balra
- `j` - ↓ le
- `k` - ↑ fel
- `l` - → jobbra

---

# NORMAL mode

## Sor eleje, vége

- `0` - sor első karakterére ugrik
- `$` - sor utolsó karakterére ugrik

---

# NORMAL mode

## Fájl eleje, vége

- `gg` - fájl elejére ugrik
- `G` - fájl végére ugrik

---

# NORMAL mode

## Ugrás

- `C-u` - fél képernyőnyit felfelé ugrik
- `C-d` - fél képernyőnyit lefelé ugrik

---

# NORMAL mode

## Ugrás egy szónyit

- `w`, `W` - következő szó elejére ugrik
- `b`, `B` - előző szó elejére ugrik
- `e`, `E` - aktuális szó végére ugrik

---

# NORMAL mode

## Törlés, másolás, beillesztés

- `x` - egy karakter törlése
- `d` - kijelölés törlése (és vágólapra illesztés)
- `y` - kijelölés másolása (yank)
- `p`, `P` - beillesztés

---

# NORMAL mode

## Törlés, másolás teljes soron

- `dd` - teljes sor törlése
- `yy` - teljes sor másolása
- `cc` - teljes sor törlése és _INSERT_ módba lépés

---

# NORMAL mode

## Visszavonás, újra

- `u` - visszavonás
- `C-r` - újra

---

# NORMAL mode

## Karakterre ugrás

- `f{char}` - ugrás a következő `{char}` karakterre a sorban
- `F{char}` - ugrás az előző `{char}` karakterre a sorban
- `t{char}` - ugrás a következő `{char}` karakter elé a sorban
- `T{char}` - ugrás az előző `{char}` karakter elé a sorban
- `;` - ismétli az utolsó `f`, `F`, `t`, `T` parancsot
- `,` - visszafelé ismétli az utolsó `f`, `F`, `t`, `T` parancsot

---

# INSERT mode

- `i` - _INSERT_ módba lép a kurzor előtt
- `a` - _INSERT_ módba lép a kurzor mögött
- `I` - _INSERT_ módba lép a sor elején
- `A` - _INSERT_ módba lép a sor végén
- `o` - új sort nyit _INSERT_ módban
- `O` - új sort nyit fölötte _INSERT_ módban
- `Esc` - vissza _NORMAL_ módba

---

# VISUAL mode

- `v` - karakterek kijelölése (innen `hjkl`, `b`, `w`, `e` stb...)
- `V` - _VISUAL LINE (V-LINE)_ mód, teljes sor kijelölése
- `C-v` - _VISUAL BLOCK (V-BLOCK)_ mód, oszlop kijelölése
- `o` - kijelölés másik végére ugrás
- `Esc` - vissza _NORMAL_ módba

---

# REPLACE mode

- `r` - karaktert cserél
- `R` - REPLACE módba lép (több karakter cseréje)
- `Esc` - vissza _NORMAL_ módba

---

# OPERATOR-PENDING mode

- `diw` - töröld a teljes szót
- `ciw` - módosítsd a teljes szót, _INSERT_ módba vált
- `yip` - töröld a teljes bekezdést
- `vi'` - jelöld ki az idézőjel közötti részt
- `di{` - töröld a kapcsos zárójelek közötti részt
- `ca(` - módosítsd a zárójelek közötti részt, zárójelekkel együtt, INSERT módba vált
- `dt(` - töröld a zárójelig (zárójelet már ne)
- `df)` - töröld a zárójelig (zárójelet is)

---

# Keresés

- `/` - keresés előrefelé
- `?` - visszafelé keresés
- `n` - következő találat
- `N` - előző találat
- `*` - következő szó keresése
- `#` - előző szó keresése

---

# Keresés (LSP - Language Server Protocol)

- `gd` - ugrás a definícióra
- `gr` - ugrás a referenciára

---

# Jumplist

- `C-o` - ugrás vissza
- `C-i` - ugrás előre

---

# Vegyes

- `.` - ismétli az utolsó parancsot
- `g;` - ugrás a legutóbb szerkesztett helyre
- `gv` - legutóbbi kijelölés helyreállítása
- `%` - ugrás a zárójel párjához (kerek, szögletes, kapcsos zárójelek)

---

# Kilépés, mentés

- `:q` - kilépés
- `:w` - mentés
- `:wq` - mentés és kilépés
- `q!` - kilépés mentés nélkül
