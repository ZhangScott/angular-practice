import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-dynamic-form-host',
  templateUrl: './dynamic-form-host.component.html',
  styleUrls: ['./dynamic-form-host.component.css'],
  providers: [QuestionService]
})
export class DynamicFormHostComponent implements OnInit {

  questions: any[];
  constructor(qs: QuestionService) {
    this.questions = qs.getQuestions();
   }

  ngOnInit() {
  }

}
