// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateJobResponseBodyTasks } from "./CreateJobResponseBodyTasks";


export class CreateJobResponseBody extends $dara.Model {
  /**
   * @example
   * job-xxxx
   */
  jobId?: string;
  /**
   * @example
   * 896D338C-E4F4-41EC-A154-D605E5DE****
   */
  requestId?: string;
  tasks?: CreateJobResponseBodyTasks[];
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': CreateJobResponseBodyTasks },
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

