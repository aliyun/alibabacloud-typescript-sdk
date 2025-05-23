// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnInstallClusterAddonsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c5b5e80b0b64a4bf6939d2d8fbbc5****
   */
  clusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 74D1512F-67DA-54E8-99EA-4D50EB4898F4
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * T-66e39b39c0fdd001320005c0
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

