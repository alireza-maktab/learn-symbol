const logTypes = {
    INFO: Symbol.for("info-log"),
    ERR: Symbol.for("info-log")
}

// this log function
function log(logType, message) {
    switch (logType) {
        case logTypes.INFO:
            console.log('Info: ' + message)
            break;
        case logTypes.ERR:
            console.log('Error: ' + message)
            break;
        default:
            throw 'Invalid log type'
    }
}

log(logTypes.INFO, "Hello world")