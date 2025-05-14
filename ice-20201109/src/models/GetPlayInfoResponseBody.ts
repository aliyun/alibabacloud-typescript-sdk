// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPlayInfoResponseBodyMediaBase } from "./GetPlayInfoResponseBodyMediaBase";
import { GetPlayInfoResponseBodyPlayInfoList } from "./GetPlayInfoResponseBodyPlayInfoList";


export class GetPlayInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the media asset.
   */
  mediaBase?: GetPlayInfoResponseBodyMediaBase;
  /**
   * @remarks
   * The information about the audio or video stream.
   */
  playInfoList?: GetPlayInfoResponseBodyPlayInfoList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaBase: 'MediaBase',
      playInfoList: 'PlayInfoList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaBase: GetPlayInfoResponseBodyMediaBase,
      playInfoList: { 'type': 'array', 'itemType': GetPlayInfoResponseBodyPlayInfoList },
      requestId: 'string',
    };
  }

  validate() {
    if(this.mediaBase && typeof (this.mediaBase as any).validate === 'function') {
      (this.mediaBase as any).validate();
    }
    if(Array.isArray(this.playInfoList)) {
      $dara.Model.validateArray(this.playInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

