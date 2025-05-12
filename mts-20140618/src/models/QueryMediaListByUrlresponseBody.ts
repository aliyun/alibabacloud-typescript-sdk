// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaListByURLResponseBodyMediaList } from "./QueryMediaListByUrlresponseBodyMediaList";
import { QueryMediaListByURLResponseBodyNonExistFileURLs } from "./QueryMediaListByUrlresponseBodyNonExistFileUrls";


export class QueryMediaListByURLResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of media files.
   */
  mediaList?: QueryMediaListByURLResponseBodyMediaList;
  /**
   * @remarks
   * The IDs of the media files that do not exist. This parameter is not returned if all specified media files exist.
   */
  nonExistFileURLs?: QueryMediaListByURLResponseBodyNonExistFileURLs;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1C8A0AEB-4321-485B-B4CB-DA4E9E6C9B42
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaList: 'MediaList',
      nonExistFileURLs: 'NonExistFileURLs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaList: QueryMediaListByURLResponseBodyMediaList,
      nonExistFileURLs: QueryMediaListByURLResponseBodyNonExistFileURLs,
      requestId: 'string',
    };
  }

  validate() {
    if(this.mediaList && typeof (this.mediaList as any).validate === 'function') {
      (this.mediaList as any).validate();
    }
    if(this.nonExistFileURLs && typeof (this.nonExistFileURLs as any).validate === 'function') {
      (this.nonExistFileURLs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

