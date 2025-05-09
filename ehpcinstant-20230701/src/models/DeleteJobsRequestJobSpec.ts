// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteJobsRequestJobSpecTaskSpec } from "./DeleteJobsRequestJobSpecTaskSpec";


export class DeleteJobsRequestJobSpec extends $dara.Model {
  /**
   * @example
   * job-xxxx
   */
  jobId?: string;
  taskSpec?: DeleteJobsRequestJobSpecTaskSpec[];
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      taskSpec: 'TaskSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      taskSpec: { 'type': 'array', 'itemType': DeleteJobsRequestJobSpecTaskSpec },
    };
  }

  validate() {
    if(Array.isArray(this.taskSpec)) {
      $dara.Model.validateArray(this.taskSpec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

