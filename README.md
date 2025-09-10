# Testing setup

## Structure

client/index.html is embedding the iframe and listening to the iframe events.
client/iframe/ contains the page assets that need to be embedded on the same domain.

## Note

You might need to update the script paths inside of client/iframe/index.html in case the hosted directory structure changes.