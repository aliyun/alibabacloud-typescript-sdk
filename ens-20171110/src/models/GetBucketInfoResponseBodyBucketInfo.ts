// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBucketInfoResponseBodyBucketInfo extends $dara.Model {
  /**
   * @remarks
   * The ACL of the bucket.
   * 
   * *   **public-read-write**
   * *   **public-read**
   * *   **private** (default)
   * 
   * @example
   * private
   */
  bucketAcl?: string;
  /**
   * @remarks
   * The name of the bucket.
   * 
   * @example
   * test
   */
  bucketName?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * das
   */
  comment?: string;
  /**
   * @remarks
   * The time when the bucket was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-10-12T05:45:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * Single-node storage. Set the value to sink.
   * 
   * @example
   * sink
   */
  logicalBucketType?: string;
  /**
   * @remarks
   * The time when the bucket was modified. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-10-12T06:45:00Z
   */
  modifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      bucketAcl: 'BucketAcl',
      bucketName: 'BucketName',
      comment: 'Comment',
      createTime: 'CreateTime',
      logicalBucketType: 'LogicalBucketType',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketAcl: 'string',
      bucketName: 'string',
      comment: 'string',
      createTime: 'string',
      logicalBucketType: 'string',
      modifyTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

