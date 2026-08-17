// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshNodeGroupNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The task ID. Query the task progress by calling DescribeNodeGroupRefreshTask. If no nodes have configuration drift, no task is created and this field returns an empty string.
   * 
   * @example
   * task-159136551662516768776
   */
  nodeGroupRefreshTaskId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4FD06DF0-9167-5C6F-A145-F30CA4A15D54
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeGroupRefreshTaskId: 'NodeGroupRefreshTaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeGroupRefreshTaskId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

