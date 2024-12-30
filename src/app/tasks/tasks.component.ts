import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class TasksComponent {
  tasks: Task[] = [];
  newTask: string = '';

  addTask(): void {
    if (this.newTask.trim()) {
      this.tasks.push({
        text: this.newTask.trim(),
        completed: false
      });
      this.newTask = '';
      this.saveTasks();
    }
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
    this.saveTasks();
  }

  private saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
