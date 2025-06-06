// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaCensorJobListResponseBodyMediaCensorJobList } from "./QueryMediaCensorJobListResponseBodyMediaCensorJobList";
import { QueryMediaCensorJobListResponseBodyNonExistIds } from "./QueryMediaCensorJobListResponseBodyNonExistIds";


export class QueryMediaCensorJobListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried content moderation jobs.
   */
  mediaCensorJobList?: QueryMediaCensorJobListResponseBodyMediaCensorJobList;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. The value is 32-character UUID. If the returned query results cannot be displayed within one page, this parameter is returned. The value of this parameter is updated for each query.
   * 
   * @example
   * 9b1a42bc6e8d46e6a1383b7e7f01****
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The IDs of the jobs that do not exist. This parameter is not returned if all the specified jobs are found.
   */
  nonExistIds?: QueryMediaCensorJobListResponseBodyNonExistIds;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D1D5C080-8E2F-5030-8AB4-13092F17631B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaCensorJobList: 'MediaCensorJobList',
      nextPageToken: 'NextPageToken',
      nonExistIds: 'NonExistIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaCensorJobList: QueryMediaCensorJobListResponseBodyMediaCensorJobList,
      nextPageToken: 'string',
      nonExistIds: QueryMediaCensorJobListResponseBodyNonExistIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.mediaCensorJobList && typeof (this.mediaCensorJobList as any).validate === 'function') {
      (this.mediaCensorJobList as any).validate();
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

