import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Rock Paper Scissors";
    let UserScore = 0;
    let CompScore = 0;

    const Choicess = document.querySelectorAll(".choice");
    const massage = document.querySelector("#msg");
    const usrescorePara = document.querySelector("#user-id");
    const compscorePara = document.querySelector("#comp-id");

    // computer funtion
    const genratecompChoice = () => {
      //rock paper scissor
      const optioncomp = ["rock", "paper", "scissors"];
      const randomIdx = Math.floor(Math.random() * 3);
      return optioncomp[randomIdx];
    };

    const DrawGame = () => {
      console.log("Game Is Draw");
      massage.innerText = "Game is Draw Play Again !";
      massage.style.backgroundColor = "tomato";
    };

    // winner function
    const ShowWinner = (userWin, UserChoice, CompChoie) => {
      if (userWin) {
        massage.innerText = `You Win !Your ${UserChoice} Beats ${CompChoie}`;
        massage.style.backgroundColor = "green";
        UserScore++;
        usrescorePara.innerText = UserScore;
      } else {
        console.log("you Lose");
        massage.innerText = `You lose! ${CompChoie} Beats Your ${UserChoice}`;
        massage.style.backgroundColor = "red";
        CompScore++;
        compscorePara.innerText = CompScore;
      }
    };

    // compaision function
    const playgame = (UserChoice) => {
      console.log("user Choice", UserChoice);

      // generate computer choie
      const CompChoie = genratecompChoice();
      console.log("Computer Choice", CompChoie);

      // compaision
      if (UserChoice === CompChoie) {
        DrawGame();
      } else {
        let userWin = true;
        if (UserChoice === "rock") {
          //computer  Scissor ,paper
          userWin = CompChoie === "paper" ? false : true;
        } else if (UserChoice === "paper") {
          //computer Scissor, rock
          userWin = CompChoie === "scissors" ? false : true;
        } //if (userWin === "scissors")
        else {
          // computer paper,rock
          userWin = CompChoie === "rock" ? false : true;
        }
        ShowWinner(userWin, UserChoice, CompChoie);
      }
    };

    // user clik function
    Choicess.forEach((Choic) => {
      Choic.addEventListener("click", () => {
        const UserChoiceId = Choic.getAttribute("id");
        // console.log("Choic",UserChoiceId);
        playgame(UserChoiceId);
      });
    });
  }, []);

  return (
    <>
      <h1 >Rock Paper Scissors</h1>

      <div class="choices">
        <div class="choice" id="rock">
          <img src="../src/assets/rock.png" alt="" />
        </div>
        <div class="choice" id="paper">
          <img src="../src/assets/paper.png" alt="" />
        </div>
        <div class="choice" id="scissors">
          <img src="../src/assets/scissors.png" alt="" />
        </div>
      </div>

      <div class="score-board">
        <div class="score">
          <p id="user-id">0</p>
          <p>You</p>
        </div>
        <div class="score">
          <p id="comp-id">0</p>
          <p>Comp</p>
        </div>
      </div>

      <div class="msg-container">
        <p id="msg">Play your Move</p>
      </div>
    </>
  );
}

export default App;
