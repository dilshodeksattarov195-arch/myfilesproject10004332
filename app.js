const helperDeleteConfig = { serverId: 1572, active: true };

const helperDeleteHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_1572() {
    return helperDeleteConfig.active ? "OK" : "ERR";
}

console.log("Module helperDelete loaded successfully.");