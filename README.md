# SA

# node js to be installed 
 - Ubuntu / Mint: 
	sudo apt-get update
	sudo apt-get install nodejs
	sudo apt-get install npm

 - windows :
 	Install cygwin. (http://www.mcclean-cooper.com/valentino/cygwin_install/)
	Use setup.exe in the cygwin folder to install the following packages:

	devel → openssl
	devel → g++-gcc
	devel → make
	python → python
	devel → git
	Open the cygwin command line with Start > Cygwin > Cygwin Bash Shell.

	Run the below commands to download and build node.
	cygwin_setup.sh
	git clone git://github.com/ry/node.git
	cd node
	./configure
	make
	sudo make install

 - Mac :
 	Install Xcode. (http://developer.apple.com/technologies/tools/)
	Install git. (http://help.github.com/mac-git-installation/)
	Run the following commands:
	darwin_setup.sh
	git clone git://github.com/ry/node.git
	cd node
	./configure
	make
	sudo make install

# Accessing :

- Access using http-server (you can install it using "npm install http-server"), since opening html documents directly on the browser will cause this error : "AngularJS Error: Cross origin requests are only supported for protocol schemes: http, data, chrome-extension, https"

# Basic functionalities covered :

 - click continue shopping for modal dialog to open and add product to bag.

 - click edit to edit each product

 - click remove to remove item from cart

