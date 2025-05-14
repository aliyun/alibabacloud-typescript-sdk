// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMinutesResponseBodyAudioList } from "./QueryMinutesResponseBodyAudioList";


export class QueryMinutesResponseBody extends $dara.Model {
  audioList?: QueryMinutesResponseBodyAudioList[];
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      audioList: 'audioList',
      requestId: 'requestId',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioList: { 'type': 'array', 'itemType': QueryMinutesResponseBodyAudioList },
      requestId: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.audioList)) {
      $dara.Model.validateArray(this.audioList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

