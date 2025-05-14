// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPublicMediaInfoResponseBodyMediaInfo } from "./GetPublicMediaInfoResponseBodyMediaInfo";


export class GetPublicMediaInfoResponseBody extends $dara.Model {
  mediaInfo?: GetPublicMediaInfoResponseBodyMediaInfo;
  /**
   * @remarks
   * RequestId
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
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
      mediaInfo: GetPublicMediaInfoResponseBodyMediaInfo,
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

