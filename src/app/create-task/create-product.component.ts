import {Component, OnInit} from '@angular/core';
import {TaskService} from '../task.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Itask} from '../itask';

@Component({
    selector: 'app-create-product',
    templateUrl: './create-product.component.html',
    styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
    tasks: Itask[];
    createForm: FormGroup;

    constructor(private taskService: TaskService,
                private router: Router,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.createForm = this.formBuilder.group({
            title: '',
            content: '',
            due_date: '',
            image: '',
        });
    }

    onSubmit() {
        const {value} = this.createForm;
        const data = {...this.createForm, ...value};
        this.taskService.addTask(data).subscribe(
            task => {
                this.tasks.unshift(task);
                this.router.navigate(['/tasks']);
            }
        );
    }

}
