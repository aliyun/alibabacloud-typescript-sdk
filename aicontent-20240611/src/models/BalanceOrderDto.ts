// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BalanceOrderDTO extends $dara.Model {
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
   * The pool balance after the change.
   * 
   * @example
   * 600.00
   */
  balanceAfter?: number;
  /**
   * @remarks
   * The pool balance before the change.
   * 
   * @example
   * 500.00
   */
  balanceBefore?: number;
  /**
   * @remarks
   * The balance type (permanent: Permanent / monthly: Monthly).
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
   * 2024-07-15T10:30:00+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * The direction (in: Income / out: Expense).
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The associated model code (available for deduction types).
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
   * 12345
   */
  operatorId?: string;
  /**
   * @remarks
   * The unique identifier of the change record.
   * 
   * @example
   * ord_20240715_abc123
   */
  orderId?: string;
  /**
   * @remarks
   * The change type (recharge: Recharge / periodic_recharge: Periodic recharge / deduct: Deduction / manual_deduct: Manual deduction / transfer_out: Transfer out / transfer_in: Transfer in / return_out: Refund out / return_in: Refund in / write_off: Write-off / monthly_expire: Monthly expiration / deficit_writeoff: Deficit write-off).
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
   * Manual recharge by administrator
   */
  remark?: string;
  /**
   * @remarks
   * The source identifier.
   * 
   * @example
   * console
   */
  source?: string;
  /**
   * @remarks
   * The total balance after the change (permanent + monthly).
   * 
   * @example
   * 1600.00
   */
  totalAfter?: number;
  /**
   * @remarks
   * The total balance before the change (permanent + monthly).
   * 
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

