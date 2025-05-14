// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetail } from "./QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetail";


export class QueryMediaCensorJobDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The results of the content moderation job.
   */
  mediaCensorJobDetail?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetail;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B42299E6-F71F-465F-8FE9-4FC2E3D3C2CA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaCensorJobDetail: 'MediaCensorJobDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaCensorJobDetail: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetail,
      requestId: 'string',
    };
  }

  validate() {
    if(this.mediaCensorJobDetail && typeof (this.mediaCensorJobDetail as any).validate === 'function') {
      (this.mediaCensorJobDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

