// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClientBalanceDTO extends $dara.Model {
  /**
   * @example
   * 100.00
   */
  balance?: number;
  /**
   * @example
   * amount
   */
  balanceType?: string;
  /**
   * @example
   * 1
   */
  clientId?: number;
  /**
   * @example
   * true
   */
  enableBalance?: boolean;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtModified?: string;
  /**
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

