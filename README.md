# Valtur Cristallo Demo Website

This is a demo version of the Valtur Cristallo website with the following modifications:

## Features

1. The "Servizi" button in the main menu has an elegant shining animation highlight
2. The "Servizi" button has a bouncing down arrow to indicate it's clickable
3. Hovering over the "Servizi" button automatically opens the dropdown menu
4. Clicking the "Servizi" button only opens the dropdown menu (no navigation)
5. The "Sport ed Esperienze" option in the dropdown menu has a blue animated highlight
6. Clicking on "Sport ed Esperienze" redirects to https://valtour-aloe.vercel.app/
7. All other navigation links are disabled
8. The Gallery dropdown menu and all other dropdowns are completely blocked
9. An enlarged "Aloe Demo" label is displayed at the top of the page

## Files Modified

- **custom-styles.css**: Contains styling for the highlighted menu items and demo banner
- **demo-script.js**: Contains the JavaScript logic to make only specific menu items functional

## How It Works

The demo uses a combination of CSS and JavaScript to:

1. Add an elegant shining animation to the "Servizi" button using CSS animations
2. Add a bouncing down arrow to the "Servizi" button to indicate it's clickable
3. Make the dropdown menu automatically open when hovering over the "Servizi" button
4. Make the "Servizi" button only toggle the dropdown menu without navigation
5. Add a blue animated highlight with moving gradient to the "Sport ed Esperienze" option
6. Completely block the Gallery dropdown and all other dropdown menus
7. Disable all other links using CSS pointer-events and JavaScript event prevention
8. Redirect the "Sport ed Esperienze" link to the specified URL
9. Display an enlarged "Aloe Demo" banner at the top of the page

## Testing

To test the demo:
1. Open index.html in a web browser
2. Observe the shining animation effect on the "Servizi" button
3. Notice the bouncing down arrow on the "Servizi" button indicating it's clickable
4. Hover over the "Servizi" button - the dropdown menu should automatically open
5. Click on the "Servizi" button in the main menu - it should only open a dropdown without navigating
6. Try clicking on the Gallery dropdown - it should not open at all
7. Notice the blue animated highlight on the "Sport ed Esperienze" option
8. Click on "Sport ed Esperienze" in the dropdown - it should redirect to https://valtour-aloe.vercel.app/
9. Try clicking other menu items - they should not work
10. Notice the enlarged "Aloe Demo" banner at the top of the page
