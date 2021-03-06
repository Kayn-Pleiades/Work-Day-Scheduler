# Work-Day-Scheduler

Project is deployed here: https://kayn-pleiades.github.io/Work-Day-Scheduler/

## Table of Contents

* [Description](#description)
* [Process](#process)
* [Credits](#credits)

## description 

This webpage allows you to plan out your workday! The current date is displayed at the top of the screen. You can enter events in the various hours, and once you click the save button to the right of the row, the data is saved, and will still be present even when the page resets. 
The current hour, if during work hours, is highlighted in red. Hours before this are in grey and hours yet to come are in green. 

![screenshot of deployed project](https://github.com/Kayn-Pleiades/Work-Day-Scheduler/blob/main/assets/Capture.PNG)

## process

### Commit 1: Initial commit
Created repository on GitHub

### Commit 2: Base Files
Added base files for the project. 

### Commit 3: Set-up
Installed moment through npm. Next: the current date showing at the top.

### Commit 4: Current Date
The current date now shows at the top of the page. Next: creating the timeblocks for standard business hours. 

### Commit 5: First timeblock
First to decide how to make them look. I'm thinking each hour will be it's own row. Then each row will be split into 3 columns. The time, the writeable area, and then the save button. I'll make the one for 9am and then commit before making the others. It doesn't look pretty, but I'm going to leave the aesthetics until after I have the functionality down. 

### Commit 6: Rest of the timeblocks
Simply repeated step 5 for the remaining hours. Next: the time relative colors!

### Commit 7: Script Fix
The current date disappeared and I can't figure out why. It's really upsetting me. UPDATE: I have fixed it. For some reason I moved my script above the others, which I now realize no longer lets it reference the other scripts. Also got rid of the node stuff because while checking the slack for help, I realized moment was already linked, and that what I was doing was excessive. 

### Commit 8: Color-code
Changed the current day script to jquery. Spent a lot of time looking up for each type functions and got it working after a lot of painful trial and error. 

### Commit 9: Textarea
Now I need to give every row an editable textarea. I did this using the textarea tag. I then made the hour col look nicer. 

### Commit 10: Buttons
Added icons and made the buttons into buttons. I realize if I want it to update automatically, I need to do so asap or I won't be able to see it due to the time. 

### Commit 11: Auto-refresh
Added into the HTML meta a way for it to auto refresh every 5 minutes. Waited to see if it works, and it does!! Yay!

### Commit 12: Space for storing
Made an array for storing and edited the css for the buttons. 

### Commit 13: Recognize inputs
Now when something is entered in a text area and then the button of that row is clicked, that rows text is sent to the console.

### Commit 14: Storage
I think I'm storing the data now, I just need to figure out how to get it to appear upon intiation.

### Commit 15: Pulling from storage
The saved data now returns upon refreshes, and in the correct row!!

### Commit 16: Final
README finished!

## credits
https://www.w3schools.com/jquery/misc_each.asp
https://www.w3schools.com/howto/howto_js_add_class.asp
https://icons.getbootstrap.com/#usage
https://icons.getbootstrap.com/icons/journal-plus/
https://stackoverflow.com/questions/19807665/auto-refresh-for-every-5-mins
The to-do list excercises we did in class largely served as a base. 