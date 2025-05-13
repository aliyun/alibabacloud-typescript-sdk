// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobsResponseBodyDataJobs } from "./ListJobsResponseBodyDataJobs";


export class ListJobsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The jobs and their details.
   */
  jobs?: ListJobsResponseBodyDataJobs[];
  static names(): { [key: string]: string } {
    return {
      jobs: 'Jobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': ListJobsResponseBodyDataJobs },
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

