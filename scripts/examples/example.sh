#!/usr/bin/env bash
## For scripts used in monitors, it is required that the last line of the script print "normal" or "failure" string to stdout.
## By default "failure" is assumed by the api e.g. if the final print is not a recognized state.

STATE="normal"

# your code goes here

echo "Hello World"

# and finally print the state

if [ $? -ne 0 ];then STATE="failure"; fi
echo $STATE

## It is also possible to print more information to the last line of the script that will be stored by the api.
## you have to use json formatted string.
## 
## i.e. :
## echo '{"'$STATE'":"normal","data":{ "name1":"value1", "name2":"value2" }}'
