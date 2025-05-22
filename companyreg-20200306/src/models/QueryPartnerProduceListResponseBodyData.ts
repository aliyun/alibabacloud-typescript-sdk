// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPartnerProduceListResponseBodyData extends $dara.Model {
  /**
   * @example
   * P20211216204717000001
   */
  bizId?: string;
  /**
   * @example
   * esp.cdn
   */
  bizType?: string;
  /**
   * @example
   * 18600000001
   */
  mobile?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
      mobile: 'mobile',
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

