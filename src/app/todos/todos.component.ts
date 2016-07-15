import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  moduleId: module.id,
  selector: 'app-todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  text;
  constructor(private _todoService: TodoService) {

  }

  ngOnInit() {
    this.todos = [
      {
        text: 'Pickup kids at school'
      },
      {
        text: 'Meeting with boos'
      },
      {
        text: 'Dinner with wife'
      }
    ];
  }

  addTodo() {
    console.log(this.text);
    this.todos.push(
      {
        text: this.text
      }
    );
  }

  deleteTodo(todoText) {
    for(var i = 0; i < this.todos.length; i++) {
      if(this.todos[i].text == todoText) {
        this.todos.splice(i, 1);
      }
    }
  }
}
