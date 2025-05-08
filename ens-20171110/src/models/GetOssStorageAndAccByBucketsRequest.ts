// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOssStorageAndAccByBucketsRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the bucket.
   * 
   * @example
   * my-bucket
   */
  bucketList?: string;
  static names(): { [key: string]: string } {
    return {
      bucketList: 'BucketList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

