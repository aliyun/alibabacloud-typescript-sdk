// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyDataInstances extends $dara.Model {
  /**
   * @remarks
   * The baseline ID.
   * 
   * @example
   * 123123
   */
  baselineId?: number;
  /**
   * @remarks
   * The time when the instance started running.
   * 
   * The value is a 13-digit number, such as `1590416703313`.
   * 
   * @example
   * 1590416703313
   */
  beginRunningTime?: number;
  /**
   * @remarks
   * The time when the instance started waiting for resources.
   * 
   * The value is a 13-digit number, such as `1590416703313`.
   * 
   * @example
   * 1590416703313
   */
  beginWaitResTime?: number;
  /**
   * @remarks
   * The time when the instance started waiting for scheduling.
   * 
   * The value is a 13-digit number, such as `1590416703313`.
   * 
   * @example
   * 1590416703313
   */
  beginWaitTimeTime?: number;
  /**
   * @remarks
   * The data timestamp of the scheduled node. This is typically the day before the node runs.
   * 
   * The value is a 13-digit number, such as `1590336000000`.
   * 
   * @example
   * 1590336000000
   */
  bizdate?: number;
  /**
   * @remarks
   * The business process ID.
   * 
   * @example
   * 123
   */
  businessId?: number;
  /**
   * @remarks
   * The connection string.
   * 
   * @example
   * odps_source
   */
  connection?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * The value is a 13-digit number, such as `1590416703313`.
   * 
   * @example
   * 1590416703313
   */
  createTime?: number;
  /**
   * @remarks
   * The user who triggered the instance to run. For example, if user Test triggered a data backfill instance, the CreateUser is Test.
   * 
   * @example
   * Test
   */
  createUser?: string;
  /**
   * @remarks
   * The scheduled runtime of the node.
   * 
   * The value is a 13-digit number, such as `1590422400000`.
   * 
   * @example
   * 1590422400000
   */
  cycTime?: number;
  /**
   * @remarks
   * The workflow ID.
   * 
   * @example
   * 33845
   */
  dagId?: number;
  /**
   * @remarks
   * The type of the workflow. Valid values:
   * 
   * - DAILY(0): daily scheduling workflow.
   * - MANUAL(1): manual task workflow.
   * - SMOKE_TEST(2): smoke testing workflow.
   * - SUPPLY_DATA(3): data backfill workflow.
   * - MANUAL_FLOW(4): manually triggered dataflow PAI workflow (such as running a workflow in the IDE).
   * - BUSINESS_PROCESS_DAG(5): manual business process workflow.
   * 
   * @example
   * DAILY
   */
  dagType?: string;
  /**
   * @remarks
   * The DQC partitioning rule string.
   * 
   * @example
   * [{"projectName":"ztjy_dim","tableName":"dim_user_agent_manage_area_a","partition":"ds\\u003d$[yyyy-mm-dd-1]"}]
   */
  dqcDescription?: string;
  /**
   * @remarks
   * The DQC type. Valid values:
   * - 0: associated with DQC.
   * - 1: not associated with DQC.
   * 
   * @example
   * 1
   */
  dqcType?: number;
  /**
   * @remarks
   * **[Deprecated]** The error message of the instance run. You can call [GetInstanceLog](https://help.aliyun.com/document_detail/173983.html) to obtain the error information of the executed task.
   * 
   * @example
   * error message
   */
  errorMessage?: string;
  /**
   * @remarks
   * The time when the scheduled node finished running.
   * 
   * The value is a 13-digit number, such as `1590416703313`.
   * 
   * @example
   * 1590416703313
   */
  finishTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 1234
   */
  instanceId?: number;
  /**
   * @remarks
   * The time when the scheduled node was last modified.
   * 
   * The value is a 13-digit number, such as `1590416703313`.
   * 
   * @example
   * 1590416703313
   */
  modifyTime?: number;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * 33115
   */
  nodeId?: number;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * kzh
   */
  nodeName?: string;
  /**
   * @remarks
   * The parameter information.
   * 
   * @example
   * bizdate=$bizdate tbods=$tbods
   */
  paramValues?: string;
  /**
   * @remarks
   * The priority of the instance. Valid values: 1, 3, 5, 7, and 8.
   * 
   * A larger value indicates a higher priority. Default value: 1.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the associated business process.
   * 
   * @example
   * 123456
   */
  relatedFlowId?: number;
  /**
   * @remarks
   * The interval at which the node is rescheduled after a failure. Unit: milliseconds.
   * 
   * @example
   * 60000
   */
  repeatInterval?: number;
  /**
   * @remarks
   * Indicates whether the instance task can be rerun.
   * 
   * @example
   * true
   */
  repeatability?: boolean;
  /**
   * @remarks
   * The status of the node. Valid values:
   * 
   * - NOT_RUN(1): The node is not run.
   * - WAIT_TIME(2): The node is waiting for the scheduled time to arrive.
   * - WAIT_RESOURCE(3): The node has been sent to the execution engine and is waiting for resources to be scheduled.
   * - RUNNING(4): The node is running.
   * - CHECKING(7): The node has finished running and has been sent to Data Quality for data verification.
   * - CHECKING_CONDITION(8): The node has finished running and is undergoing branch condition verification.
   * - WAIT_TRIGGER(9): The node is waiting to be triggered. A trigger-based node enters this state after the waiting time elapses.
   * - FAILURE(5): The node failed to run.
   * - SUCCESS(6): The node ran successfully.
   * 
   * @example
   * NOT_RUN
   */
  status?: string;
  /**
   * @remarks
   * The number of remaining reruns for the instance. The value can be empty or an integer greater than or equal to 0.
   * - Empty: The node corresponding to this instance does not have automatic rerun configured.
   * - 0: The instance cannot be rerun.
   * - An integer greater than 0 (n): The instance can be rerun n times. For example, if the value is 1, the remaining rerun count is 1. If the value is 2, the remaining rerun count is 2, and so on. The initial value is the automatic rerun count defined for the corresponding node plus 1.
   * 
   * @example
   * 0
   */
  taskRerunTime?: number;
  /**
   * @remarks
   * The scheduling type of the task instance. Valid values:
   * - NORMAL(0): The node is a normal scheduled node that is triggered by daily scheduling.
   * - MANUAL(1): The node is a manual node that is not triggered by daily scheduling.
   * - PAUSE(2): The node is a frozen node that is triggered by daily scheduling but is set to failed when scheduling starts.
   * - SKIP(3): The node is a dry-run node that is triggered by daily scheduling but is set to successful when scheduling starts.
   * - SKIP_UNCHOOSE(4): The node is an unselected node in a temporary workflow. It exists only in temporary workflows and is set to successful when scheduling starts.
   * - SKIP_CYCLE(5): The node is a weekly or monthly node whose scheduling cycle has not arrived. It is triggered by daily scheduling but is set to successful when scheduling starts.
   * - CONDITION_UNCHOOSE(6): The upstream instance contains a branch (IF) node, but this downstream node is not selected by the branch node and is set to a dry-run node.
   * - REALTIME_DEPRECATED(7): The node is an expired periodic instance generated in real time. This type of node is set to successful.
   * 
   * @example
   * NORMAL(0)
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      beginRunningTime: 'BeginRunningTime',
      beginWaitResTime: 'BeginWaitResTime',
      beginWaitTimeTime: 'BeginWaitTimeTime',
      bizdate: 'Bizdate',
      businessId: 'BusinessId',
      connection: 'Connection',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      cycTime: 'CycTime',
      dagId: 'DagId',
      dagType: 'DagType',
      dqcDescription: 'DqcDescription',
      dqcType: 'DqcType',
      errorMessage: 'ErrorMessage',
      finishTime: 'FinishTime',
      instanceId: 'InstanceId',
      modifyTime: 'ModifyTime',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      paramValues: 'ParamValues',
      priority: 'Priority',
      relatedFlowId: 'RelatedFlowId',
      repeatInterval: 'RepeatInterval',
      repeatability: 'Repeatability',
      status: 'Status',
      taskRerunTime: 'TaskRerunTime',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      beginRunningTime: 'number',
      beginWaitResTime: 'number',
      beginWaitTimeTime: 'number',
      bizdate: 'number',
      businessId: 'number',
      connection: 'string',
      createTime: 'number',
      createUser: 'string',
      cycTime: 'number',
      dagId: 'number',
      dagType: 'string',
      dqcDescription: 'string',
      dqcType: 'number',
      errorMessage: 'string',
      finishTime: 'number',
      instanceId: 'number',
      modifyTime: 'number',
      nodeId: 'number',
      nodeName: 'string',
      paramValues: 'string',
      priority: 'number',
      relatedFlowId: 'number',
      repeatInterval: 'number',
      repeatability: 'boolean',
      status: 'string',
      taskRerunTime: 'number',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The instance information.
   */
  instances?: ListInstancesResponseBodyDataInstances[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of instances.
   * 
   * @example
   * 66
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListInstancesResponseBodyDataInstances },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of instances.
   */
  data?: ListInstancesResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Invalid.Tenant.ProjectNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The project does not exist.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID. You can use this ID to locate logs and troubleshoot issues.
   * 
   * @example
   * E6F0DBDD-5AD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * - true: The request was successful.
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListInstancesResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

