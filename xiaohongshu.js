`user script`;

function buildMedias(inputURL) {
    const req = {
        url: 'http://192.168.31.31:3000/api/data',
        method: 'GET',
        headers: {
            "Referer": "http://192.168.31.31:3000",
            "User-Agent": "Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Mobile Safari/537.36 Edg/87.0.664.66"
        }
    };


    let datas = [];


    // const href = 'https://www.xiaohongshu.com/explore/646638fe0000000013006485';
    // const title = '粗跟玛丽珍好喜欢！极简风设计太爱了！\n';
    // const coverURLString = 'https://sns-webpic-qc.xhscdn.com/202310232033/316b894b490e54ed26840aa47b285260/1000g0082gu2p22cj40005op0h89ov1omm5sr74o!nd_whgt34_webp_wm_1';
    // const descriptionText = '粗跟玛丽珍好喜欢！极简风设计太爱了！\n';



    const href = '111';
    const title = '走错雪道了😅';
    const coverURLString = 'https://assets-cdn.jable.tv/contents/videos_screenshots/36000/36839/preview.jpg';
    const descriptionText = '走错雪道了😅';

    datas.push(buildMediaData(href, coverURLString, title, descriptionText, href))
    $next.toMedias(JSON.stringify(datas))

    /*
    $http.fetch(req).then(res => {


       let data  = JSON.parse(res.body);

        for(let file of data){
            datas.push(buildMediaData(file.href, file.coverURLString, file.title, file.descriptionText, file.href))
        }

        $next.toMedias(JSON.stringify(datas))


    })
       */
}

function Episodes(inputURL) {

    let datas = [];

    datas.push(buildEpisodeData('https://asf-doc.mushroomtrack.com/hls/wh_DwxX2nlFPMAUMMITpYA/1698874286/36000/36818/36818.m3u8', '原畫','https://asf-doc.mushroomtrack.com/hls/wh_DwxX2nlFPMAUMMITpYA/1698874286/36000/36818/36818.m3u8'));
    // datas.push(buildEpisodeData('https://sns-video-bd.xhscdn.com/stream/110/258/01e52d438307cc40010370038b38d1b060_258.mp4', '原畫','https://sns-video-bd.xhscdn.com/stream/110/258/01e52d438307cc40010370038b38d1b060_258.mp4'));
    $next.toEpisodes(JSON.stringify(datas))








    /*
    const req = {
        url: inputURL,
        method: 'GET',
        headers: {
            "Referer": "http://192.168.31.31:3000/",
            "User-Agent": "Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Mobile Safari/537.36 Edg/87.0.664.66"
        }
    };
    $http.fetch(req).then(res => {
        // let datas = [];
        let data  = JSON.parse(res.body);

        // throw new Error(data);
        for(let item of data){
            datas.push(buildEpisodeData(item.title, item.title, item.href));
        }

        // let href = res.body.match(/contentUrl": "(.+?)"/i)[1];
        // let title = "原畫";
        $next.toEpisodes(JSON.stringify(datas))
    })

     */


}

function Player(inputURL) {
    $next.toPlayer(inputURL)
}
