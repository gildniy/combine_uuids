// module.exports.area = radius => Math.PI * (radius ** 2)
// module.exports.perimeter = radius => Math.PI * radius * 2
module.exports.uuids = (first, two, version = 'v4') => {
    if (version === 'v4') {
        return first.slice(0, 18) + two.slice(two.length - 18)
    }
}