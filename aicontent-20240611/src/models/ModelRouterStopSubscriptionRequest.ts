// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterStopSubscriptionRequest extends $dara.Model {
  /**
   * @example
   * permanent
   */
  balanceType?: string;
  static names(): { [key: string]: string } {
    return {
      balanceType: 'balanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      balanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

