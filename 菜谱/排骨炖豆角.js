// 从淘宝买锅和铲子等
const { Guo, Chanzi, ShaoshuiHu, Dao } = require('taobao')
// 从超市买排骨，豆角，大蒜，，料酒，和小米椒等
const { Paigu, Liaojiu, Doujiao, Dasuan, Lajiao, Water, You, Jiangyou, Yan, JiJing } = require('chaoshi')

function cook() {
    const guo = new Guo();
    const paigu = new Paigu();
    const water = new Water(20);
    // 锅中加水
    guo.append(water);
    // 锅中加入排骨
    guo.append(paigu);

    // 锅中加入料酒，倒入一小口的量。量多少影响不大，一会也得洗。
    const liaojiu = new Liaojiu();
    guo.append(liaojiu);
    // 开始烧水
    guo.fire();

    const shaoshuiHu = new ShaoshuiHu();
    // 在烧水壶中加入水
    const water2 = new Water(20);
    shaoshuiHu.append(water2);
    // 开始烧水
    shaoshuiHu.fire();

    const dao = new Dao();
    const dasuan = new Dasuan();
    const lajiao = new Lajiao();
    // 将大蒜和小米椒切好备用
    dao.cut(dasuan);
    dao.cut(lajiao);

    // 锅中水烧开后，清洗排骨
    if(water.temperature === 100) {
        paigu.clear();
        guo.clear();
    }

    const you = new You();
    // 锅中加入少许油，看自己情况加多少。
    guo.append(you);
    // 加热锅，大约一分钟左右
    guo.fire();
    // 加入大蒜和小米椒，如果怕被崩把火调小一点。
    guo.append(dasuan);
    guo.append(lajiao);
    // 用铲子翻炒大概三十秒
    const chanzi = new Chanzi();
    chanzi.striFry(0.5);


    // 加入排骨继续翻炒一分钟
    guo.append(paigu);
    chanzi.striFry(1);
    // 加入些许酱油，一口的量。继续翻炒两分钟。
    const jiangyou = new Jiangyou();
    guo.append(jiangyou);
    chanzi.striFry(2);


    // 看排骨差不多上色了，就加入烧开的热水。
    if (water2.temperature === 100) {
        guo.append(water2);
    }

    // 锅中加入这么多盐。
    const yan = new Yan();
    guo.append(yan);

    // 将豆角切好或者用手掰成小块
    const doujiao = new Doujiao();
    dao.cut(doujiao);
    // 预计小火炖排骨20分钟左右，看水差不多蒸发1/2，加入豆角
    guo.append(doujiao);

    // 再炖20分钟左右，看锅中只剩部分汤汁了，加入鸡精，大火收汁。
    const jijing = new JiJing();
    guo.append(jijing);
    guo.bigFire();

}

cook();





// console.log(Guo, Chanzi);
// console.log(Paigu, Doujiao, Dasuan, Lajiao);