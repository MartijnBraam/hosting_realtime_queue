jQuery(document).ready(function(){
    var source = new EventSource('/eventsource/');
    source.addEventListener('task-finished', function(e){
        console.log('Task finished', e);
        hostingTaskRefreshQueueBlock();
        hostingTaskRefreshList();
    });
});
