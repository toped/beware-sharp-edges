import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    itemCount:number;
    btnText:string = 'Add an item';
    goalText:string = 'My first life goal';
    goals = [];

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

}
