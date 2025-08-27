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

export class DescribeTaskResponseBodySteps extends $dara.Model {
  /**
   * @remarks
   * The error message of the step.
   * 
   * @example
   * get taskinfo failed
   */
  message?: string;
  /**
   * @remarks
   * The stage marker.
   * 
   * Valid values:
   * 
   * *   机器释放: Machine release.
   * *   节点并发初始化: Node concurrent initialization.
   * *   节点释放: Node release.
   * *   机器替换: Machine replacement.
   * *   节点缩容: Node scale-in.
   * *   提前续费: Early renewal.
   * *   物理机清理: Physical machine cleanup.
   * *   节点清理: Node cleanup.
   * *   创建K8s集群: Create Kubernetes cluster.
   * *   网络初始化: Network initialization.
   * *   节点重启: Node restart.
   * *   节点退订: Node unsubscribe.
   * *   集群扩容: Cluster scale-out.
   * *   异常机器释放: Abnormal machine release.
   * 
   * @example
   * 节点缩容
   */
  stageTag?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2022-11-30T2:00:00.852Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the step.
   * 
   * @example
   * create_vpd
   */
  stepName?: string;
  /**
   * @remarks
   * The step status.
   * 
   * Valid values:
   * 
   * *   execution_success
   * *   execution_failed
   * 
   * @example
   * execution_success
   */
  stepState?: string;
  /**
   * @remarks
   * The type of the step.
   * 
   * Valid values:
   * 
   * *   normal: A normal step has only one successor step.
   * *   dispersive: A dispersive step has multiple successor steps.
   * 
   * @example
   * normal
   */
  stepType?: string;
  /**
   * @remarks
   * The sub tasks.
   */
  subTasks?: DescribeTaskResponseBodyStepsSubTasks[];
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
      message: 'Message',
      stageTag: 'StageTag',
      startTime: 'StartTime',
      stepName: 'StepName',
      stepState: 'StepState',
      stepType: 'StepType',
      subTasks: 'SubTasks',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      stageTag: 'string',
      startTime: 'string',
      stepName: 'string',
      stepState: 'string',
      stepType: 'string',
      subTasks: { 'type': 'array', 'itemType': DescribeTaskResponseBodyStepsSubTasks },
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.subTasks)) {
      $dara.Model.validateArray(this.subTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

