// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPartnerIntentionListResponseBodyData extends $dara.Model {
  /**
   * @example
   * I20211117092704000001
   */
  bizId?: string;
  /**
   * @example
   * esp.wangwen
   */
  bizType?: string;
  /**
   * @example
   * 18700000003
   */
  mobile?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
      mobile: 'Mobile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      mobile: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

