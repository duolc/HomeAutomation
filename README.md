# HomeAutomation
Home Automation Stuff

Credit to the following for some of the heavy lifting:
  https://github.com/plexinc/webhooks-home-automation

This node app takes reads a payload from PLEX and then triggers an IFTTT event.

Install node, and npm

Clone Repo and enter directory

Install Dependencies
  -express, request, multer
  
Add your ifttt API key to line 12
Add the UUID of the device you wish to be able to trigger the hook on line 13

Run the script,  I use forever to keep it running in the background.
