import {Injectable} from '@angular/core';

@Injectable()
export class ModuleServiceClient {
  findAllModulesByCourseId = (courseId) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/xiaohai/courses/${courseId}/modules`)
      .then(response => response.json());
}
