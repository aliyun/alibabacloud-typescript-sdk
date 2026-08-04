// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterStopMemberSubscriptionRequest extends $dara.Model {
  /**
   * @example
   * monthly
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

