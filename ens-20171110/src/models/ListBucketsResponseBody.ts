// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListBucketsResponseBodyBucketInfos } from "./ListBucketsResponseBodyBucketInfos";


export class ListBucketsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of bucket information.
   */
  bucketInfos?: ListBucketsResponseBodyBucketInfos[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 435769C7-AA6F-4DC5-B3DB-A3DC0DE7E853
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of buckets that match the conditions.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bucketInfos: 'BucketInfos',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketInfos: { 'type': 'array', 'itemType': ListBucketsResponseBodyBucketInfos },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.bucketInfos)) {
      $dara.Model.validateArray(this.bucketInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

