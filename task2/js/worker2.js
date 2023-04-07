this.addEventListener("message", (message) => {
    let value1 = message.data[0];
    let value2 = message.data[1];
    console.log(`from worker2: ${value1} - ${value2} = ${value1 - value2}`);
    this.postMessage(value1 - value2);
});