// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaInfoJobListResponseBodyMediaInfoJobList } from "./QueryMediaInfoJobListResponseBodyMediaInfoJobList";
import { QueryMediaInfoJobListResponseBodyNonExistMediaInfoJobIds } from "./QueryMediaInfoJobListResponseBodyNonExistMediaInfoJobIds";


export class QueryMediaInfoJobListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of each returned media information analysis job.
   */
  mediaInfoJobList?: QueryMediaInfoJobListResponseBodyMediaInfoJobList;
  /**
   * @remarks
   * Nonexistent media information analysis jobs.
   */
  nonExistMediaInfoJobIds?: QueryMediaInfoJobListResponseBodyNonExistMediaInfoJobIds;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 46A04AA5-B119-41BB-B750-7C5327AC3E7A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaInfoJobList: 'MediaInfoJobList',
      nonExistMediaInfoJobIds: 'NonExistMediaInfoJobIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaInfoJobList: QueryMediaInfoJobListResponseBodyMediaInfoJobList,
      nonExistMediaInfoJobIds: QueryMediaInfoJobListResponseBodyNonExistMediaInfoJobIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.mediaInfoJobList && typeof (this.mediaInfoJobList as any).validate === 'function') {
      (this.mediaInfoJobList as any).validate();
    }
    if(this.nonExistMediaInfoJobIds && typeof (this.nonExistMediaInfoJobIds as any).validate === 'function') {
      (this.nonExistMediaInfoJobIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

