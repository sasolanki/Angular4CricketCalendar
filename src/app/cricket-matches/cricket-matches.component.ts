import { Component, OnInit } from '@angular/core';
import { CricketService } from '../cricket.service';

@Component({
  selector: 'app-cricket-matches',
  templateUrl: './cricket-matches.component.html',
  styleUrls: ['./cricket-matches.component.css']
})
export class CricketMatchesComponent implements OnInit {

  matches: any[] = []; // Store data from the service

  constructor(private cricketService: CricketService) { }

  ngOnInit() {
    this.fetchMatches();
  }

  fetchMatches() {
    this.matches = [];
    this.cricketService.getMatches().subscribe(
      matches => {
        this.matches = matches;
        console.log(matches);
      },
      error => {
        this.matches = [];
        console.error(error);
      }
    );
  }
}
