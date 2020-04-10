import {Injectable} from '@angular/core';

@Injectable()
export class QuizServiceClient {
  findAllQuizzes = () =>
    //fetch('http://localhost:3000/api/quizzes')
    fetch('https://wbdv-sp20-xiaohai-server-node.herokuapp.com/api/quizzes')
      .then(response => response.json());

  findQuizById = (quizId) =>
    // fetch(`http://localhost:3000/api/quizzes/${quizId}`)
    fetch(`https://wbdv-sp20-xiaohai-server-node.herokuapp.com/api/quizzes/${quizId}`)
      .then(response => response.json());
}
