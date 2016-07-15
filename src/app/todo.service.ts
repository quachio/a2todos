import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  constructor() {
      console.log('TodoService Initialized...');
  }

  getTodos() {
    var todos = JSON.parse(localStorage.getItem('todos'));
    console.log(todos);
    return todos;
  }

}
