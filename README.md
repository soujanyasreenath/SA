# SA

# Download :

 - clone the repository in any directory you wish to run the project : git clone git@github.com:soujanyasreenath/SA.git

# Installing Nodejs :

 - Ubuntu / Mint: 
    1) sudo apt-get update
    2) sudo apt-get install nodejs
    3) sudo apt-get install npm

 - windows :
    1) Install cygwin. (http://www.mcclean-cooper.com/valentino/cygwin_install/)
    2) Use setup.exe in the cygwin folder to install the following packages:
      - devel → openssl
      - devel → g++-gcc
      - devel → make
      - python → python
      - devel → git
      
    3) Open the cygwin command line with Start > Cygwin > Cygwin Bash Shell.

    4) Run the below commands to download and build node.
      - cygwin_setup.sh
      - git clone git://github.com/ry/node.git
      - cd node
      - ./configure
      - make
      - sudo make install

 - Mac :
    1) Install Xcode. (http://developer.apple.com/technologies/tools/)
    2) Install git. (http://help.github.com/mac-git-installation/)
    3) Run the following commands:
      - darwin_setup.sh
      - git clone git://github.com/ry/node.git
      - cd node
      - ./configure
      - make
      - sudo make install

# Accessing :

  - Access using http-server (you can install it using "npm install http-server"), since opening html documents directly on the browser will cause this error : "AngularJS Error: Cross origin requests are only supported for protocol schemes: http, data, chrome-extension, https"

# Basic functionalities covered :

 - RWD

 - Templating and JS using angularjs
 
 - click continue shopping for modal dialog to open and add product to bag.

 - click edit to open each product in a modal window

 - click remove to remove item from cart

(Known bugs - Estimated price does not change, remove button indexing is not happening properly if done randomly.)
