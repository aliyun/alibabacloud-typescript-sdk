// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProcessSoarStrategyTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the policy task.
   * >Call the [DescribeSoarStrategyTasks](~~DescribeSoarStrategyTasks~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  strategyTaskId?: number;
  /**
   * @remarks
   * The action status of the task. Valid values:
   * - SCHEDULE: scheduling
   * - PAUSE: pause.
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

