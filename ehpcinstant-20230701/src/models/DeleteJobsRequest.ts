// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteJobsRequestJobSpec } from "./DeleteJobsRequestJobSpec";


export class DeleteJobsRequest extends $dara.Model {
  executorIds?: string[];
  jobSpec?: DeleteJobsRequestJobSpec[];
  static names(): { [key: string]: string } {
    return {
      executorIds: 'ExecutorIds',
      jobSpec: 'JobSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorIds: { 'type': 'array', 'itemType': 'string' },
      jobSpec: { 'type': 'array', 'itemType': DeleteJobsRequestJobSpec },
    };
  }

  validate() {
    if(Array.isArray(this.executorIds)) {
      $dara.Model.validateArray(this.executorIds);
    }
    if(Array.isArray(this.jobSpec)) {
      $dara.Model.validateArray(this.jobSpec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

