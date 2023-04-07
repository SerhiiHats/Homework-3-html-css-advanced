onmessage = function (message) {
    const { data } = message;
    console.log(`from worker3: ${data[0]} x ${data[1]} = ${data[0] * data[1]}`);
    this.postMessage(data[0] * data[1]);
}