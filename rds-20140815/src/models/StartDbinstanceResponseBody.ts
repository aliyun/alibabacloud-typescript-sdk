// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartDBInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * This parameter is supported only for dedicated cluster instances. The migration task ID.
   * 
   * @example
   * 740
   */
  migrationId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A417FB41-A3D9-464E-AD0A-C7FE05C72E98
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 238028563
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

