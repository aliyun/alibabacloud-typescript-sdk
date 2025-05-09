// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExecutionsResponseBodyExecutionsCurrentTasks extends $dara.Model {
  /**
   * @remarks
   * The execution template of the task.
   * 
   * @example
   * acs::Template
   */
  taskAction?: string;
  /**
   * @remarks
   * The ID of the task execution.
   * 
   * @example
   * task-exec-44d32b45d2a49899#1
   */
  taskExecutionId?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * installSLSILogtail
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

