// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebuildDBInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The serial number of the task in the rebuild task queue. When the serial number becomes 0, the system starts to rebuild the secondary instance.
   * 
   * @example
   * 329****
   */
  migrationId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 355DA57C-8CC4-40AB-B3F8-B684BA32EB9E
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 20867****
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      migrationId: 'MigrationId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      migrationId: 'number',
      requestId: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

