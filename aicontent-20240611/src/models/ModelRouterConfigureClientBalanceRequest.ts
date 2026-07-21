// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterConfigureClientBalanceRequest extends $dara.Model {
  /**
   * @remarks
   * The balance type. Valid values: `amount` or `tokens`. This parameter is required when you first enable balance throttling and cannot be changed afterward.
   * 
   * @example
   * amount
   */
  balanceType?: string;
  /**
   * @remarks
   * Specifies whether to enable balance throttling. Once enabled, this feature cannot be disabled.
   * 
   * @example
   * true
   */
  enableBalance?: boolean;
  /**
   * @remarks
   * The initial balance. This parameter is only applicable when you first enable balance throttling.
   * 
   * @example
   * 100.00
   */
  initialBalance?: number;
  static names(): { [key: string]: string } {
    return {
      balanceType: 'balanceType',
      enableBalance: 'enableBalance',
      initialBalance: 'initialBalance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      balanceType: 'string',
      enableBalance: 'boolean',
      initialBalance: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

