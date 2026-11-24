// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CD3FA5F3-FAF3-44CA-AFFF-BAF869******
   */
  requestId?: string;
  /**
   * @remarks
   * The asynchronous task ID. For Ray restart, the parent task ID of restart_ray_cluster is returned. For DisableHeadScheduling and EnableHeadScheduling, the modify_ray_head_scheduling task ID is returned. A success response only indicates that the request is accepted. Historical applications or MCP paths may not return a task ID, and the default output is 0, which does not represent a valid task.
   * 
   * @example
   * 123456
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

