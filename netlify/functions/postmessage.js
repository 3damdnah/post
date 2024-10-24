exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Method Not Allowed' }),
        };
    }

    const { message } = JSON.parse(event.body); // Parse the incoming JSON data

    // Here you can implement logic to save the message (e.g., to a database)
    // For simplicity, we will just return the message back

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Message received', data: message }),
    };
};
