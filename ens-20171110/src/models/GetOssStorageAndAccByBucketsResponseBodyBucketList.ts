// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOssStorageAndAccByBucketsResponseBodyBucketList extends $dara.Model {
  /**
   * @remarks
   * The number of times that the bucket is accessed.
   * 
   * @example
   * 1000
   */
  acc?: number;
  /**
   * @remarks
   * The name of the bucket.
   * 
   * @example
   * my-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * The storage usage of the bucket. Unit: bytes.
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

