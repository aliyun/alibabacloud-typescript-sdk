// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTaskResponseBodyStepsSubTasks extends $dara.Model {
  /**
   * @remarks
   * The creation time. The Z in the example indicates UTC.
   * 
   * @example
   * 2022-11-30T2:00:00.852Z
   */
  createTime?: string;
  /**
   * @remarks
   * The subtask failure message.
   * 
   * @example
   * Releasing [prod_main_mid_26e234cf] in region [cn-beijing] with weight [0]
   */
  message?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * i158805051661047928377
   */
  taskId?: string;
  /**
   * @remarks
   * The task execution state.
   * 
   * @example
   * running
   */
  taskState?: string;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * cut_node_sub_task
   */
  taskType?: string;
  /**
   * @remarks
   * The update time. Uses ISO 8601 format. The Z in the example indicates UTC.
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
   * The step failure message.
   * 
   * @example
   * get taskinfo failed
   */
  message?: string;
  /**
   * @remarks
   * The stage tag.
   * 
   * @example
   * node scale-in
   */
  stageTag?: string;
  /**
   * @remarks
   * The start time. Z in the example indicates UTC.
   * 
   * @example
   * 2022-11-30T2:00:00.852Z
   */
  startTime?: string;
  /**
   * @remarks
   * The step name.
   * 
   * @example
   * create_vpd
   */
  stepName?: string;
  /**
   * @remarks
   * The step execution state.
   * 
   * @example
   * execution_success
   */
  stepState?: string;
  /**
   * @remarks
   * The step type.
   * 
   * @example
   * normal
   */
  stepType?: string;
  /**
   * @remarks
   * The subtasks.
   */
  subTasks?: DescribeTaskResponseBodyStepsSubTasks[];
  /**
   * @remarks
   * The update time. Uses ISO 8601 format. The Z in the example indicates UTC.
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
   * The start time. The value is in ISO 8601 format. Z in the example indicates UTC.
   * 
   * @example
   * 2022-11-30T02:00:00.852Z
   */
  createTime?: string;
  /**
   * @remarks
   * The task failure message.
   * 
   * @example
   * Releasing [prod_main_mid_26e234cf] in region [cn-beijing] with weight [0]
   */
  message?: string;
  /**
   * @remarks
   * The list of node IDs.
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
   * The execution steps.
   */
  steps?: DescribeTaskResponseBodySteps[];
  /**
   * @remarks
   * The task state.
   * 
   * @example
   * running
   */
  taskState?: string;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * cut_cluster
   */
  taskType?: string;
  /**
   * @remarks
   * The update time. Uses ISO 8601 format. The Z in the example indicates UTC.
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

