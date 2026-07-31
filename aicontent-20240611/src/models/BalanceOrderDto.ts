// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BalanceOrderDTO extends $dara.Model {
  /**
   * @example
   * 100.00
   */
  amount?: number;
  /**
   * @example
   * 600.00
   */
  balanceAfter?: number;
  /**
   * @example
   * 500.00
   */
  balanceBefore?: number;
  /**
   * @example
   * permanent
   */
  balanceType?: string;
  /**
   * @example
   * 2024-07-15T10:30:00+08:00
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
   * 12345
   */
  operatorId?: string;
  /**
   * @example
   * ord_20240715_abc123
   */
  orderId?: string;
  /**
   * @example
   * recharge
   */
  orderType?: string;
  /**
   * @example
   * Administrator manual recharge
   */
  remark?: string;
  /**
   * @example
   * console
   */
  source?: string;
  /**
   * @example
   * 1600.00
   */
  totalAfter?: number;
  /**
   * @example
   * 1500.00
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

