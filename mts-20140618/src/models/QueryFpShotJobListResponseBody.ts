// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryFpShotJobListResponseBodyFpShotJobList } from "./QueryFpShotJobListResponseBodyFpShotJobList";
import { QueryFpShotJobListResponseBodyNonExistIds } from "./QueryFpShotJobListResponseBodyNonExistIds";


export class QueryFpShotJobListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about media fingerprint analysis jobs.
   */
  fpShotJobList?: QueryFpShotJobListResponseBodyFpShotJobList;
  /**
   * @remarks
   * The token that is used to retrieve the next page of the query results. The value is a 32-bit UUID. If the returned query results cannot be displayed within one page, this parameter is returned. The value of this parameter is updated for each query.
   * 
   * @example
   * b11c171cced04565b1f38f1ecc39****
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The IDs of the jobs that do not exist.
   */
  nonExistIds?: QueryFpShotJobListResponseBodyNonExistIds;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-4A13-BEF6-D7393642CA58
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fpShotJobList: 'FpShotJobList',
      nextPageToken: 'NextPageToken',
      nonExistIds: 'NonExistIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShotJobList: QueryFpShotJobListResponseBodyFpShotJobList,
      nextPageToken: 'string',
      nonExistIds: QueryFpShotJobListResponseBodyNonExistIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.fpShotJobList && typeof (this.fpShotJobList as any).validate === 'function') {
      (this.fpShotJobList as any).validate();
    }
    if(this.nonExistIds && typeof (this.nonExistIds as any).validate === 'function') {
      (this.nonExistIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

