this.addEventListener("message", (message) => {
    let { data } = message;
    console.log(`from worker4: ${data[0]} / ${data[1]} = ${data[0] / data[1]}`);
    this.postMessage(data[0] / data[1]);
});