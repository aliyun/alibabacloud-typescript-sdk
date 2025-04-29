// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPhoneTwiceTelVerifyResponseBodyData extends $dara.Model {
  /**
   * @example
   * 示例值示例值
   */
  carrierCode?: string;
  /**
   * @example
   * 73
   */
  verifyResult?: number;
  static names(): { [key: string]: string } {
    return {
      carrierCode: 'CarrierCode',
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carrierCode: 'string',
      verifyResult: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

