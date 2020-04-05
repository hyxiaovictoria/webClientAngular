import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  constructor() { }

  @Input()
  question = {_id: '', title: '', quizId: '', question: '', correct: '', type: '', choices: ''}

  @Input()
  answer = 'No answer yet'
  @Output()
  answerChange = new EventEmitter<string>();

  grading = false;
  faCheck = faCheck;
  faTimes = faTimes;

  grade = () => (this.grading = true)

  // submitAnswer = () => {
  //   this.answerChange.emit(this.answer);
  // }

  ngOnInit(): void {
  }

}
