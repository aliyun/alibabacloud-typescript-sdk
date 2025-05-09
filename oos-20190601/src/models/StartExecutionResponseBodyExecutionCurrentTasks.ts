// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartExecutionResponseBodyExecutionCurrentTasks extends $dara.Model {
  /**
   * @remarks
   * The action of the task.
   * 
   * @example
   * ACS::TimerTrigger
   */
  taskAction?: string;
  /**
   * @remarks
   * The execution ID of the task.
   * 
   * @example
   * exec-dsadasdawq
   */
  taskExecutionId?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * testTask
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      taskAction: 'TaskAction',
      taskExecutionId: 'TaskExecutionId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskAction: 'string',
      taskExecutionId: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

