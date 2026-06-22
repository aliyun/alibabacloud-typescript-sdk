// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateDynamicDictResponseBody extends $dara.Model {
  /**
   * @remarks
   * The custom weak passwords.
   */
  keywordList?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 09969D2C-4FAD-429E-BFBF-9A60DEF8****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keywordList: 'KeywordList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywordList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.keywordList)) {
      $dara.Model.validateArray(this.keywordList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

