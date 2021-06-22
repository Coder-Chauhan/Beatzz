$(".album-poster").on('click', function (e) {
    var dataSwitchId = $(this).attr("data-switch");
    // get the id of the poster
    ap.list.switch(dataSwitchId);
    // aplayer play function
    ap.play();
    $("#aplayer").addClass("showPlayer");
});

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: true,
    audio: [
        {
            name: 'Baarish Lete Aana',
            artist: 'Darshan Raval',
            url: 'songs/My favorites/Baarish_Lete_Aana_1.mp3',
            cover: 'images/My favorites/1.jpg'
        },
        {
            name: 'Galliyan',
            artist: 'Ankit Tiwari',
            url: 'songs/My favorites/Galliyan.mp3',
            cover: 'images/My favorites/2.jpg'
        },
        {
            name: 'Tera Zikr',
            artist: 'Darshan Raval',
            url: 'songs/My favorites/Tera zikr.mp3',
            cover: 'images/My favorites/3.jpg'
        },
        {
            name: 'Tujhe Kitna Chahne Lage Hum',
            artist: 'Jubin Nautiyal',
            url: 'songs/My favorites/Tujhe Kitna Chahein Aur.mp3',
            cover: 'images/My favorites/4.jpg'
        },
        {
            name: 'Tum Hi Ho',
            artist: 'Arijit Singh',
            url: 'songs/My favorites/Tum Hi Ho.mp3',
            cover: 'images/My favorites/5.jpg'
        },
        {
            name: 'Tune Jo Na Kaha',
            artist: 'Mohit Chauhan',
            url: 'songs/My favorites/Tune Jo Na Kaha.mp3',
            cover: 'images/My favorites/6.jpg'
        },
        {
            name: 'Paniyon Sa',
            artist: 'Atif Aslam',
            url: 'songs/My favorites/Paniyon Sa.mp3',
            cover: 'images/My favorites/7.jpg'
        },
        {
            name: 'Kalank',
            artist: 'Arijit Singh',
            url: 'songs/My favorites/Kalank.mp3',
            cover: 'images/My favorites/8.jpg'
        },
        {
            name: 'Chahun Main Ya Naa.',
            artist: 'Arijit Singh',
            url: 'songs/My favorites/Chahun Main Ya Naa.mp3',
            cover: 'images/My favorites/9.jpg'
        },
        {
            name: 'Ae Dil Hai Mushkil',
            artist: 'Arijit Singh',
            url: 'songs/My favorites/Ae_Dil_Hai_Mushkil.mp3',
            cover: 'images/My favorites/10.jpg'
        },
        {
            name: 'Tum Se Hi',
            artist: 'Mohit Chauhan',
            url: 'songs/My favorites/Tum Se Hi.mp3',
            cover: 'images/My favorites/11.jpg'
        },
        {
            name: 'Royal Stag Mirchi Music Awards',
            artist: 'Arijit Singh',
            url: 'songs/Live Performances/Arijit.mp3',
            cover: 'images/Live Performances/1.jpg'
        },
        {
            name: 'Gima Awards',
            artist: 'Atif Aslam',
            url: 'songs/Live Performances/Atif.mp3',
            cover: 'images/Live Performances/2.jpg'
        },
        {
            name: 'Kun Faya Kun',
            artist: 'Mohit Chauhan',
            url: 'songs/Lofi/Kun Faya Kun.mp3',
            cover: 'images/Lofi/1.jpg'
        },
        {
            name: 'Bekhayali X Channa Mereya',
            artist: 'Sachet and Arijit',
            url: 'songs/Lofi/Bekhayali X Channa Mereya.mp3',
            cover: 'images/Lofi/2.jpg'
        },
        {
            name: 'Iktara × Saibo × Phir Se Udd Chala × Jiyein Kyun',
            artist: 'Sachet and Arijit',
            url: 'songs/Lofi/Iktara × Saibo × Phir Se Udd Chala × Jiyein Kyun.mp3',
            cover: 'images/Lofi/3.jpg'
        },
        {
            name: 'Asal Mein',
            artist: 'Darshan Raval',
            url: 'songs/Lofi/Asal Mein.mp3',
            cover: 'images/Lofi/4.jpg'
        },
        {
            name: 'Jaan Nisaar',
            artist: 'Arijit',
            url: 'songs/Lofi/Jaan Nisaar.mp3',
            cover: 'images/Lofi/5.jpg'
        },
        {
            name: 'Mast Magan',
            artist: 'Arijit',
            url: 'songs/Lofi/Mast Magan.mp3',
            cover: 'images/Lofi/6.jpg'
        },
        {
            name: 'Memories',
            artist: 'Maroon 5',
            url: 'songs/English/Memories.mp3',
            cover: 'images/English/1.jpg'
        },
        {
            name: 'Heather',
            artist: 'Conan Gray',
            url: 'songs/English/Heather.mp3',
            cover: 'images/English/2.jpg'
        },
        {
            name: 'Perfect',
            artist: 'ED Sheeran',
            url: 'songs/English/Perfect.mp3',
            cover: 'images/English/3.jpg'
        },
        {
            name: 'Falling',
            artist: 'Harry Styles',
            url: 'songs/English/Falling.mp3',
            cover: 'images/English/4.jpg'
        },
        {
            name: 'Treat You Better',
            artist: 'Shawn Mendes',
            url: 'songs/English/Treat You Better.mp3',
            cover: 'images/English/5.jpg'
        },
        {
            name: 'Love Me Like You Do',
            artist: 'Ellie Goulding',
            url: 'songs/English/Love Me Like You Do.mp3',
            cover: 'images/English/6.jpg'
        },
        {
            name: 'See You Again',
            artist: 'Wiz Khalifa',
            url: 'songs/English/See You Again.mp3',
            cover: 'images/English/7.jpg'
        },
    ]
});
