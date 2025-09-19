// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProcessSoarStrategyTaskRequest extends $dara.Model {
  /**
   * @remarks
   * ID of the strategy task.
   * > You can obtain this parameter by calling the [DescribeSoarStrategyTasks](~~DescribeSoarStrategyTasks~~) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  strategyTaskId?: number;
  /**
   * @remarks
   * Task action status. Values:
   * - SCHEDULE: Schedule
   * - PAUSE: Pause
   * 
   * This parameter is required.
   * 
   * @example
   * SCHEDULE
   */
  taskAction?: string;
  static names(): { [key: string]: string } {
    return {
      strategyTaskId: 'StrategyTaskId',
      taskAction: 'TaskAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      strategyTaskId: 'number',
      taskAction: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

