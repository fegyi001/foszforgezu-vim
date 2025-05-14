# DOBD EL AZ EGERED

Hogyan navigalj a kodban eger hasznalata nelkul

---

# DOBD EL AZ EGERED

Vim / Neovim kezdoknek

---

## Mi a Vim / Neovim?

- Szovegszerkeszto
- Terminal alapu
- Eger hasznalata nelkul

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
- szervereken tulajdonkeppen mindenhol

---

## Neovim

- 2015
- Thiago de Arruda
- Vim fork
- Lua
- plugin architektura

---

## Neovim

- <https://survey.stackoverflow.co/2023/#section-admired-and-desired-integrated-development-environment>
- Visual Studio Code is the preferred IDE as far as what users want but Neovim has a higher proportion of users that want to continue using it next year (81% vs 77%).

---

## Enter Vim

- `vim` - enter Vim
- `vim <filename>` - enter Vim with a file
- `nvim` - enter Neovim
- `nvim <filename>` - enter Neovim with a file

---

## Exit Vim

`:q` - quit

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

### Normal mode

- `j` - move down
- `k` - move up
- `h` - move left
- `l` - move right

---

### Normal mode

- `0` - move to the beginning of the line
- `^` - move to the first non-blank character of the line
- `$` - move to the end of the line

---

### Normal mode

- `gg` - move to the beginning of the file
- `G` - move to the end of the file

---

### Normal mode

- `w` - move to the beginning of the next word
- `b` - move to the beginning of the previous word
- `e` - move to the end of the word
- `W` - move to the beginning of the next word (ignoring punctuation)
- `B` - move to the beginning of the previous word (ignoring punctuation)
- `E` - move to the end of the word (ignoring punctuation)
