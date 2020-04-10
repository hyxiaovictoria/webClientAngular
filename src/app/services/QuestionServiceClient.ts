import {Injectable} from '@angular/core';

@Injectable()
export class QuestionServiceClient {
  findQuestionsForQuiz = (quizId) =>
    // fetch(`http://localhost:3000/api/quizzes/${quizId}/questions`)
    fetch(`https://wbdv-sp20-xiaohai-server-node.herokuapp.com/api/quizzes/${quizId}/questions`)
    .then(response => response.json());
}
