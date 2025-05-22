// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPartnerProduceListRequest extends $dara.Model {
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
   * 1
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

