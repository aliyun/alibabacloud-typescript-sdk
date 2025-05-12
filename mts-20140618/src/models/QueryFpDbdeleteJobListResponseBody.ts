// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryFpDBDeleteJobListResponseBodyFpDBDeleteJobList } from "./QueryFpDbdeleteJobListResponseBodyFpDbdeleteJobList";
import { QueryFpDBDeleteJobListResponseBodyNonExistIds } from "./QueryFpDbdeleteJobListResponseBodyNonExistIds";


export class QueryFpDBDeleteJobListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The jobs of deleting a media fingerprint library. For more information, see the "FpDBDeleteJob" section of the [Data types](https://www.alibabacloud.com/help/en/apsaravideo-for-media-processing/latest/datatypes) topic.
   */
  fpDBDeleteJobList?: QueryFpDBDeleteJobListResponseBodyFpDBDeleteJobList;
  /**
   * @remarks
   * The IDs of the jobs that do not exist.
   */
  nonExistIds?: QueryFpDBDeleteJobListResponseBodyNonExistIds;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4247B23C-26DE-529F-8D9F-FD6811AE979B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fpDBDeleteJobList: 'FpDBDeleteJobList',
      nonExistIds: 'NonExistIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpDBDeleteJobList: QueryFpDBDeleteJobListResponseBodyFpDBDeleteJobList,
      nonExistIds: QueryFpDBDeleteJobListResponseBodyNonExistIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.fpDBDeleteJobList && typeof (this.fpDBDeleteJobList as any).validate === 'function') {
      (this.fpDBDeleteJobList as any).validate();
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

