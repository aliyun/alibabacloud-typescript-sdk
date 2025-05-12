// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaListResponseBodyMediaList } from "./QueryMediaListResponseBodyMediaList";
import { QueryMediaListResponseBodyNonExistMediaIds } from "./QueryMediaListResponseBodyNonExistMediaIds";


export class QueryMediaListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of media files.
   */
  mediaList?: QueryMediaListResponseBodyMediaList;
  /**
   * @remarks
   * The IDs of the media files that do not exist. This parameter is not returned when all specified media files exist.
   */
  nonExistMediaIds?: QueryMediaListResponseBodyNonExistMediaIds;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 283DC68C-146F-4489-A2A1-2F88F1472A56
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaList: 'MediaList',
      nonExistMediaIds: 'NonExistMediaIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaList: QueryMediaListResponseBodyMediaList,
      nonExistMediaIds: QueryMediaListResponseBodyNonExistMediaIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.mediaList && typeof (this.mediaList as any).validate === 'function') {
      (this.mediaList as any).validate();
    }
    if(this.nonExistMediaIds && typeof (this.nonExistMediaIds as any).validate === 'function') {
      (this.nonExistMediaIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

