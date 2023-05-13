function getLocalData(newsubs) {
    const value = localStorage.getItem(newsubs);
    if (value === null) {
        setLocalData(newsubs, []);
        return [];
    }
    return JSON.parse(value);
}

function setLocalData(newsubs, data) {
    localStorage.setItem(newsubs, JSON.stringify(data));
}

export { setLocalData, getLocalData };
