import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [
        trigger('goals', [
            transition('* => *', [
                query(':enter', style({ opacity: 0}), {optional: true}),
                query(':enter', stagger('300ms', [
                    animate('.6s ease-in', keyframes([
                        style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
                        style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
                        style({opacity: 1, transform: 'translateY(0)', offset: 1}),
                    ]))
                ]), {optional: true}),
                query(':leave', stagger('300ms', [
                    animate('.6s ease-in', keyframes([
                        style({opacity: 1, transform: 'translateY(0)', offset: 0}),
                        style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
                        style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),
                    ]))
                ]), {optional: true})
            ])
        ])
    ]
})

export class HomeComponent implements OnInit {

    itemCount:number;
    btnText:string = 'Add an item';
    goalText:string = 'My first life goal';
    goals = ['test1', 'test2', 'test3'];

    constructor() { }

    /**
    Initiated when the app loads
    */
    ngOnInit() {
        this.itemCount = this.goals.length;
    }

    /**
    Add items to bucket list
    */
    addItem() {
        this.goals.push(this.goalText);
        this.goalText = '';
        this.itemCount = this.goals.length;
    }

    /**
    Remove items from bucket list
    */
    removeItem(i) {
        this.goals.splice(i, 1);
        this.itemCount = this.goals.length;
    }

}
