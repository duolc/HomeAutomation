# HomeAutomation
Home Automation Stuff

Credit to the following for some of the heavy lifting:
  https://github.com/plexinc/webhooks-home-automation

This node app reads a payload from PLEX and then triggers an IFTTT event.

Install node, and npm

Clone Repo and enter directory

Install Dependencies
  -express, request, multer
  
Add your ifttt API and device UUID to config.json_ORIG and save as config.json

Run the script,  I use forever to keep it running in the background.
