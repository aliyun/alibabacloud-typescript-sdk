// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAgentTaskResponseBodyDataJobs } from "./GetAgentTaskResponseBodyDataJobs";


export class GetAgentTaskResponseBodyData extends $dara.Model {
  jobs?: GetAgentTaskResponseBodyDataJobs[];
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      jobs: 'jobs',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': GetAgentTaskResponseBodyDataJobs },
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.jobs)) {
      $dara.Model.validateArray(this.jobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

