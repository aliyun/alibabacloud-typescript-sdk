// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllMediaBucketResponseBodyMediaBucketListMediaBucket extends $dara.Model {
  /**
   * @remarks
   * The name of the media bucket.
   * 
   * @example
   * example-bucket-****
   */
  bucket?: string;
  /**
   * @remarks
   * The settings of Object Storage Service (OSS) hotlink protection. For more information, see [Hotlink protection](https://help.aliyun.com/document_detail/31869.html).
   * 
   * @example
   * http://www.example.com
   */
  referer?: string;
  /**
   * @remarks
   * The type of the media bucket. Valid values:
   * 
   * *   Input: input media bucket
   * *   Output: output media bucket
   * 
   * @example
   * Input
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      referer: 'Referer',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      referer: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllMediaBucketResponseBodyMediaBucketList extends $dara.Model {
  mediaBucket?: ListAllMediaBucketResponseBodyMediaBucketListMediaBucket[];
  static names(): { [key: string]: string } {
    return {
      mediaBucket: 'MediaBucket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaBucket: { 'type': 'array', 'itemType': ListAllMediaBucketResponseBodyMediaBucketListMediaBucket },
    };
  }

  validate() {
    if(Array.isArray(this.mediaBucket)) {
      $dara.Model.validateArray(this.mediaBucket);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllMediaBucketResponseBody extends $dara.Model {
  /**
   * @remarks
   * The media buckets returned.
   */
  mediaBucketList?: ListAllMediaBucketResponseBodyMediaBucketList;
  /**
   * @remarks
   * The returned value of NextPageToken is a pagination token, which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * P2Zqo1PLGhZdygo-ajSsjUX5zrBHCgXy6j4hEvv****
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 79760D91-D3CF-4165-****-B7E2836EF62A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaBucketList: 'MediaBucketList',
      nextPageToken: 'NextPageToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaBucketList: ListAllMediaBucketResponseBodyMediaBucketList,
      nextPageToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.mediaBucketList && typeof (this.mediaBucketList as any).validate === 'function') {
      (this.mediaBucketList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

