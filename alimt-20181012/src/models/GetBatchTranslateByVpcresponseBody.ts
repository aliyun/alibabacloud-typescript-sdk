// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBatchTranslateByVPCResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * Param checker failed! param:[sourceText]. reason: stringChecker not pass. Param length not less [0] and not greater[10000]
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DC2DCCC9-C3DF-4F59-8D8E-78185729F16D
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

