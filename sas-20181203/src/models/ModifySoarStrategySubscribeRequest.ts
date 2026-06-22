// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySoarStrategySubscribeRequest extends $dara.Model {
  /**
   * @remarks
   * The policy ID.
   * >Call the [DescribeSoarStrategies](~~DescribeSoarStrategies~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 8000
   */
  strategyId?: number;
  /**
   * @remarks
   * The add or remove status. Valid values:
   * - true: adds the policy template to My Policies
   * - false: removes the policy template from My Policies.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  subscribeStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      strategyId: 'StrategyId',
      subscribeStatus: 'SubscribeStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      strategyId: 'number',
      subscribeStatus: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

