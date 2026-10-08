// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyImportTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 069EB9B1-DE12-54B9-8C20-822****
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the data import task.
   * 
   * @example
   * IMPORTING
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 41698****
   */
  taskId?: number;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * task_1234
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
      taskId: 'number',
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

