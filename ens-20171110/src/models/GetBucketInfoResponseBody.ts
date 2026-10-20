// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBucketInfoResponseBodyBucketInfo extends $dara.Model {
  /**
   * @remarks
   * Bucket access control list type:
   * 
   * - **public-read-write**: public-read-write
   * 
   * - **public-read**: public-read
   * 
   * - **private**: private (default)
   * 
   * @example
   * private
   */
  bucketAcl?: string;
  /**
   * @remarks
   * Bucket name.
   * 
   * @example
   * test
   */
  bucketName?: string;
  /**
   * @remarks
   * Comments.
   * 
   * @example
   * das
   */
  comment?: string;
  /**
   * @remarks
   * Bucket creation time. Represented in ISO8601 standard, using UTC time. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2022-10-12T05:45:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * Single node storage. Value: sink.
   * 
   * @example
   * sink
   */
  logicalBucketType?: string;
  /**
   * @remarks
   * Bucket modification time. Represented in ISO8601 standard, using UTC time. Format: yyyy-MM-ddTHH:mm:ssZ.
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

export class GetBucketInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Bucket information list.
   */
  bucketInfo?: GetBucketInfoResponseBodyBucketInfo;
  /**
   * @remarks
   * Request ID.
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

