// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSoarStrategyTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the policy task that is in the waiting state.
   * 
   * >  You can call the [DescribeSoarStrategyTasks](~~DescribeSoarStrategyTasks~~) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 11082
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

