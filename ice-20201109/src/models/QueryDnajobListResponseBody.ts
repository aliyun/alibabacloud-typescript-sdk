// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryDNAJobListResponseBodyJobList } from "./QueryDnajobListResponseBodyJobList";


export class QueryDNAJobListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried media fingerprint analysis jobs.
   */
  jobList?: QueryDNAJobListResponseBodyJobList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25818875-5F78-4A13-BEF6-D7393642CA58
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobList: 'JobList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobList: { 'type': 'array', 'itemType': QueryDNAJobListResponseBodyJobList },
      requestId: 'string',
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

