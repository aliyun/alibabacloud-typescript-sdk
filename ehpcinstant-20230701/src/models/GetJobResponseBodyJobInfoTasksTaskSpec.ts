// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetJobResponseBodyJobInfoTasksTaskSpecResource } from "./GetJobResponseBodyJobInfoTasksTaskSpecResource";
import { GetJobResponseBodyJobInfoTasksTaskSpecTaskExecutor } from "./GetJobResponseBodyJobInfoTasksTaskSpecTaskExecutor";


export class GetJobResponseBodyJobInfoTasksTaskSpec extends $dara.Model {
  resource?: GetJobResponseBodyJobInfoTasksTaskSpecResource;
  taskExecutor?: GetJobResponseBodyJobInfoTasksTaskSpecTaskExecutor[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
      taskExecutor: 'TaskExecutor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: GetJobResponseBodyJobInfoTasksTaskSpecResource,
      taskExecutor: { 'type': 'array', 'itemType': GetJobResponseBodyJobInfoTasksTaskSpecTaskExecutor },
    };
  }

  validate() {
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    if(Array.isArray(this.taskExecutor)) {
      $dara.Model.validateArray(this.taskExecutor);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

