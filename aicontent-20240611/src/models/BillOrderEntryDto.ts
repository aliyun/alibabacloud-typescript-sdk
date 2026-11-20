// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BillOrderEntryDTO extends $dara.Model {
  /**
   * @remarks
   * The change amount.
   * 
   * @example
   * 100.00
   */
  amount?: number;
  /**
   * @remarks
   * The balance after the change.
   * 
   * @example
   * 100.00
   */
  balanceAfter?: number;
  /**
   * @remarks
   * The balance before the change.
   * 
   * @example
   * 0.00
   */
  balanceBefore?: number;
  /**
   * @remarks
   * The balance type: permanent/monthly.
   * 
   * @example
   * permanent
   */
  balanceType?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The change direction: in/out.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The model code (available when gateway billing deduction is applied).
   * 
   * @example
   * qwen-max
   */
  modelCode?: string;
  /**
   * @remarks
   * The operator ID.
   * 
   * @example
   * 1
   */
  operatorId?: string;
  /**
   * @remarks
   * The change record ID.
   * 
   * @example
   * ord_xxxxxxxx
   */
  orderId?: string;
  /**
   * @remarks
   * The change type.
   * 
   * @example
   * recharge
   */
  orderType?: string;
  /**
   * @remarks
   * The remark.
   * 
   * @example
   * Top-up
   */
  remark?: string;
  /**
   * @remarks
   * The source.
   * 
   * @example
   * console
   */
  source?: string;
  /**
   * @remarks
   * The total balance after the change.
   * 
   * @example
   * 100.00
   */
  totalAfter?: number;
  /**
   * @remarks
   * The total balance before the change.
   * 
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

