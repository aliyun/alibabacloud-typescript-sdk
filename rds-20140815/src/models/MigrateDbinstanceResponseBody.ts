// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateDBInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The migration queue number. When the number is 0, the migration switchover is performed.
   * 
   * @example
   * 2245016
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
   * 108246861
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

