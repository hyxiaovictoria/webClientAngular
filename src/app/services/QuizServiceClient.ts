import {Injectable} from '@angular/core';

@Injectable()
export class QuizServiceClient {
  findAllQuizzes = () =>
    fetch('http://localhost:3000/api/quizzes')
      .then(response => response.json());

  findQuizById = (quizId) =>
    fetch(`http://localhost:3000/api/quizzes/${quizId}`)
      .then(response => response.json());
}
