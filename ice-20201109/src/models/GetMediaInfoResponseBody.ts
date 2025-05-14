// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMediaInfoResponseBodyMediaInfo } from "./GetMediaInfoResponseBodyMediaInfo";


export class GetMediaInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the media asset.
   */
  mediaInfo?: GetMediaInfoResponseBodyMediaInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2FDE2411-DB8D-4A9A-875B-275798F14A5E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaInfo: 'MediaInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaInfo: GetMediaInfoResponseBodyMediaInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.mediaInfo && typeof (this.mediaInfo as any).validate === 'function') {
      (this.mediaInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

