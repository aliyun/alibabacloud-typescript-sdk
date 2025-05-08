// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetOssStorageAndAccByBucketsResponseBodyBucketList } from "./GetOssStorageAndAccByBucketsResponseBodyBucketList";


export class GetOssStorageAndAccByBucketsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the bucket.
   */
  bucketList?: GetOssStorageAndAccByBucketsResponseBodyBucketList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 112F4860-F1B2-58DD-8FC0-75F19DA1C4BF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bucketList: 'BucketList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketList: { 'type': 'array', 'itemType': GetOssStorageAndAccByBucketsResponseBodyBucketList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bucketList)) {
      $dara.Model.validateArray(this.bucketList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

