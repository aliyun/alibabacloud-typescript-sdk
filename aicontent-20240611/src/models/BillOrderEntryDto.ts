// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BillOrderEntryDTO extends $dara.Model {
  /**
   * @example
   * 100.00
   */
  amount?: number;
  /**
   * @example
   * 100.00
   */
  balanceAfter?: number;
  /**
   * @example
   * 0.00
   */
  balanceBefore?: number;
  /**
   * @example
   * permanent
   */
  balanceType?: string;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  createTime?: string;
  /**
   * @example
   * in
   */
  direction?: string;
  /**
   * @example
   * qwen-max
   */
  modelCode?: string;
  /**
   * @example
   * 1
   */
  operatorId?: string;
  /**
   * @example
   * ord_xxxxxxxx
   */
  orderId?: string;
  /**
   * @example
   * recharge
   */
  orderType?: string;
  /**
   * @example
   * Top-up
   */
  remark?: string;
  /**
   * @example
   * console
   */
  source?: string;
  /**
   * @example
   * 100.00
   */
  totalAfter?: number;
  /**
   * @example
   * 0.00
   */
  totalBefore?: number;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      balanceAfter: 'balanceAfter',
      balanceBefore: 'balanceBefore',
      balanceType: 'balanceType',
      createTime: 'createTime',
      direction: 'direction',
      modelCode: 'modelCode',
      operatorId: 'operatorId',
      orderId: 'orderId',
      orderType: 'orderType',
      remark: 'remark',
      source: 'source',
      totalAfter: 'totalAfter',
      totalBefore: 'totalBefore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      balanceAfter: 'number',
      balanceBefore: 'number',
      balanceType: 'string',
      createTime: 'string',
      direction: 'string',
      modelCode: 'string',
      operatorId: 'string',
      orderId: 'string',
      orderType: 'string',
      remark: 'string',
      source: 'string',
      totalAfter: 'number',
      totalBefore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

