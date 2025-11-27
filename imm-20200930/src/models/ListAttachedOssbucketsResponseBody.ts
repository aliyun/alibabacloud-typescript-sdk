// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAttachedOSSBucketsResponseBodyAttachedOSSBuckets extends $dara.Model {
  /**
   * @remarks
   * Timestamp of the project creation time, formatted as RFC3339Nano.
   * 
   * @example
   * 2021-06-29T14:50:13.011643661+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * Description
   * 
   * @example
   * test bucket
   */
  description?: string;
  /**
   * @remarks
   * OSS Bucket name.
   * 
   * @example
   * test-bucket
   */
  OSSBucket?: string;
  /**
   * @remarks
   * User ID.
   * 
   * @example
   * 1023***********
   */
  ownerId?: string;
  /**
   * @remarks
   * Project name.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * Timestamp of the project modification time, formatted as RFC3339Nano.
   * 
   * @example
   * 2021-06-29T14:50:13.011643661+08:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      OSSBucket: 'OSSBucket',
      ownerId: 'OwnerId',
      projectName: 'ProjectName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      OSSBucket: 'string',
      ownerId: 'string',
      projectName: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAttachedOSSBucketsResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of bound OSS Buckets.
   */
  attachedOSSBuckets?: ListAttachedOSSBucketsResponseBodyAttachedOSSBuckets[];
  /**
   * @remarks
   * Pagination token. When the total number of tasks in the list exceeds the set MaxResults, this token is used for pagination. This parameter has a value only when not all matching task lists are returned.
   * 
   * Use this value as NextToken in the next call to return the subsequent task list.
   * 
   * @example
   * MTIzNDU2Nzg6aW1tdGVzdDpleGFtcGxlYnVja2V0OmRhdGFzZXQwMDE6b3NzOi8vZXhhbXBsZWJ1Y2tldC9zYW1wbGVvYmplY3QxLmpwZw==
   */
  nextToken?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 9847E7D0-A9A3-0053-84C6-BA16FF******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      attachedOSSBuckets: 'AttachedOSSBuckets',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachedOSSBuckets: { 'type': 'array', 'itemType': ListAttachedOSSBucketsResponseBodyAttachedOSSBuckets },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachedOSSBuckets)) {
      $dara.Model.validateArray(this.attachedOSSBuckets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

