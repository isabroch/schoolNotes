# Modular Javascript

## Splitting Javascript into multiple files
Javascript module files do NOT use a wrapped DOMContentLoaded event listener, as that creates a scope that can be confusing. It would also not have much meaning as, when you do import the modules, it'll be inside a DOMContentLoaded file at the end.

> **Øvelse findes i JSModular_Ov#.js/.html**
There are multiple JSModular javascript files, but they will be accessed by a signular HTML file.