import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TasksComponent } from './tasks.component';

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new task', () => {
    component.newTask = 'Test Task';
    component.addTask();
    expect(component.tasks.length).toBe(1);
    expect(component.tasks[0].text).toBe('Test Task');
    expect(component.tasks[0].completed).toBeFalse();
  });

  it('should delete a task', () => {
    component.tasks = [
      { text: 'Test Task', completed: false }
    ];
    component.deleteTask(0);
    expect(component.tasks.length).toBe(0);
  });

  it('should toggle task completion', () => {
    component.tasks = [
      { text: 'Test Task', completed: false }
    ];
    component.tasks[0].completed = true;
    expect(component.tasks[0].completed).toBeTrue();
  });
});
