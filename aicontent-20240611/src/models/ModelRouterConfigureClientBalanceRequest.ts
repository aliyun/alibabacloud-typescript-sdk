// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterConfigureClientBalanceRequest extends $dara.Model {
  /**
   * @example
   * amount
   */
  balanceType?: string;
  /**
   * @example
   * true
   */
  enableBalance?: boolean;
  /**
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

