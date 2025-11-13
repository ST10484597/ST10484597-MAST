## Version 1.0 – Initial Build
- Started the project using **React Native** and **TypeScript** with **Expo** for cross-platform development.
- Created the main structure of the app with a **Home Screen** to display menu items.
- Added functionality for the chef to add dishes with a name, description, price, and course selection (starter, main, dessert).
- Displayed the total number of dishes on the home screen.
- Set up **AsyncStorage** so that all menu data is saved locally and remains after the app is closed.
- Implemented state management using **useState** and **useEffect** hooks.
- Used a **FlatList** for dynamic rendering of menu items.
- Created a basic and clean design to match a professional restaurant look.

---

## Version 2.0 – Major Update and Refactor
- Added **React Navigation** and set up multiple screens:
- **HomeScreen:** Displays all menu items and the average price per course.
- **ManageMenuScreen:** Allows the chef to add or remove dishes.
- **GuestFilterScreen:** Lets guests filter the menu by course type.
- Moved the “Add Menu Item” feature from the home screen to its own dedicated screen.
- Added the ability to **delete menu items** directly from the manage menu screen.
- Organized the app into clear folders:
- `screens/` – holds all main pages.
- `components/` – reusable UI parts.
- `utils/` – global functions and calculations.
- `types/` – TypeScript interfaces.
- Improved the app’s design and spacing for a more professional layout.

---

## Version 2.1 – Functional Enhancements
- Added a calculation feature to show **average price per course** on the home screen.
- Used different loops to meet programming requirements:
- **for loop** to go through each menu item and total prices.
- **for...in loop** to calculate and display average prices for each course.
- **while loop** in a clear function example to show how items could be cleared.
- Created multiple **functions** for adding, removing, and calculating menu data.
- Declared **global arrays** to store menu items and ensure data consistency.
- Cleaned up the structure and removed unnecessary code repetition.

---

##  – Code Quality and User Experience
- Improved input validation to prevent empty or invalid menu entries.
- Added numeric validation for price input.
- Improved error handling to avoid app crashes.
- Applied a consistent visual design using `StyleSheet.create()`.
- Enhanced text layout, button alignment, and spacing for readability.
- Reduced unnecessary re-renders to improve performance.
- Ensured that all screens sync menu data automatically using `useEffect` when navigating.
- Added clear comments and better naming conventions for readability.

---

## – Final Touches and Submission Prep
- Tested the app on **Expo Go** for both Android and iOS.
- Verified navigation flow and data persistence.
- Double-checked that filtering and removing items works as expected.
- Confirmed that all loop and function outcomes meet project outcomes.
- Finalized the folder structure for submission:
- `App.tsx`
- `screens/`
- `components/`
- `utils/`
- `types/`
- `README.md`
- `CHANGELOG.md`
- Project fully meets requirements for loops, functions, separate screens, and data storage.

---

## Summary
- This version of the app is complete, user-friendly, and well-structured.
It demonstrates the use of loops, functions, modular code, and persistent data storage while offering a clean interface for both the chef and guests.
All core features are tested and working smoothly across devices.
This version of the app is complete, user-friendly, and well-structured.
It demonstrates the use of loops, functions, modular code, and persistent data storage while offering a clean interface for both the chef and guests.
All core features are tested and working smoothly across devices.
