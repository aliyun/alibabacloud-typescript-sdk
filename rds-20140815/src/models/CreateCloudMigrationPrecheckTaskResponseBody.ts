// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudMigrationPrecheckTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * pgm-bp102g323jd4****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 60F9A12A-16B8-4728-B099-4CA38D32C31C
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 439946016
   */
  taskId?: number;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * slf7w7wj3g
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      requestId: 'RequestId',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      requestId: 'string',
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

