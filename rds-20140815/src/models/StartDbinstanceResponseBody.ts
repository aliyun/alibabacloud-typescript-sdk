// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartDBInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The migration task ID. This parameter is available only for instances that are created in dedicated clusters.
   * 
   * @example
   * 740
   */
  migrationId?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A417FB41-A3D9-464E-AD0A-C7FE05C72E98
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the task.
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

