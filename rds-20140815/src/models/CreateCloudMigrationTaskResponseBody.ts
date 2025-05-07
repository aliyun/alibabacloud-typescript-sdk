// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudMigrationTaskResponseBody extends $dara.Model {
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
   * 8B993DA9-5272-5414-94E3-4CA8BA0146C2
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 440437220
   */
  taskId?: number;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * 362c6c7a-4d20-4eac-898c-1495ceab374c
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

