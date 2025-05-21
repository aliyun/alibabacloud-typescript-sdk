// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchQueryIndividuationTextResponseBodyTextList } from "./BatchQueryIndividuationTextResponseBodyTextList";


export class BatchQueryIndividuationTextResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 14878724-A835-578D-9DD5-4779ADCE9221
   */
  requestId?: string;
  textList?: BatchQueryIndividuationTextResponseBodyTextList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      textList: 'textList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      textList: { 'type': 'array', 'itemType': BatchQueryIndividuationTextResponseBodyTextList },
    };
  }

  validate() {
    if(Array.isArray(this.textList)) {
      $dara.Model.validateArray(this.textList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

