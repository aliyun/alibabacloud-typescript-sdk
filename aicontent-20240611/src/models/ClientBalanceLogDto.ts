// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClientBalanceLogDTO extends $dara.Model {
  /**
   * @example
   * 100.00
   */
  balanceAfter?: number;
  /**
   * @example
   * 90.00
   */
  balanceBefore?: number;
  /**
   * @example
   * 10.00
   */
  changeAmount?: number;
  /**
   * @example
   * recharge
   */
  changeType?: string;
  /**
   * @example
   * 1
   */
  clientId?: number;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 1
   */
  id?: number;
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

