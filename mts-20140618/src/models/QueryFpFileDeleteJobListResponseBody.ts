// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryFpFileDeleteJobListResponseBodyFpFileDeleteJobList } from "./QueryFpFileDeleteJobListResponseBodyFpFileDeleteJobList";
import { QueryFpFileDeleteJobListResponseBodyNonExistIds } from "./QueryFpFileDeleteJobListResponseBodyNonExistIds";


export class QueryFpFileDeleteJobListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The jobs of deleting media files from a media fingerprint library. For more information, see the "FpFileDeleteJob" section of the [Data types](https://help.aliyun.com/document_detail/93555.html) topic.
   */
  fpFileDeleteJobList?: QueryFpFileDeleteJobListResponseBodyFpFileDeleteJobList;
  /**
   * @remarks
   * The response parameters.
   */
  nonExistIds?: QueryFpFileDeleteJobListResponseBodyNonExistIds;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D127C68E-F1A1-4CE5-A874-8FF724881A12
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fpFileDeleteJobList: 'FpFileDeleteJobList',
      nonExistIds: 'NonExistIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpFileDeleteJobList: QueryFpFileDeleteJobListResponseBodyFpFileDeleteJobList,
      nonExistIds: QueryFpFileDeleteJobListResponseBodyNonExistIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.fpFileDeleteJobList && typeof (this.fpFileDeleteJobList as any).validate === 'function') {
      (this.fpFileDeleteJobList as any).validate();
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

