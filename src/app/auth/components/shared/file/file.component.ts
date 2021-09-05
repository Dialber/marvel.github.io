import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {

  
  @Input() value:string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
