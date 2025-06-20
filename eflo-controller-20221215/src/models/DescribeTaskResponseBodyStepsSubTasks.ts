// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTaskResponseBodyStepsSubTasks extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-11-30T2:00:00.852Z
   */
  createTime?: string;
  /**
   * @remarks
   * The error message returned for failed sub tasks.
   * 
   * @example
   * Releasing [prod_main_mid_26e234cf] in region [cn-beijing] with weight [0]
   */
  message?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * i158805051661047928377
   */
  taskId?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * running
   */
  taskState?: string;
  /**
   * @remarks
   * The task type.
   * 
   * Valid values:
   * 
   * *   reclone_node_sub_task
   * *   initialize_bare_cluster
   * *   extend_bare_cluster
   * *   reclone_node
   * *   reboot_node
   * *   extend_ack_edge_cluster
   * *   extend_cluster
   * *   initialize_ack_edge_cluster
   * *   cut_node_sub_task
   * *   reboot_node_sub_task
   * *   reclone_ack_edge_node
   * *   initialize_cluster
   * *   cut_cluster
   * *   reclone_bare_node
   * *   cut_bare_cluster
   * 
   * @example
   * cut_node_sub_task
   */
  taskType?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2022-11-30T02:20:14.852Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      message: 'Message',
      taskId: 'TaskId',
      taskState: 'TaskState',
      taskType: 'TaskType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      message: 'string',
      taskId: 'string',
      taskState: 'string',
      taskType: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

