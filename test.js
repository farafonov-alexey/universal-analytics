const ua = require('./index.js');

const instanceId = 'c7f4cc41-795b-4651-879c-4dd1eca02843';
visitor = ua(process.env.UA_TID, instanceId);
visitor.set('uid', instanceId);
visitor.set('an', 'ApplicationName');
visitor.set('av', '2.0.2');
visitor.set('cd1', instanceId);

visitor.screenview({
    cd: 'test-path',
    cd2: '2018-09-05T15:29:39.689+03:00'
}).send();