// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTaskResponseBodySteps } from "./DescribeTaskResponseBodySteps";


export class DescribeTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * i119982311660892626523
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * Standard_Cluster
   */
  clusterName?: string;
  /**
   * @remarks
   * The create time.
   * 
   * @example
   * 2022-11-30T02:00:00.852Z
   */
  createTime?: string;
  /**
   * @remarks
   * The error message returned for failed tasks.
   * 
   * @example
   * Releasing [prod_main_mid_26e234cf] in region [cn-beijing] with weight [0]
   */
  message?: string;
  /**
   * @remarks
   * The IDs of the nodes.
   */
  nodeIds?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A7FD7411-9395-52E8-AF42-EB3A4A55446D
   */
  requestId?: string;
  /**
   * @remarks
   * The steps.
   */
  steps?: DescribeTaskResponseBodySteps[];
  /**
   * @remarks
   * The task status.
   * 
   * Valid values:
   * 
   * *   running
   * *   execution_success
   * *   execution_fail
   * *   waiting_to_run
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
   * cut_cluster
   */
  taskType?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2022-11-30T03:40:14.852Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      createTime: 'CreateTime',
      message: 'Message',
      nodeIds: 'NodeIds',
      requestId: 'RequestId',
      steps: 'Steps',
      taskState: 'TaskState',
      taskType: 'TaskType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      createTime: 'string',
      message: 'string',
      nodeIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      steps: { 'type': 'array', 'itemType': DescribeTaskResponseBodySteps },
      taskState: 'string',
      taskType: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodeIds)) {
      $dara.Model.validateArray(this.nodeIds);
    }
    if(Array.isArray(this.steps)) {
      $dara.Model.validateArray(this.steps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

