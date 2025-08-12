// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAsynJobsResponseBodyJobs extends $dara.Model {
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B5****
   */
  id?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   Succeeded: The task is successful.
   * *   Failed: The task fails.
   * *   Processing: The task is being processed.
   * 
   * @example
   * Succeeded
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsynJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried tasks.
   */
  jobs?: ListAsynJobsResponseBodyJobs[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF3******
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 1000
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
      jobs: { 'type': 'array', 'itemType': ListAsynJobsResponseBodyJobs },
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

