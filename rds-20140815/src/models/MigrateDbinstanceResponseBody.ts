// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateDBInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The serial number of the task in the migration task queue. When the serial number becomes 0, the system starts the migration.
   * 
   * @example
   * 224****
   */
  migrationId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 498AE8CA-8C81-4A01-AF37-2B902014ED30
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 10824****
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

