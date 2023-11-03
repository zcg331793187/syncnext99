function print(params) {
    params = params || '';
    if (typeof (params) == 'object' && Object.keys(params).length > 0) {
        try {
            console.log(JSON.stringify(params))
        } catch (e) {
            console.log(typeof (params) + ':' + params.length)
        }
    } else if (typeof (params) == 'object' && Object.keys(params).length < 1) {
        console.log('null object')
    } else {
        console.log(JSON.stringify(params))
    }
}

function buildMediaData(id, coverURLString, title, descriptionText, detailURLString) {
    var obj = {
        id: id,
        coverURLString: coverURLString,
        title: title,
        descriptionText: descriptionText,
        detailURLString: detailURLString,
    };
    return obj
}

function buildEpisodeData(id, title, episodeDetailURL) {
    return {id: id, title: title, episodeDetailURL: episodeDetailURL,}
}

function findAllByKey(obj, keyToFind) {
    return (Object.entries(obj).reduce((acc, [key, value]) => key === keyToFind ? acc.concat(value) : typeof value === "object" && value ? acc.concat(findAllByKey(value, keyToFind)) : acc, []) || [])
}

function objKeySort(obj) {
    let newkey = Object.keys(obj).sort();
    let newObj = {};
    for (let i = 0; i < newkey.length; i++) {
        if (newkey[i] == '' || obj[newkey[i]] == '' || newkey[i] == 'sign') {
            continue
        }
        newObj[newkey[i]] = obj[newkey[i]]
    }
    return newObj
}

function getRandomInt(min = 1, max = 100000000) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
}
