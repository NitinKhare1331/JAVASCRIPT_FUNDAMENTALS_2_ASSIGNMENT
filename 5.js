function package(type) {
    switch(type.toLowerCase()) {
        case "standard" :
            console.log('Estimated delivery time: 3-5 days');
            break;
        case "express":
            console.log('Estimated delivery time: 1-2 days');
            break;
        case "overnight":
            console.log('Estimated delivery time: next day');
            break;
        default:
            console.log('Choose right package type');
    }
}

package('OVERNIGHT');