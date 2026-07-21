// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClientBalanceDTO extends $dara.Model {
  /**
   * @remarks
   * The current balance.
   * 
   * @example
   * 100.00
   */
  balance?: number;
  /**
   * @remarks
   * The balance type. Valid values are `amount` or `tokens`.
   * 
   * @example
   * amount
   */
  balanceType?: string;
  /**
   * @remarks
   * The ID of the client.
   * 
   * @example
   * 1
   */
  clientId?: number;
  /**
   * @remarks
   * Indicates whether balance-based rate limiting is enabled.
   * 
   * @example
   * true
   */
  enableBalance?: boolean;
  /**
   * @remarks
   * The creation timestamp.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last modification timestamp.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The unique ID of the balance record.
   * 
   * @example
   * 1
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      balance: 'balance',
      balanceType: 'balanceType',
      clientId: 'clientId',
      enableBalance: 'enableBalance',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      balance: 'number',
      balanceType: 'string',
      clientId: 'number',
      enableBalance: 'boolean',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

