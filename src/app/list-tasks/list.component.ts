import {Component, OnInit} from '@angular/core';
import {TaskService} from '../task.service';
import {Itask} from '../itask';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    title = 'Task Management';
    tasks: Itask[] = [];

    constructor(private taskService: TaskService) {
    }

    ngOnInit() {
        this.getTasks();
    }

    getTasks() {
        return this.taskService.getTask().subscribe(
            data => {
                this.tasks = data;
            });
    }

    deleteTask(id) {
        this.taskService.deleteTask(id).subscribe(
            () => {
                this.tasks = this.tasks.filter(t => t.id !== id);
            }
        );
    }

}
