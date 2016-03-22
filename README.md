# hosting_realtime_queue
Update the Aegir task queue in realtime with server sent events. 

This module expects an instance of [sse-proxy](https://github.com/MartijnBraam/sse-proxy) running on `your-aegir-domain/eventsource/` (proxyed by apache with ProxyPass for example)
To make this functional the hosting queue daemon needs to send callbacks to the eventsource proxy daemon. [drush-queued](https://github.com/MartijnBraam/drush-queued) already implements
this through the `--eventproxy` option.
