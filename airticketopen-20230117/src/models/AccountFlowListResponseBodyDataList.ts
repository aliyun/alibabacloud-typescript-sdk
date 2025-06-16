// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AccountFlowListResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 1000
   */
  afterAvailableAmount?: number;
  /**
   * @example
   * 1950.5
   */
  beforeAvailableAmount?: number;
  /**
   * @example
   * 49880***971
   */
  changeOrderNum?: number;
  /**
   * @example
   * 1627239841225842666
   */
  flowId?: number;
  /**
   * @example
   * 1676799185000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1676966530000
   */
  gmtModified?: number;
  /**
   * @example
   * 950.5
   */
  opAmount?: number;
  /**
   * @example
   * 2
   */
  opType?: number;
  /**
   * @example
   * 4988430***971
   */
  orderNum?: number;
  /**
   * @example
   * 1
   */
  orderType?: number;
  /**
   * @example
   * 4988430***971
   */
  outOrderNum?: string;
  /**
   * @example
   * 48430***971
   */
  refundOrderNum?: number;
  static names(): { [key: string]: string } {
    return {
      afterAvailableAmount: 'after_available_amount',
      beforeAvailableAmount: 'before_available_amount',
      changeOrderNum: 'change_order_num',
      flowId: 'flow_id',
      gmtCreate: 'gmt_create',
      gmtModified: 'gmt_modified',
      opAmount: 'op_amount',
      opType: 'op_type',
      orderNum: 'order_num',
      orderType: 'order_type',
      outOrderNum: 'out_order_num',
      refundOrderNum: 'refund_order_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterAvailableAmount: 'number',
      beforeAvailableAmount: 'number',
      changeOrderNum: 'number',
      flowId: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      opAmount: 'number',
      opType: 'number',
      orderNum: 'number',
      orderType: 'number',
      outOrderNum: 'string',
      refundOrderNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

