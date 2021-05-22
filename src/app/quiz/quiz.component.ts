import { Component, OnInit } from '@angular/core';

import { Option, Que, Quiz, QuizConfig } from '../tsfiles/index';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  quizes: any[];
  quiz: Quiz = new Quiz(null);
  mode = 'quiz';
  quizName: string;
  config: QuizConfig = {
    'allowBack': true,
    'allowReview': true,
    'autoMove': false,  
    'pageSize': 1,
    'requiredAll': false,  
    'richText': false,
    'shuffleQuestions': false,
    'shuffleOptions': false,
    'showPager': true,
    'theme': 'none'
  };

  pager = {
    index: 0,
    size: 1,
    count: 1
  };
  

  constructor() { }

  ngOnInit() {
    this.quizes =[
      { id: 'json_files/questions.json', name: 'General quiz' }
      
    ];
    this.quizName = this.quizes[0].id;
    var ob={
      
        "id": 1,
        "name": "JavaScript Quiz",
        "description": "JavaScript Quiz (Basic Multiple Choice Questions for JavaScript Developers)",
        "questions": [
            {
                "id": 1010,
                "name": "What is the Sanskrit word that means “spirit,” “person,” “self” or “consciousness,” and “deity” and also describes the primordial being from whose body the universe was created?",
                "questionTypeId": 1,
                "options": [
                    {
                        "id": 5,
                        "questionId": 1,
                        "name": "Vishnu",
                        "isAnswer": false
                    },
                    {
                        "id": 6,
                        "questionId": 1,
                        "name": "Purusha",
                        "isAnswer": true
                    },
                    {
                        "id": 7,
                        "questionId": 1,
                        "name": "shakti",
                        "isAnswer": false
                    },
                    {
                        "id": 8,
                        "questionId": 1,
                        "name": "shiva",
                        "isAnswer": false
                    }
                ],
                "questionType": {
                    "id": 1,
                    "name": "Multiple Choice",
                    "isActive": true
                }
            },
            {
                "id": 1011,
                "name": "What is the oldest of the sacred books of Hinduism, composed in an ancient form of Sanskrit about 1500 BCE?",
                "questionTypeId": 1,
                "options": [
                    {
                        "id": 5,
                        "questionId": 1,
                        "name": "the Aranyakas",
                        "isAnswer": false
                    },
                    {
                        "id": 6,
                        "questionId": 1,
                        "name": "the Brahmanas",
                        "isAnswer": false
                    },
                    {
                        "id": 7,
                        "questionId": 1,
                        "name": "the Rigveda",
                        "isAnswer": true
                    },
                    {
                        "id": 8,
                        "questionId": 1,
                        "name": "the Upanishads",
                        "isAnswer": false
                    }
                ],
                "questionType": {
                    "id": 1,
                    "name": "Multiple Choice",
                    "isActive": true
                }
            },
            {
                "id": 1012,
                "name": "What is the term for each of the 10 books into which the Rigveda is divided?",
                "questionTypeId": 1,
                "options": [
                    {
                        "id": 5,
                        "questionId": 1,
                        "name": "mandala",
                        "isAnswer": true
                    },
                    {
                        "id": 6,
                        "questionId": 1,
                        "name": "aura",
                        "isAnswer": false
                    },
                    {
                        "id": 7,
                        "questionId": 1,
                        "name": "chakra",
                        "isAnswer": false
                    },
                    {
                        "id": 8,
                        "questionId": 1,
                        "name": "dharma",
                        "isAnswer": false
                    }
                ],
                "questionType": {
                    "id": 1,
                    "name": "Multiple Choice",
                    "isActive": true
                }
            }
            
                
    
        ]
    
    };
    this.quiz = new Quiz(ob);
    this.pager.count = this.quiz.questions.length;
    this.mode = 'quiz';
  }

  

  

  

  get filteredQuestions() {
    return (this.quiz.questions) ?
      this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }

  onSelect(question: Que, option: Option) {
    if (question.questionTypeId === 1) {
      question.options.forEach((x) => { if (x.id !== option.id) x.selected = false; });
    }

    if (this.config.autoMove) {
      this.goTo(this.pager.index + 1);
    }
  }

  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      this.mode = 'quiz';
    }
  }

  isAnswered(question: Que) {
    return question.options.find(x => x.selected) ? 'Answered' : 'Not Answered';
  };

  isCorrect(question: Que) {
    return question.options.every(x => x.selected === x.isAnswer) ? 'correct' : 'wrong';
  };

  onSubmit() {
    let answers = [];
    this.quiz.questions.forEach(x => answers.push({ 'quizId': this.quiz.id, 'questionId': x.id, 'answered': x.answered }));

    // Post your data to the server here. answers contains the questionId and the users' answer.
    console.log(this.quiz.questions);
    this.mode = 'result';
  }
}
