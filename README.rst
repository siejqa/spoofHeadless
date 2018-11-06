=============
spoofHeadless
=============
WebExtension that spoofs some webGl data and few other features unique to headless browsers, so they'll be harder to detect/fingerprint

* sets navigator.webdriver to false
* sets navigator.languages to random value
* emulates some webGL 1.0 functions/extensions (for best results use with Canvas Defender)
* returns random height/width from broken images
* supports hairline (css modernizr)

-------
Usage
-------

1. Zip files from src **zip -rj extension.zip src/\***
2. Change archive exntesion to \*.xpi **mv exntesion.zip extension.xpi**
3. Load into webdriver

.. code-block::

    from selenium import webdriver

    options = webdriver.FirefoxOptions()
    options.add_argument('--headless')

    driver = webdriver.Firefox(firefox_options=options)
    extension_path = 'path_to_extension_in_xpi_format'
    # True flag enables installation of unsigned extensions
    driver.install_addon(extension_path, True)
    # Check what data is spoofed
    driver.get('https://browserleaks.com/webgl')
    driver.quit()

-----
TODO
-----

* implement more webGL functions/extensions
* find a way to return fake webGl hash for generated canva
