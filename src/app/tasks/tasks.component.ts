import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {

  tasks= []; 
  category = "assignment";
  private addTaskAddress = '';
  title: string = 'Test Project for NameSpace';
  lat: number = 59.4402061;
  lng: number = 24.730356;
  zoom: number = 10;
  public previous: any;
  constructor(private TaskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

 
  getTasks(): void {
    this.TaskService.getTasks()
    .subscribe(
    tasks => {
      
      const dataMap = tasks.map((task, idx) => {
        task = {
            id : task.id,
            address: task.address.raw_address,
            lat : (task.address.location === null)? null: task.address.location.coordinates[1],
            lng : (task.address.location === null)? null: task.address.location.coordinates[0],
            label: (idx+1)
        }
      return task;})
     // console.log(something);
       this.tasks = dataMap;
      });
     }
addTask(data){
    this.TaskService.addTask(data)
      .subscribe(_ => {
        this.addTaskAddress = '';
        this.getTasks();
      });
  }

  clickedMarker(infowindow) {
    if (this.previous) {
        this.previous.close();
    }
    this.previous = infowindow;
 }
}
