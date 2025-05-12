// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryJobListResponseBodyJobList } from "./QueryJobListResponseBodyJobList";
import { QueryJobListResponseBodyNonExistJobIds } from "./QueryJobListResponseBodyNonExistJobIds";


export class QueryJobListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The transcoding jobs.
   */
  jobList?: QueryJobListResponseBodyJobList;
  /**
   * @remarks
   * The list of nonexistent job IDs. If all queried job IDs exist, the response does not contain this parameter.
   */
  nonExistJobIds?: QueryJobListResponseBodyNonExistJobIds;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 197ADF44-104C-514C-9F92-D8924CB34E2A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobList: 'JobList',
      nonExistJobIds: 'NonExistJobIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobList: QueryJobListResponseBodyJobList,
      nonExistJobIds: QueryJobListResponseBodyNonExistJobIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.jobList && typeof (this.jobList as any).validate === 'function') {
      (this.jobList as any).validate();
    }
    if(this.nonExistJobIds && typeof (this.nonExistJobIds as any).validate === 'function') {
      (this.nonExistJobIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

