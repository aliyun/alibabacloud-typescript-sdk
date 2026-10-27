// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySoarStrategySubscribeRequest extends $dara.Model {
  /**
   * @remarks
   * The strategy ID.
   * You can call the [DescribeSoarStrategies](~~DescribeSoarStrategies~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 8000
   */
  strategyId?: number;
  /**
   * @remarks
   * Specifies whether to add or remove the strategy template. Valid values:
   * - true: Adds the strategy template to My Strategies.
   * - false: Removes the strategy template from My Strategies.
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

