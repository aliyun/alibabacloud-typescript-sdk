// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchGetTrainTaskResponseBodyVoiceList } from "./BatchGetTrainTaskResponseBodyVoiceList";


export class BatchGetTrainTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 2226A26A-26E5-5AB9-A14A-54D612FCF96A
   */
  requestId?: string;
  voiceList?: BatchGetTrainTaskResponseBodyVoiceList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      voiceList: 'voiceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      voiceList: { 'type': 'array', 'itemType': BatchGetTrainTaskResponseBodyVoiceList },
    };
  }

  validate() {
    if(Array.isArray(this.voiceList)) {
      $dara.Model.validateArray(this.voiceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

