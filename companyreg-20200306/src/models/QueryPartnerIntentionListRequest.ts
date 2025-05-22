// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPartnerIntentionListRequest extends $dara.Model {
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
   * 10
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

