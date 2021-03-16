import { Injectable } from '@angular/core';
import { Task } from './models/task.model';
import { WebRequestService } from './web-request.service';

@Injectable({
	providedIn: 'root',
})
export class TaskService {
	constructor(private request: WebRequestService) {}

	getLists() {
		return this.request.get('lists');
	}

	createList(title: string) {
		return this.request.post('lists', { title: title });
	}

	getTasks(listId: string) {
		return this.request.get(`lists/${listId}/tasks`);
	}

	createTask(title: string, listId) {
		return this.request.post(`lists/${listId}/tasks`, { title: title });
	}

	completeTask(task: Task) {
		return this.request.patch(`lists/${task._listId}/tasks/${task._id}`, {
			completed: true,
		});
	}
}
