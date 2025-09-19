// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySoarStrategySubscribeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the policy.
   * 
   * >  You can call the [DescribeSoarStrategies](~~DescribeSoarStrategies~~) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 8000
   */
  strategyId?: number;
  /**
   * @remarks
   * Specifies whether to create the policy template. Valid values:
   * 
   * *   true: creates the policy template
   * *   false: deletes the policy template
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

