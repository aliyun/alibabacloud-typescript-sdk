// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyDataInstances extends $dara.Model {
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
   * The time when the node stopped running.
   * 
   * @example
   * 1590416703313
   */
  beginWaitResTime?: number;
  /**
   * @remarks
   * The ID of the request. You can use the ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 1590416703313
   */
  beginWaitTimeTime?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10. Maximum value: 100.
   * 
   * You cannot specify the sorting method for the instances to be returned by this operation. By default, the instances are sorted in descending order of the time when the instances were created.
   * 
   * @example
   * 1590336000000
   */
  bizdate?: number;
  /**
   * @remarks
   * The ID of the workflow to which the node belongs.
   * 
   * @example
   * 123
   */
  businessId?: number;
  /**
   * @remarks
   * The number of times the node can be rerun. The value of this parameter can be empty or an integer that is greater than or equal to 0.
   * 
   * *   If the value of this parameter is empty, the number of times that the node can be rerun is not specified.
   * *   If the value of this parameter is 0, the node cannot be rerun.
   * *   If the value of this parameter is a positive integer such as n, the node can be rerun n times. For example, if the value of this parameter is 1, the node can be rerun once. If the value of this parameter is 2, the node can be rerun twice.
   * 
   * @example
   * odps_first
   */
  connection?: string;
  /**
   * @remarks
   * The interval at which the node is rerun after the node fails to run. Unit: milliseconds.
   * 
   * @example
   * 1590416703313
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the node. You can call the [ListNodes](https://help.aliyun.com/document_detail/173979.html) operation to query the ID of the node.
   * 
   * @example
   * Test
   */
  createUser?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * 1590422400000
   */
  cycTime?: number;
  /**
   * @remarks
   * The time when the instance started to wait for resources.
   * 
   * @example
   * 33845
   */
  dagId?: number;
  /**
   * @remarks
   * The data timestamp of the instance. In most cases, the value is one day before the time when the instance was run.
   * 
   * @example
   * DAILY
   */
  dagType?: string;
  /**
   * @remarks
   * The operation that you want to perform.
   * 
   * @example
   * [{"projectName":"ztjy_dim","tableName":"dim_user_agent_manage_area_a","partition":"ds\\u003d$[yyyy-mm-dd-1]"}]
   */
  dqcDescription?: string;
  /**
   * @remarks
   * The status of the node. Valid values:
   * 
   * *   NOT_RUN: The node is not run.
   * *   WAIT_TIME: The node is waiting for the scheduling time to arrive.
   * *   WAIT_RESOURCE: The node is waiting for resources.
   * *   RUNNING: The node is running.
   * *   CHECKING: Data quality is being checked for the node.
   * *   CHECKING_CONDITION: Branch conditions are being checked for the node.
   * *   FAILURE: The node fails to run.
   * *   SUCCESS: The node is successfully run.
   * 
   * @example
   * 1
   */
  dqcType?: number;
  /**
   * @remarks
   * The name of the account that is used to run the instance. For example, if an account named Test was used to run the instance to backfill data, the value of this parameter is Test.
   * 
   * @example
   * error message
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the workspace administrator. You can log on to the Alibaba Cloud Management Console and view the ID on the Security Settings page of the Account Center console.
   * 
   * @example
   * 1590416703313
   */
  finishTime?: number;
  /**
   * @remarks
   * The number of the page to return. Minimum value:1. Maximum value: 100.
   * 
   * @example
   * 1234
   */
  instanceId?: number;
  /**
   * @remarks
   * The name of the workflow. You can call the [ListBusiness](https://help.aliyun.com/document_detail/173945.html) operation to query the name of the workflow.
   * 
   * @example
   * 1590416703313
   */
  modifyTime?: number;
  /**
   * @remarks
   * The environment of the workspace. Valid values: PROD and DEV. The value PROD indicates the production environment. The value DEV indicates the development environment.
   * 
   * @example
   * 33115
   */
  nodeId?: number;
  /**
   * @remarks
   * The ID of the workflow.
   * 
   * @example
   * kzh
   */
  nodeName?: string;
  /**
   * @remarks
   * The table and partition filter expression in Data Quality that are associated with the node.
   * 
   * @example
   * bizdate=$bizdate tbods=$tbods
   */
  paramValues?: string;
  /**
   * @remarks
   * The total number of instances.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The type of the node. You can call the [ListNodes](https://help.aliyun.com/document_detail/173979.html) operation to query the type of the node.
   * 
   * @example
   * 123456
   */
  relatedFlowId?: number;
  /**
   * @remarks
   * The scheduling type of the node. Valid values:
   * 
   * *   NORMAL(0): The node is an auto triggered node. The scheduling system regularly runs the node.
   * 
   * *   MANUAL(1): The node is a manually triggered node. The scheduling system does not regularly run the node.
   * 
   * *   PAUSE(2): The node is a frozen node. The scheduling system regularly runs the node but sets the status of the node to failed when the scheduling system starts to run the node.
   * 
   * *   SKIP(3): The node is a dry-run node. The scheduling system regularly runs the node but sets the status of the node to succeeded when the scheduling system starts to run the node.
   * 
   * *   SKIP_UNCHOOSE(4): The node is an unselected node in a temporary workflow. This type of node exists only in temporary workflows. The scheduling system sets the status of the node to succeeded when the scheduling system starts to run the node.
   * 
   * *   SKIP_CYCLE(5): The node is a node that is scheduled by week or month and is waiting for the scheduling time to arrive. The scheduling system regularly runs the node but sets the status of the node to succeeded when the scheduling system starts to run the node.
   * 
   * *   CONDITION_UNCHOOSE(6): The node is not selected by its ancestor branch node and is run as a dry-run node.
   * 
   *     REALTIME_DEPRECATED(7): The node has instances that are generated in real time but deprecated. The scheduling system sets the status of the node to succeeded.
   * 
   * @example
   * 60000
   */
  repeatInterval?: number;
  /**
   * @remarks
   * The status of the node. Valid values:
   * 
   * *   NOT_RUN: The node is not run.
   * *   WAIT_TIME: The node is waiting for the scheduling time to arrive.
   * *   WAIT_RESOURCE: The node is waiting for resources.
   * *   RUNNING: The node is running.
   * *   CHECKING: Data quality is being checked for the node.
   * *   CHECKING_CONDITION: Branch conditions are being checked for the node.
   * *   FAILURE: The node fails to run.
   * *   SUCCESS: The node is successfully run.
   * 
   * @example
   * true
   */
  repeatability?: boolean;
  /**
   * @remarks
   * The data timestamp of the instances that you want to query. Specify the timestamp in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * NOT_RUN
   */
  status?: string;
  /**
   * @remarks
   * The ID of the workspace. You can call the [ListProjects](https://help.aliyun.com/document_detail/178393.html) operation to query the ID of the workspace.
   * 
   * @example
   * 0
   */
  taskRerunTime?: number;
  /**
   * @remarks
   * The information about the instances.
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
   * The name of the node. You can call the [ListNodes](https://help.aliyun.com/document_detail/173979.html) operation to query the name of the node.
   */
  instances?: ListInstancesResponseBodyDataInstances[];
  /**
   * @remarks
   * The time when the node was scheduled to run.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The priority of the instance. Valid values: 1, 3, 5, 7, and 8.
   * 
   * A greater value indicates a higher priority. Default value: 1.
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
   * The ID of the node. You can call the [ListNodes](https://help.aliyun.com/document_detail/173979.html) operation to query the ID of the node.
   */
  data?: ListInstancesResponseBodyData;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * Invalid.Tenant.ProjectNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * The project does not exist.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The error message that is returned for the instance.
   * 
   * This parameter is deprecated. You can call the [GetInstanceLog](https://help.aliyun.com/document_detail/173983.html) operation to query the error information related to the node.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * E6F0DBDD-5AD****
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the yyyy-MM-dd HH:mm:ss format.
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

