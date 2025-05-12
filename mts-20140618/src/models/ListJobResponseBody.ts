// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobResponseBodyJobList } from "./ListJobResponseBodyJobList";


export class ListJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The transcoding jobs.
   */
  jobList?: ListJobResponseBodyJobList;
  /**
   * @remarks
   * The pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * 16f01ad6175e4230ac42bb5182cd****
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BC860F04-778A-472F-AB39-E1BF329C1EA8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobList: 'JobList',
      nextPageToken: 'NextPageToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobList: ListJobResponseBodyJobList,
      nextPageToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.jobList && typeof (this.jobList as any).validate === 'function') {
      (this.jobList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

