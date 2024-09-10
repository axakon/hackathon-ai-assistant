# Code Refactoring

Code refactoring is incredibly useful when we want to separate a function into smaller functions, make functions more generic or simply rewrite an entire section of code.

## Using Code Refactor

Right click on any code snippet and select "Codeium: Refactor selected code block"! Codeium will then provide a dropdown with a bunch of predefined refactors for you to choose from.

If none of these work for you, there is an alternative: You can highlight the code you want to refactor and then open the "Codeium Command Palette" by using CTRL (CMD on Mac) + I. This allows you to quickly type in the command referencing the code you want directly from the code window.

## Examples

As before, you will find 2 files "algorithm1-refactor.ts" and "algorithm2-refactor.ts". Have the AI Refactor the code in each file. As an example, here are a few things you can try out:

- Change the algorithm to use Recursion instead of loops
- Have it generate comments for the code, explaining what it has done
- Maybe even have it generate unit-tests for these functions
- Have it compare the original algorithm against the new refactored one and ask for the differences between them, which one is faster...etc.
  - To do this one, we recommend opening the Codeium extension window found in the extension bar (usually on the left) and using `@` to reference the files you want to compare directly, providing better CONTEXT to the AI.
