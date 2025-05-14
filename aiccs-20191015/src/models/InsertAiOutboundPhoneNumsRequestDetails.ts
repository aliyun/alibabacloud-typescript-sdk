// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertAiOutboundPhoneNumsRequestDetails extends $dara.Model {
  /**
   * @example
   * xxxx
   */
  bizData?: string;
  /**
   * @example
   * 150****0000
   */
  phoneNum?: string;
  static names(): { [key: string]: string } {
    return {
      bizData: 'BizData',
      phoneNum: 'PhoneNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizData: 'string',
      phoneNum: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

