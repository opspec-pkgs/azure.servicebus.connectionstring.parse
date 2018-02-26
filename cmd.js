const fs = require('fs');

function parseConnectionString() {
    const connectionObject = {};
    // connection string in form 'Endpoint=<value>;SharedAccessKeyName=<value>;SharedAccessKey=<value>'
    process.env.connectionString.split(';').forEach(item => {
            // current value will be in form '<key>=<value>'
            const indexOfEq = item.indexOf('=');
            const key = item.substr(0, indexOfEq);
            const value = item.substr(indexOfEq + 1);
            connectionObject[key] = value;
        }
    );

    return connectionObject;
}

const connectionObject = parseConnectionString();

fs.writeFileSync('/endpoint', connectionObject.Endpoint);
fs.writeFileSync('/sharedAccessKeyName', connectionObject.SharedAccessKeyName);
fs.writeFileSync('/sharedAccessKey', connectionObject.SharedAccessKey);