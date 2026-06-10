// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c21e0591548ba4c10bdb535d657******
   */
  clusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 687C5BAA-D103-4993-884B-C35E43******
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * T-62ccd14aacb8db06ca******
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      requestId: 'request_id',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

