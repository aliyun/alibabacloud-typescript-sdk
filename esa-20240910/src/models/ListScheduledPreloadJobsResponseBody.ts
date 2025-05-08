// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListScheduledPreloadJobsResponseBodyJobs } from "./ListScheduledPreloadJobsResponseBodyJobs";


export class ListScheduledPreloadJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of the prefetch tasks.
   */
  jobs?: ListScheduledPreloadJobsResponseBodyJobs[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CB1A380B-09F0-41BB-A198-72F8FD6DA2FE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of tasks returned.
   * 
   * @example
   * 5
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      jobs: 'Jobs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': ListScheduledPreloadJobsResponseBodyJobs },
      requestId: 'string',
      totalCount: 'string',
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

