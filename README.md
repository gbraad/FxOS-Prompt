>Prompt - FxOS as a Hardware Platform
=====================================

This is the main application for a display-less hardware platform running on 
Firefox OS.


Instructions
------------

### Deploy on hardware using DevTools

Development deployments can be done using DevTools. Enable certified apps for
DevTools using the script provided by
[TWQA/B2G-flash-tool](https://github.com/Mozilla-TWQA/B2G-flash-tool)

```
$ enable_certified_apps_for_devtools.sh
```


### Deploy on hardware as system application using ADB
Push from a Gaia development environment

```
$ APP=system make install-gaia && adb shell stop b2g && adb shell start b2g
```


Authors
-------

| [!["Gerard Braad"](http://gravatar.com/avatar/e466994eea3c2a1672564e45aca844d0.png?s=60)](http://gbraad.nl "Gerard Braad <me@gbraad.nl>") |
|---|
| [@gbraad](https://twitter.com/gbraad)  |


References
----------

* Based on [JanOS](https://github.com/janjongboom/janos)

