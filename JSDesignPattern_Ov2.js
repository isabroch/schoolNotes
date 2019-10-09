const game = (
  () => {
    let credit = 50;

    return {
      getCredit: () => {
        console.log(`Current credit: ${credit}`);
        return credit;
      },

      useCredit: (value) => {
        if (credit >= 0 + value) {
          credit -= value;
          console.log(`Used ${value} credit.`)
          console.log(`Current credit: ${credit}`);
        } else {
          console.log(`Cannot use ${value} credit.`)
          console.log(`Reason: not enough credit`, )
          console.log(`Current credit: ${credit}`);
          console.log(`Additional credit needed: ${value - credit}`);
        }
      },

      addCredit: (value) => {
        credit += value;
        console.log(`Added ${value} credit.`)
        console.log(`Current credit: ${credit}`);
      }

    }
  }
)();

game.useCredit(1);
game.useCredit(1);
game.useCredit(50);
game.addCredit(2);
game.useCredit(50);