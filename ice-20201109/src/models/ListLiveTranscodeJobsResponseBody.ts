// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLiveTranscodeJobsResponseBodyJobList } from "./ListLiveTranscodeJobsResponseBodyJobList";


export class ListLiveTranscodeJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of transcoding jobs.
   */
  jobList?: ListLiveTranscodeJobsResponseBodyJobList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobList: 'JobList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobList: { 'type': 'array', 'itemType': ListLiveTranscodeJobsResponseBodyJobList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobList)) {
      $dara.Model.validateArray(this.jobList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

