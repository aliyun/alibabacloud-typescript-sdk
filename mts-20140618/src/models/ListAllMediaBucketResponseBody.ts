// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAllMediaBucketResponseBodyMediaBucketList } from "./ListAllMediaBucketResponseBodyMediaBucketList";


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

