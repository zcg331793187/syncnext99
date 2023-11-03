`user script`;

function buildMedias(inputURL) {
    const req = {
        url: 'https://jable.tv/' + inputURL,
        method: 'GET',
        headers: {
            "Referer": "https://hanime1.me/",
            "User-Agent": "Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Mobile Safari/537.36 Edg/87.0.664.66"
        }
    };
    console.log(req.url);
    $http.fetch(req).then(res => {
        let datas = [];
        // const _body = res.body.replace(/[\n\t]+/g, '').replace(/>[\s]+</g, '><');
        const content = tXml.getElementsByClassName(res.body, "img-box cover-md a");
        console.log(content)
        // print(res.body);

        /*
        if (inputURL.indexOf("裏番") == -1) {
            content = tXml.getElementsByClassName(_body, "col-xs-6");
            content.forEach(dom => {
                const href = dom.children[0].attributes.href;
                const title = dom.children[1].children[1].children[0].children[0].children[0];
                const coverURLString = findAllByKey(dom, "src")[1];
                const descriptionText = dom.children[1].children[1].children[0].children[2].children[0].children[0];
                datas.push(buildMediaData(href, coverURLString, title, descriptionText, href))
            })
        } else {
            content = tXml.getElementsByClassName(_body, "home-rows-videos-wrapper");
            const titles = _body.match(/border-radius: 3px">(.+?)</ig);
            n = 0;
            content[0].children.forEach(dom => {
                const href = dom.attributes.href;
                const title = titles[n].replace(/border-radius: 3px">/, '').replace(/</, '');
                const coverURLString = findAllByKey(dom, "src")[0];
                const descriptionText = "";
                datas.push(buildMediaData(href, coverURLString, title, descriptionText, href));
                n++
            })
        }
        */

        $next.toMedias(JSON.stringify(datas))
    })
}

function Episodes(inputURL) {
    const req = {
        url: inputURL,
        method: 'GET',
        headers: {
            "Referer": "https://hanime1.me/",
            "User-Agent": "Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Mobile Safari/537.36 Edg/87.0.664.66"
        }
    };
    $http.fetch(req).then(res => {
        let datas = [];
        let href = res.body.match(/contentUrl": "(.+?)"/i)[1];
        let title = "原畫";
        datas.push(buildEpisodeData(href, title, href));
        $next.toEpisodes(JSON.stringify(datas))
    })
}

function Player(inputURL) {
    $next.toPlayer(inputURL)
}
