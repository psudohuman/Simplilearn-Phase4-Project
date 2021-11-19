import { Component } from '@angular/core';

/**
 * @title Radios with ngModel
 */
@Component({
  selector: 'quiz-component',
  templateUrl: 'quiz.component.html',
  styleUrls: ['quiz.component.css'],
})
export class QuizComponent {
  selectedAnswer: string="";
  counter:number = 0;
  score : number =0;
  answers: string[] = [];
  showResult :boolean= true;
  ans:number=0;
  public increaseCounter(): void {
    if(this.counter<10){
      this.counter += 1;
      this.answers.push(this.selectedAnswer);
    }
   
    
    if (this.counter ==10) {
      this.submitAnswers();
    }
  }

  public submitAnswers(): void {
    this.ans = 0;
    console.log('Finally sumitted');

    this.questions.forEach((quesObj) => {
      if (quesObj.ans == this.answers[this.ans]) {
        this.score += 1;
      }
      this.ans += 1;
    });

    this.showResult = false;
    console.log('showResult ', this.showResult);
    console.log('Final score is : ', this.score);
  }

  questions: any[] = [
    {
      id: 1,
      desc: 'When was the first world war fought',
      a: '22 March 1919',
      b: '28 July 1914',
      c: '20 April 1921',
      d: '11 August 1917',
      ans: '28 July 1914',
    },
    {
      id: 2,
      desc: 'National bird of India',
      a: 'Parrot',
      b: 'Pigeon',
      c: 'Peacock',
      d: 'Eagle',
      ans: 'Peacock',
    },
    {
      id: 3,
      desc: 'Capital of Russia',
      a: 'Moscow',
      b: 'Brussels',
      c: 'Poland',
      d: 'Scotland',
      ans: 'Moscow',
    },
    {
      id: 4,
      desc: 'National sport of India',
      a: 'Badminton',
      b: 'Hockey',
      c: 'Cricket',
      d: 'Tennis',
      ans: 'Hockey',
    },
    {
      id: 5,
      desc: 'First President of India',
      a: 'Rajendra Prasad',
      b: 'Pratibha Patil',
      c: 'A.P.J. Abdul Kalam',
      d: 'Jail Singh',
      ans: 'Rajendra Prasad',
    },
    {
      id: 6,
      desc: 'What is the Currency of Japan',
      a: 'Dollar',
      b: 'Dirham',
      c: 'Yen',
      d: 'Euro',
      ans: 'Yen',
    },
    {
      id: 7,
      desc: 'When did India win the first Cricket World Cup',
      a: '1979',
      b: '2011',
      c: '2003',
      d: '1983',
      ans: '1983',
    },
    {
      id: 8,
      desc: 'When did Mahatma Gandhi die',
      a: '30 Jan 1948',
      b: '27 Feb 1947',
      c: '13 March 1951',
      d: '25 April 1953',
      ans: '30 Jan 1948',
    },
    {
      id: 9,
      desc: 'Tallest Mountain in the world',
      a: 'Mount Everest',
      b: 'K2',
      c: 'Kangchenjunga',
      d: 'Lhotse',
      ans: 'Mount Everest',
    },
    {
      id: 10,
      desc: 'First Person to go on Moon',
      a: 'Will Smith',
      b: 'Narendra Modi',
      c: 'Neil Armstrong',
      d: 'Rahul Gandhi',
      ans: 'Neil Armstrong',
    },
  ];
}
