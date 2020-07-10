module.exports.uuids = (first, second, version = 'v4') => {
    if (version === 'v4') {
        return first.slice(0, 18) + second.slice(second.length - 18)
    }
}