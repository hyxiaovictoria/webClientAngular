import {Injectable} from '@angular/core';

@Injectable()
export class LessonServiceClient {
  findAllLessonsByModuleId = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/xiaohai/modules/${moduleId}/lessons`)
      .then(response => response.json());
}
