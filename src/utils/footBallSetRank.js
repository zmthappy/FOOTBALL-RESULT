const dayjs = require("dayjs");
const leaagueRankPanKou = require("./leaagueRankPanKou");

const list = [
  {
    homeTeam: "拉齐奥",
    visitedTeam: "国米",
    leagueName: "意甲",
    whoIsSrong: "+1",
    score: "0:6",
    toDayTime: "2024-12-16",
    homeRank: "5",
    awayRank: "3",
    nowMatchChangCi: 15,
    inHomeRank: "1",
    inAwayRank: "3",
    betWayList: "1626400,1478200,7798000",
    homeTeamLeageaName: "意甲",
    visitedTeamLeageaName: "意甲",
    ThreeSeasonAverageHome: 6,
    ThreeSeasonAverageAway: 2,
    firstoddswiilian: "3.25,3.50,2.10",
    endoddswillian: "3.40,3.20,2.20",
    firstoddslibo: "3.20,3.40,2.20",
    endoddslibo: "3.30,3.20,2.20",
    firstoddsaomen: "2.97,3.48,2.08",
    endoddsaomen: "3.15,3.10,2.14",
    firstodds365: "3.40,3.30,2.15",
    endodds365: "3.40,3.25,2.25",
    matchResultHome: "胜胜胜负平胜",
    homeSixMatch: "4-1-1",
    homeGOal: "21-8",
    matchResultHomeInhome: "胜平胜胜胜胜",
    homeSixMatchInhome: "5-1-0",
    homeGOalInhome: "23-8",
    matchResultVisit: "负胜胜胜平胜",
    visitedSixMatch: "4-1-1",
    visitedGoal: "20-7",
    matchResultVisitVisor: "负胜胜胜胜胜",
    visitedSixMatchInvisitor: "5-0-1",
    visitedGoalInvisitor: "17-7",
    "365ChuShangLun": "1",
    "365ZOngShangLun": "1",
    "365QiuShangLun": "2.5/3",
    "365MatchTimeShangLun": "24-05-20",
    homeTeamShanglun: "国米",
    amidithion: "平",
    "365First": "1.02,受平/半,0.88",
    "365End": "0.97,受平/半,0.93",
    homeLevel: 0.75,
    awayLevel: 0.75,
    levelSubPositioning: 0,
    真实盘口: -0.25,
    变化盘口: -0.25,
    历史盘口: 1,
    theoryHandicap: -0.5,
  },
];
//联赛层级
const leagueListCompunted = [
  "意甲",
  "德甲",
  "英超",
  "英冠",
  "西甲",
  "葡超",
  "荷甲",
  "法甲",
  "德乙",
  "法乙",
  "荷乙",
  "日职联",
  "日乙",
  "瑞典超",
  "挪超",
];

function main(footballItem) {
  // for (const footballItem of footballData) {
  // 第一是否是属于联赛层级
  if (leagueListCompunted.indexOf(footballItem.leagueName) !== -1) {
    judgePKIsDeep(footballItem); //pk比较
  } else {
  }
  // }
}

function delaySecibd() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({});
    }, 200);
  });
}

// 首先判断盘口定位是否高低--当前联赛大于8场时,按照当前联赛排名定位理论排扣;反之3-8则按近两年的排名设置联赛排名;前3场按照上赛季联赛排名定位层级
function judgePKIsDeep(footballItem) {
  // 如果上轮比赛低于三个月--只是使用上轮盘口转换
  if (
    dayjs(new Date()).diff(
      dayjs("20" + footballItem["365MatchTimeShangLun"]),
      "months",
    ) <= 3
  ) {
    footballItem["TfinallyPk"] = footballItem["theoryHandicap"];
  } else {
    if (footballItem.nowMatchChangCi <= 3) {
    } else if (
      footballItem.nowMatchChangCi > 3 &&
      footballItem.nowMatchChangCi < 8
    ) {
    } else {
      let newTheoryPKHM = leaagueRankPanKou.getQIuDuiRanks(
        footballItem.homeRank,
        footballItem.leagueName,
      );
      let newTheoryPKAW = leaagueRankPanKou.getQIuDuiRanks(
        footballItem.awayRank,
        footballItem.leagueName,
      );
      // 设置主场条件都需要定位高一个层级
      footballItem["TfinallyPk"] = Number(newTheoryPKHM) + 0.25 - newTheoryPKAW;
    }
  }
  cpmparePKIsDeep(footballItem);
}

// 设置两队在定位的层级确定后,pk深的时候加25，浅层不加
function cpmparePKIsDeep(footballItem) {
  footballItem["rankStartValue"] = 0;
  if (footballItem["whoIsSrong"].indexOf("-") !== -1) {
    if (footballItem["TfinallyPk"] > footballItem["真实盘口"]) {
      footballItem["rankStartValue"] += 25;
    } else if (footballItem["TfinallyPk"] == footballItem["真实盘口"]) {
      footballItem["rankStartValue"] += 15;
    } else {
      footballItem["rankStartValue"] += 0;
    }
  } else {
    if (footballItem["TfinallyPk"] < footballItem["真实盘口"]) {
      footballItem["rankStartValue"] += 25;
    } else if (footballItem["TfinallyPk"] == footballItem["真实盘口"]) {
      footballItem["rankStartValue"] += 15;
    } else {
      footballItem["rankStartValue"] += 0;
    }
  }
  console.log(footballItem["rankStartValue"], "rankStartValue+++");
  compareHWMatchResult(footballItem);
}

// 判断当前的必发的数量大小
function compareBetWayIsBig(footballItem) {
  let betWayList = footballItem?.betWayList
    ? footballItem.betWayList.split(",")
    : false;
  if (betWayList === false) {
    return;
  }
  let isDeepMore = 0;
  if (footballItem.whoIsSrong.indexOf("-") !== -1) {
    isDeepMore = betWayList[0] / (betWayList[2] ? betWayList[2] : 1);
  } else {
    isDeepMore = betWayList[2] / (betWayList[0] ? betWayList[0] : 1);
  }
  footballItem["betWayDeep"] = isDeepMore;
  if (isDeepMore >= 5) {
    footballItem["rankStartValue"] += 25;
  } else {
    footballItem["rankStartValue"] += 0;
  }
}

// 计算两队目前在主客的赛果计算结果
function compareHWMatchResult(footballItem) {
  // 需要计算的
  const needCalculate = [
    "matchResultHome",
    "matchResultHomeInhome",
    "matchResultVisit",
    "matchResultVisitVisor",
  ];
  needCalculate.forEach((item) => {
    switch (item) {
      case "matchResultHome":
        resultMathBack("matchResultHome", footballItem);
        break;
      case "matchResultHomeInhome":
        resultMathBack("matchResultHomeInhome", footballItem);
        break;
      case "matchResultVisit":
        resultMathBack("matchResultVisit", footballItem);
        break;
      case "matchResultVisitVisor":
        resultMathBack("matchResultVisitVisor", footballItem);
        break;
    }
  });
  setTimeout(() => {
    // 比较两队基本面差距
    if (footballItem.whoIsSrong.indexOf("-") !== -1) {
      if (
        footballItem["matchResultHomeresult"] -
          footballItem["matchResultVisitresult"] <=
          300 &&
        footballItem["matchResultHomeresult"] -
          footballItem["matchResultVisitresult"] >
          0 &&
        footballItem["matchResultHomeInhomeresult"] -
          footballItem["matchResultVisitVisorresult"] <=
          300 &&
        footballItem["matchResultHomeInhomeresult"] -
          footballItem["matchResultVisitVisorresult"] >
          0
      ) {
        footballItem["rankStartValue"] += 25;
      } else {
        footballItem["rankStartValue"] += 0;
      }
    } else {
      if (
        footballItem["matchResultVisitresult"] -
          footballItem["matchResultHomeresult"] <=
          300 &&
        footballItem["matchResultVisitresult"] -
          footballItem["matchResultHomeresult"] >
          0 &&
        footballItem["matchResultVisitVisorresult"] -
          footballItem["matchResultHomeInhomeresult"] <=
          300 &&
        footballItem["matchResultVisitVisorresult"] -
          footballItem["matchResultHomeInhomeresult"] >
          0
      ) {
        footballItem["rankStartValue"] += 25;
      } else {
        footballItem["rankStartValue"] += 0;
      }
    }
    compareBetWayIsBig();
  }, 500);
}

function resultMathBack(key, footballItem) {
  let arrayTref = Array.from(footballItem[key]);
  footballItem[key + "result"] = 0;
  arrayTref.forEach((item, index) => {
    footballItem[key + "result"] += getSixHistoryMatch(item, index);
  });
}

function getSixHistoryMatch(resultOfMatch, index) {
  let weightTotal = 0;
  switch (resultOfMatch) {
    case "胜":
      weightTotal += setWeight(index) * 2;
      break;
    case "平":
      weightTotal += setWeight(index) * 1;
      break;
    case "负":
      weightTotal += setWeight(index) * 0.5;
      break;
  }
  return weightTotal;
}

function setWeight(index) {
  let weight = 0;
  switch (index) {
    case 0:
      weight = 280;
      break;
    case 1:
      weight = 250;
      break;
    case 2:
      weight = 230;
      break;
    case 3:
      weight = 200;
      break;
    case 4:
      weight = 150;
      break;
    case 5:
      weight = 125;
      break;
  }
  return weight;
}

// main();

// export default {
//   main,
// };
module.exports = {
  main,
};
