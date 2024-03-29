import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  constructor() { }

  @Input()
  question = {_id: '', title: '', question: '', answer: '', correct: ''};

  @Input()
  answer = 'No answer yet';

  @Output()
  answerChange = new EventEmitter<string>();

  submitAnswer = () =>
  this.answerChange.emit(this.answer)

  grading = false;
  faCheck = faCheck;
  faTimes = faTimes;

  grade = () => (this.grading = true)

  ngOnInit(): void {
  }

}
