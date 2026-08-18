// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNodePoolComponentInstancesResponseBody extends $dara.Model {
  /**
   * @example
   * c2230fxxxxx
   */
  clusterId?: string;
  /**
   * @example
   * xxxx
   */
  requestId?: string;
  /**
   * @example
   * T-xxxx
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

