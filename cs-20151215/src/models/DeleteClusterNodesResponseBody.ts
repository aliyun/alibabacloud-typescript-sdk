// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteClusterNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Cluster ID.
   * 
   * @example
   * c104d5d5f301c4e2a8ee578c37******
   */
  clusterId?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A9891419-D125-4D89-AFCA-688466******
   */
  requestId?: string;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * T-60fea8ad2e27000ae9******
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

