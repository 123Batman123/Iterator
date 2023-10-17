export default class Team {
  constructor(teamList) {
    this.teamList = teamList;
  }

  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        const result = this.teamList[index += 1];
        return {
          value: result,
          done: index > this.teamList.length,
        };
      },
    };
  }
}
