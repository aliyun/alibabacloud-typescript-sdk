// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBatchTranslateResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 86D18195-D89C-4C8C-9DC4-5FCE789CE6D5
   */
  requestId?: string;
  translatedList?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      translatedList: 'TranslatedList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      translatedList: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.translatedList)) {
      $dara.Model.validateArray(this.translatedList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

