// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * Cluster ID.
   * 
   * @example
   * c82e6987e2961451182edacd74faf****
   */
  clusterId?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 0527ac9a-c899-4341-a21a-****
   */
  requestId?: string;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * T-5faa48fb31b6b8078d00****
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

