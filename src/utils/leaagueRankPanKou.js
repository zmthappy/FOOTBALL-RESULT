function convertHandicap(position) {
  if (position == "平手") {
    return 0;
  } else if (
    position == "平半" ||
    position == "平/半" ||
    position == "受平/半"
  ) {
    if (position.indexOf("受") != -1) {
      return -0.25;
    } else {
      return 0.25;
    }
  } else if (position == "半球" || position == "受半球") {
    if (position.indexOf("受") != -1) {
      return -0.5;
    } else {
      return 0.5;
    }
  } else if (
    position == "半一" ||
    position == "半球/一球" ||
    position == "受半球/一球"
  ) {
    if (position.indexOf("受") != -1) {
      return -0.75;
    } else {
      return 0.75;
    }
  } else if (position == "一球" || position == "受一球") {
    if (position.indexOf("受") != -1) {
      return -1;
    } else {
      return 1;
    }
  } else if (position == "一球/球半" || position == "受一球/球半") {
    if (position.indexOf("受") != -1) {
      return -1.25;
    } else {
      return 1.25;
    }
  } else if (position == "球半" || position == "受球半") {
    if (position.indexOf("受") != -1) {
      return -1.5;
    } else {
      return 1.5;
    }
  } else if (position == "球半/两球" || position == "受球半/两球") {
    if (position.indexOf("受") != -1) {
      return -1.75;
    } else {
      return 1.75;
    }
  } else if (position == "两球" || position == "受两球") {
    if (position.indexOf("受") != -1) {
      return -2;
    } else {
      return 2;
    }
  } else if (position == "两球/两球半" || position == "受两球/两球半") {
    if (position.indexOf("受") != -1) {
      return -2.5;
    } else {
      return 2.5;
    }
  }
}

function getQIuDuiRanks(ThreeSeasonAverageHome, leageaName) {
  let rank = 0;
  switch (leageaName) {
    case "英超":
      rank = setTeamRankYingChao(ThreeSeasonAverageHome);
      break;
    case "英冠":
      rank = setTeamRankYingGuan(ThreeSeasonAverageHome);
      break;
    case "意甲":
      rank = setTeamRankYiJia(ThreeSeasonAverageHome);
      break;
    case "德甲":
      rank = setTeamRankDeJia(ThreeSeasonAverageHome);
      break;
    case "德乙":
      rank = setTeamRankDeYi(ThreeSeasonAverageHome);
      break;
    case "日职联":
      rank = setTeamRankRiZhiLian(ThreeSeasonAverageHome);
      break;
    case "法甲":
      rank = setTeamRankFaJia(ThreeSeasonAverageHome);
      break;
    case "法乙":
      rank = setTeamRank20(ThreeSeasonAverageHome);
      break;
    case "西甲":
      rank = setTeamRankXiJia(ThreeSeasonAverageHome);
      break;
    case "日职乙":
      rank = setTeamRankRiZhiYi(ThreeSeasonAverageHome);
      break;
    case "荷乙":
      return setTeamRankHeYi(ThreeSeasonAverageHome);
      break;
    case "荷甲":
      rank = setTeamRankHeJia(ThreeSeasonAverageHome);
      break;
    case "韩K联":
      rank = setTeamRank12(ThreeSeasonAverageHome);
      break;
    case "挪超":
      rank = setTeamRankNuoChao(ThreeSeasonAverageHome);
      break;
    case "瑞典超":
      rank = setTeamRankRuiChao(ThreeSeasonAverageHome);
      break;
    default:
      rank = setTeamRank20(ThreeSeasonAverageHome);
      break;
  }
  return rank;
}

function setTeamRankXiJia(rank) {
  if (rank < 3 && rank >= 1) {
    return 1;
  } else if (rank >= 4 && rank <= 7) {
    return 0.75;
  } else if (rank > 7 && rank <= 12) {
    return 0.5;
  } else if (rank > 12 && rank <= 17) {
    return 0.25;
  } else {
    return 0;
  }
}

function setTeamRankRiZhiYi(rank) {
  if (rank <= 3 && rank >= 1) {
    return 1;
  } else if (rank > 3 && rank <= 8) {
    return 0.75;
  } else if (rank > 8 && rank <= 12) {
    return 0.5;
  } else if (rank > 12 && rank <= 16) {
    return 0.25;
  } else {
    return 0;
  }
}

function setTeamRankRiZhiLian(rank) {
  if (rank <= 3 && rank >= 1) {
    return 1;
  } else if (rank > 3 && rank <= 6) {
    return 0.75;
  } else if (rank > 6 && rank <= 12) {
    return 0.5;
  } else if (rank > 12 && rank <= 16) {
    return 0.25;
  } else {
    return 0;
  }
}

function setTeamRankHeYi(rank) {
  if (rank <= 1 && rank >= 1) {
    return 1;
  } else if (rank > 1 && rank <= 8) {
    return 0.75;
  } else if (rank > 8 && rank <= 15) {
    return 0.5;
  } else if (rank > 15 && rank <= 18) {
    return 0.25;
  } else {
    return 0;
  }
}

function setTeamRankNuoChao(rank) {
  if (rank <= 1 && rank >= 1) {
    return 1;
  } else if (rank > 1 && rank <= 5) {
    return 0.75;
  } else if (rank > 5 && rank <= 10) {
    return 0.5;
  } else if (rank > 10 && rank <= 15) {
    return 0.25;
  } else {
    return 0;
  }
}

function setTeamRankRuiChao(rank) {
  if (rank <= 2 && rank >= 1) {
    return 1;
  } else if (rank > 2 && rank <= 4) {
    return 0.75;
  } else if (rank > 4 && rank <= 10) {
    return 0.5;
  } else if (rank > 10 && rank <= 14) {
    return 0.25;
  } else {
    return 0;
  }
}

function setTeamRankHeJia(rank) {
  if (rank <= 2 && rank >= 1) {
    return 1;
  } else if (rank > 2 && rank <= 5) {
    return 0.75;
  } else if (rank > 5 && rank <= 9) {
    return 0.5;
  } else if (rank > 10 && rank <= 16) {
    return 0.25;
  } else {
    return 0;
  }
}

function setTeamRankFaJia(rank) {
  if (rank <= 3 && rank >= 1) {
    return 1;
  } else if (rank > 3 && rank <= 8) {
    return 0.75;
  } else if (rank > 8 && rank <= 11) {
    return 0.5;
  } else if (rank > 11 && rank <= 17) {
    return 0.25;
  } else {
    return 0;
  }
}

function setTeamRankYingChao(rank) {
  if (rank <= 3 && rank >= 1) {
    return 1;
  } else if (rank > 3 && rank <= 8) {
    return 0.75;
  } else if (rank > 8 && rank <= 11) {
    return 0.5;
  } else if (rank > 11 && rank <= 17) {
    return 0.25;
  } else {
    return 0;
  }
}

function setTeamRankYingGuan(rank) {
  if (rank <= 4 && rank >= 1) {
    return 1;
  } else if (rank > 4 && rank <= 8) {
    return 0.75;
  } else if (rank > 8 && rank <= 14) {
    return 0.5;
  } else if (rank > 14 && rank <= 19) {
    return 0.25;
  } else {
    return 0;
  }
}

function setTeamRankYiJia(rank) {
  if (rank <= 1 && rank >= 1) {
    return 1;
  } else if (rank > 1 && rank <= 7) {
    return 0.75;
  } else if (rank > 7 && rank <= 12) {
    return 0.5;
  } else if (rank > 12 && rank <= 19) {
    return 0.25;
  } else {
    return 0;
  }
}

function setTeamRankDeJia(rank) {
  if (rank <= 2 && rank >= 1) {
    return 1;
  } else if (rank > 2 && rank <= 6) {
    return 0.75;
  } else if (rank > 6 && rank <= 10) {
    return 0.5;
  } else if (rank > 10 && rank <= 15) {
    return 0.25;
  } else {
    return 0;
  }
}

function setTeamRankDeYi(rank) {
  if (rank <= 3 && rank >= 1) {
    return 1;
  } else if (rank > 3 && rank <= 7) {
    return 0.75;
  } else if (rank > 7 && rank <= 11) {
    return 0.5;
  } else if (rank > 11 && rank <= 17) {
    return 0.25;
  } else {
    return 0;
  }
}

// 联赛队伍等于20时
function setTeamRank20(rank, teamObj) {
  if (rank <= 4 && rank >= 1) {
    return 1;
  } else if (rank > 4 && rank <= 8) {
    return 0.75;
  } else if (rank > 8 && rank <= 12) {
    return 0.5;
  } else if (rank > 12 && rank <= 16) {
    return 0.25;
  } else {
    return 0;
  }
}

function setTeamRank22(rank, teamObj) {
  if (rank <= 4 && rank >= 1) {
    return 1;
  } else if (rank > 4 && rank <= 8) {
    return 0.75;
  } else if (rank > 8 && rank <= 12) {
    return 0.5;
  } else if (rank > 14 && rank <= 18) {
    return 0.25;
  } else {
    return 0;
  }
}

// 联赛队伍等于24时
function setTeamRank24(rank, teamObj) {
  if (rank <= 3 && rank >= 1) {
    return 1;
  } else if (rank > 3 && rank <= 8) {
    return 0.75;
  } else if (rank > 8 && rank <= 14) {
    return 0.5;
  } else if (rank > 14 && rank <= 20) {
    return 0.25;
  } else {
    return 0;
  }
}

// 联赛队伍等于18时
function setTeamRank18(rank, teamObj) {
  if (rank <= 3 && rank >= 1) {
    return 1;
  } else if (rank > 3 && rank <= 8) {
    return 0.75;
  } else if (rank > 8 && rank <= 12) {
    return 0.5;
  } else if (rank > 12 && rank <= 16) {
    return 0.25;
  } else {
    return 0;
  }
}

// 联赛队伍等于12时
function setTeamRank12(rank, teamObj) {
  if (rank <= 2 && rank >= 1) {
    return 1;
  } else if (rank > 3 && rank <= 4) {
    return 0.75;
  } else if (rank > 4 && rank <= 8) {
    return 0.5;
  } else if (rank > 8 && rank <= 10) {
    return 0.25;
  } else {
    return 0;
  }
}

module.exports = {
  getQIuDuiRanks,
  convertHandicap,
};
