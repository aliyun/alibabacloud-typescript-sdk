// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterConfigureClientBalanceRequest extends $dara.Model {
  /**
   * @remarks
   * The balance type. Valid values: amount (balance amount) and tokens (number of tokens). This parameter is required when you enable balance throttling for the first time and cannot be modified once it is set.
   * 
   * @example
   * amount
   */
  balanceType?: string;
  /**
   * @remarks
   * Specifies whether to enable balance throttling. Once enabled, balance throttling cannot be disabled.
   * 
   * @example
   * true
   */
  enableBalance?: boolean;
  /**
   * @remarks
   * The initial balance. This parameter takes effect only when you enable balance throttling for the first time.
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

