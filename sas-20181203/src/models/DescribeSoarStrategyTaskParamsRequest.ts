// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSoarStrategyTaskParamsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the policy task.
   * >Call the [DescribeSoarStrategyTasks](~~DescribeSoarStrategyTasks~~) operation to obtain this parameter.
   * 
   * @example
   * 100
   */
  strategyTaskId?: number;
  static names(): { [key: string]: string } {
    return {
      strategyTaskId: 'StrategyTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      strategyTaskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

