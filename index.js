function parseConnectionString() {

    const connObj = {};
    // connection string in form 'Endpoint=<value>;SharedAccessKeyName=<value>;SharedAccessKey=<value>'
    process.env.connectionString.split(';').forEach(item => {
            // current value will be in form '<key>=<value>'
            const indexOfEq = item.indexOf('=');
            const key = item.substr(0, indexOfEq);
            const value = item.substr(indexOfEq + 1);
            connObj[key] = value;
        }
    );

    // validate
    if (!connObj.Endpoint) {
        throw new Error('invalid connectionString, Endpoint required');
    } else if (!connObj.SharedAccessKey) {
        throw new Error('invalid connectionString, SharedAccessKey required');
    } else if (!connObj.SharedAccessKeyName) {
        throw new Error('invalid connectionString, SharedAccessKeyName required');
    }

    console.log(`endpoint=${connObj.Endpoint}`);
    console.log(`sharedAccessKeyName=${connObj.SharedAccessKeyName}`);
    console.log(`sharedAccessKey=${connObj.SharedAccessKey}`);
}

parseConnectionString();