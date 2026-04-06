# Mini Crossword Specification

You are building a Mini Crossword game. A 5x5 crossword puzzle with clues, playable in the browser. Single index.html file using React via CDN.

## Grid
5x5 crossword grid (like the NYT Mini Crossword format)
- White cells: active, typeable
- Black cells: blocked out, dark background
- Selected cell: highlighted with accent color (#5a67d8)
- Active word: all cells in the current word highlighted lighter (#e8eaff)
- Click a cell to select it; click again or press space to toggle direction (across/down)
- Arrow keys navigate between cells
- Typing a letter fills the cell and auto-advances to next cell in word
- Backspace clears current cell and moves back
- Tab moves to the next word, Shift+Tab to previous word

## Clues panel
- Across and Down clues listed beside or below the grid
- Active clue highlighted to match the selected word
- Click a clue to jump to that word in the grid

## Puzzle data
- Embed at least 5 different 5x5 crossword puzzles as JSON
- Each puzzle has: grid layout (which cells are black), answers, across clues, down clues
- Daily rotation: select puzzle based on day-of-year modulo puzzle count
- Curate real, solvable clues (simple, fun, general knowledge)

## Check answers
- "Check" button: highlights incorrect letters in red
- "Reveal" button: fills in all correct answers
- "Clear" button: clears all user input
- Auto-detection: when all cells are filled correctly, show a congratulations message with solve time

## Timer
- Starts on first keypress
- Displays elapsed time (MM:SS format)
- Stops on completion
- Pauses if user clicks away (optional)

## Visual design
- Clean, newspaper-style aesthetic
- White/off-white background (#fafafa), black grid borders
- Clue numbers in top-left corner of cells (small, 10px)
- Responsive: grid and clues stack vertically on narrow screens
- Dark header bar with title "Mini Crossword" and date

## Signature
- Bottom-right corner: "Created by Stonedhawk (Rahul)" in small (11px), muted gray text

## Tech
- React via CDN (react, react-dom, babel standalone)
- Single index.html file
- No external UI libraries
- No em dashes in comments or text
