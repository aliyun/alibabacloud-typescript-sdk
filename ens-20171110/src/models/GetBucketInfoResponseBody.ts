// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetBucketInfoResponseBodyBucketInfo } from "./GetBucketInfoResponseBodyBucketInfo";


export class GetBucketInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of bucket information.
   */
  bucketInfo?: GetBucketInfoResponseBodyBucketInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C5831388-2D4B-46F4-A96B-D4E6BD06E7521
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bucketInfo: 'BucketInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketInfo: GetBucketInfoResponseBodyBucketInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.bucketInfo && typeof (this.bucketInfo as any).validate === 'function') {
      (this.bucketInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

