// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceResponseBodyData extends $dara.Model {
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
   * The time when the instance started to run.
   * 
   * @example
   * 1590416703313
   */
  beginRunningTime?: number;
  /**
   * @remarks
   * The time when the instance started to wait for resources.
   * 
   * @example
   * 1590416703313
   */
  beginWaitResTime?: number;
  /**
   * @remarks
   * The time when the instance started to wait to be scheduled.
   * 
   * @example
   * 1590416703313
   */
  beginWaitTimeTime?: number;
  /**
   * @remarks
   * The data timestamp of the instance. In most cases, the value is one day before the time when the instance was run.
   * 
   * @example
   * 1590336000000
   */
  bizdate?: number;
  /**
   * @remarks
   * The workflow ID.
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
   * odps_first
   */
  connection?: string;
  /**
   * @remarks
   * The time when the instance was generated.
   * 
   * @example
   * 1590416703313
   */
  createTime?: number;
  /**
   * @remarks
   * The creator of the instance.
   * 
   * @example
   * 111
   */
  createUser?: string;
  /**
   * @remarks
   * The scheduling time of the instance.
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
   * 338450167
   */
  dagId?: number;
  /**
   * @remarks
   * The type of the workflow. Valid values:
   * 
   * *   DAILY: The workflow is used to run auto triggered nodes.
   * *   MANUAL: The workflow is used to run manually triggered nodes.
   * *   SMOKE_TEST: The workflow is used to perform smoke testing.
   * *   SUPPLY_DATA: The workflow is used to backfill data.
   * 
   * @example
   * DAILY
   */
  dagType?: string;
  /**
   * @remarks
   * The table and partition filter expression in Data Quality that are associated with the node.
   * 
   * @example
   * [{"projectName":"ztjy_dim","tableName":"dim_user_agent_manage_area_a","partition":"ds\\u003d$[yyyy-mm-dd-1]"}]
   */
  dqcDescription?: string;
  /**
   * @remarks
   * Indicates whether the instance is associated with a monitoring rule in Data Quality. Valid values:
   * 
   * *   0: The instance is associated with a monitoring rule in Data Quality.
   * *   1: The instance is not associated with a monitoring rule in Data Quality.
   * 
   * @example
   * 1
   */
  dqcType?: number;
  /**
   * @remarks
   * The time when the running of the instance was complete.
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
   * 11713307578
   */
  instanceId?: number;
  /**
   * @remarks
   * The time when the instance was last modified.
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
   * The name of the node.
   * 
   * @example
   * kzh
   */
  nodeName?: string;
  /**
   * @remarks
   * The owner of the instance.
   * 
   * @example
   * 111
   */
  owner?: string;
  /**
   * @remarks
   * The parameters related to the node.
   * 
   * @example
   * bizdate=$bizdate tbods=$tbods tbdw=$tbdw tbpmic=$tbpmic tbpidx=$tbpidx tbptcif=$tbptcif
   */
  paramValues?: string;
  /**
   * @remarks
   * The sequence number of the cycle. This parameter indicates the sequence number of the cycle of the instance on the current day.
   * 
   * @example
   * 1
   */
  periodNumber?: number;
  /**
   * @remarks
   * The priority of the instance. Valid values: 1, 3, 5, 7, and 8. A greater value indicates a higher priority. Default value: 1.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the workflow to which the node belongs.
   * 
   * @example
   * 123123
   */
  relatedFlowId?: number;
  /**
   * @remarks
   * The interval at which the node is rerun after the node fails to run. Unit: milliseconds.
   * 
   * @example
   * 60000
   */
  repeatInterval?: number;
  /**
   * @remarks
   * Indicates whether the node that generates the instance can be rerun.
   * 
   * @example
   * true
   */
  repeatability?: boolean;
  /**
   * @remarks
   * The status of the node that generates the instance. Valid values:
   * 
   * *   NOT_RUN: The node is not run.
   * *   WAIT_TIME: The node is waiting for its scheduling time to arrive.
   * *   WAIT_RESOURCE: The node is waiting for resources.
   * *   RUNNING: The node is running.
   * *   CHECKING: Data quality is being checked for the node.
   * *   CHECKING_CONDITION: Branch conditions are being checked for the node.
   * *   FAILURE: The node fails to run.
   * *   SUCCESS: The node is successfully run.
   * 
   * @example
   * NOT_RUN
   */
  status?: string;
  /**
   * @remarks
   * The number of times the node can be rerun. The value of this parameter can be empty or an integer that is greater than or equal to 0.
   * 
   * *   If the value of this parameter is empty, the number of times that the node can be rerun is not specified.
   * *   If the value of this parameter is 0, the node cannot be rerun.
   * *   If the value of this parameter is a positive integer such as n, the node can still be rerun n times. For example, if the value of this parameter is 1, the node can still be rerun once. If the value of this parameter is 2, the node can still be rerun twice.
   * 
   * @example
   * 0
   */
  taskRerunTime?: number;
  /**
   * @remarks
   * The scheduling type of the node that generates the instance. Valid values:
   * 
   * *   NORMAL(0): The node is an auto triggered node. The scheduling system regularly runs the node.
   * *   MANUAL(1): The node is a manually triggered node. The scheduling system does not regularly run the node.
   * *   PAUSE(2): The node is a frozen node. The scheduling system regularly runs the node but sets the status of the node to failed when the scheduling system starts to run the node.
   * *   SKIP(3): The node is a dry-run node. The scheduling system regularly runs the node but sets the status of the node to successful when the scheduling system starts to run the node.
   * *   SKIP_UNCHOOSE(4): The node is an unselected node in a temporary workflow. This type of node exists only in temporary workflows. The scheduling system sets the status of the node to successful when the scheduling system starts to run the node.
   * *   SKIP_CYCLE(5): The node is a node that is scheduled by the week or month and is waiting for the scheduling time to arrive. The scheduling system regularly runs the node but sets the status of the node to successful when the scheduling system starts to run the node.
   * *   CONDITION_UNCHOOSE(6): The node is not selected by its ancestor branch node and is run as a dry-run node.
   * *   REALTIME_DEPRECATED(7): The node has instances that are generated in real time but deprecated. The scheduling system sets the status of the node to successful.
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
      finishTime: 'FinishTime',
      instanceId: 'InstanceId',
      modifyTime: 'ModifyTime',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      owner: 'Owner',
      paramValues: 'ParamValues',
      periodNumber: 'PeriodNumber',
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
      finishTime: 'number',
      instanceId: 'number',
      modifyTime: 'number',
      nodeId: 'number',
      nodeName: 'string',
      owner: 'string',
      paramValues: 'string',
      periodNumber: 'number',
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

export class GetInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the instance.
   */
  data?: GetInstanceResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 0
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the instance fails to be scheduled.
   * 
   * @example
   * test
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
   * The request ID.
   * 
   * @example
   * E6F0DBDD-5AD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      data: GetInstanceResponseBodyData,
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

