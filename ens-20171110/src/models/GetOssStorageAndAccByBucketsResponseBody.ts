// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOssStorageAndAccByBucketsResponseBodyBucketList extends $dara.Model {
  /**
   * @remarks
   * The number of access requests.
   * 
   * @example
   * 1000
   */
  acc?: number;
  /**
   * @remarks
   * The OSS bucket name.
   * 
   * @example
   * my-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * The storage usage, in bytes.
   * 
   * @example
   * 1024
   */
  storageUsageByte?: number;
  static names(): { [key: string]: string } {
    return {
      acc: 'Acc',
      bucket: 'Bucket',
      storageUsageByte: 'StorageUsageByte',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acc: 'number',
      bucket: 'string',
      storageUsageByte: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssStorageAndAccByBucketsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The bucket information.
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

