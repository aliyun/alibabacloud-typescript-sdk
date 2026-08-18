// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNodePoolComponentInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * c846d7d529e34413c9ab1****
   */
  clusterId?: string;
  /**
   * @example
   * EB022AB1-4CF7-5BB6-B44A-38****
   */
  requestId?: string;
  /**
   * @example
   * T-696de321273bb00****
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

