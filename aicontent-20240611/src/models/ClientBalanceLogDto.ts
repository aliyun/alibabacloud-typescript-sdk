// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClientBalanceLogDTO extends $dara.Model {
  /**
   * @remarks
   * The new balance.
   * 
   * @example
   * 100.00
   */
  balanceAfter?: number;
  /**
   * @remarks
   * The previous balance.
   * 
   * @example
   * 90.00
   */
  balanceBefore?: number;
  /**
   * @remarks
   * The change amount. A positive value represents a recharge, and a negative value represents a deduction.
   * 
   * @example
   * 10.00
   */
  changeAmount?: number;
  /**
   * @remarks
   * The type of change. Possible values are `auto_deduct`, `deduct`, or `recharge`.
   * 
   * @example
   * recharge
   */
  changeType?: string;
  /**
   * @remarks
   * The client ID.
   * 
   * @example
   * 1
   */
  clientId?: number;
  /**
   * @remarks
   * The creation time in ISO 8601 UTC format.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The unique record ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * Notes about the balance change.
   * 
   * @example
   * 充值
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      balanceAfter: 'balanceAfter',
      balanceBefore: 'balanceBefore',
      changeAmount: 'changeAmount',
      changeType: 'changeType',
      clientId: 'clientId',
      gmtCreate: 'gmtCreate',
      id: 'id',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      balanceAfter: 'number',
      balanceBefore: 'number',
      changeAmount: 'number',
      changeType: 'string',
      clientId: 'number',
      gmtCreate: 'string',
      id: 'number',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

