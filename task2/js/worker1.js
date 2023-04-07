onmessage = function (message) {
    const { data } = message;
    console.log(`from worker1: ${data[0]} + ${data[1]} = ${data[0] + data[1]}`);
    postMessage(data[0] + data[1]);
};