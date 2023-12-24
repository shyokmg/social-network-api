//  Format date to this format: "Jun 10th, 2020 at 01:39 pm"
const formatDate = (date) => {

    // array of months
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    //   Get data from date
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();

    //   Add a conditional suffix depending on value of day
    const suffix = (day >= 10 && day <= 20) ? 'th' : ['st', 'nd', 'rd'][day % 10 - 1] || 'th';
    const formattedDate = `${month} ${day}${suffix}, ${year}`;
    //   Format time data
    const formattedTime = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
    const period = hour < 12 ? 'am' : 'pm';
    // Add all data together for new formatted date
    const formattedTimestamp = `${formattedDate} at ${formattedTime} ${period}`;

    return formattedTimestamp;
};

module.exports = { formatDate };