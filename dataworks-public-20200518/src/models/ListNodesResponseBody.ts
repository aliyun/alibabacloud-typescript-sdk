// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodesResponseBodyDataNodes extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Minimum value: 1. Maximum value: 100.
   * 
   * @example
   * 123456
   */
  baselineId?: number;
  /**
   * @remarks
   * The operation that you want to perform. Set the value to **ListNodes**.
   * 
   * @example
   * 123
   */
  businessId?: number;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * odps_first
   */
  connection?: string;
  /**
   * @remarks
   * The timestamp when the node was created. Unit: milliseconds.
   * 
   * @example
   * 1593879116000
   */
  createTime?: number;
  /**
   * @remarks
   * The name of the workflow.
   * 
   * @example
   * 00 00 00 * * ?
   */
  cronExpress?: string;
  /**
   * @remarks
   * The timestamp when the node was deployed. Unit: milliseconds.
   * 
   * @example
   * 1734537600000
   */
  deployDate?: number;
  /**
   * @remarks
   * The priority for running the node. Valid values: 1, 3, 5, 7, and 8.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the owner.
   * 
   * @example
   * [{"projectName":"ztjy_dim","tableName":"dim_user_agent_manage_area_a","partition":"ds\\u003d$[yyyy-mm-dd-1]"}]
   */
  dqcDescription?: string;
  /**
   * @remarks
   * The connection string.
   * 
   * @example
   * 1
   */
  dqcType?: number;
  /**
   * @remarks
   * The file ID. You can call the ListFiles operation to query the ID.
   * 
   * @example
   * 20
   */
  fileId?: number;
  /**
   * @remarks
   * Different file types have different codes. For more information, see [DataWorks node collection](https://help.aliyun.com/document_detail/600169.html).
   * You can also call the [ListFileType](https://help.aliyun.com/document_detail/212428.html) interface to query the code type of the file.
   * 
   * @example
   * 10
   */
  fileType?: number;
  /**
   * @remarks
   * The latest version number of the file.
   * 
   * @example
   * 3
   */
  fileVersion?: number;
  /**
   * @remarks
   * The timestamp when the node was modified. Unit: milliseconds.
   * 
   * @example
   * 1593879116000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The types of the nodes. You can call the [ListNodes](https://help.aliyun.com/document_detail/173979.html) operation to query the type of the node.
   * 
   * @example
   * 1234
   */
  nodeId?: number;
  /**
   * @remarks
   * The total number of nodes returned.
   * 
   * @example
   * liux_test_n****
   */
  nodeName?: string;
  /**
   * @remarks
   * The additional parameters.
   * 
   * @example
   * 19337906836551
   */
  ownerId?: string;
  /**
   * @remarks
   * The type of the node.
   * 
   * @example
   * a=b
   */
  paramValues?: string;
  /**
   * @remarks
   * The ID of the owner.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * ODPS_SQL
   */
  programType?: string;
  /**
   * @remarks
   * The information about the nodes.
   * 
   * @example
   * 33671
   */
  projectId?: number;
  /**
   * @remarks
   * The table and partition filter expression in Data Quality that are associated with the node.
   * 
   * @example
   * 1231123
   */
  relatedFlowId?: number;
  /**
   * @remarks
   * The environment of the workspace. Valid values: PROD and DEV.
   * 
   * @example
   * 60
   */
  repeatInterval?: number;
  /**
   * @remarks
   * The rerun mode. The value 0 indicates that rerun can be performed only if a failure occurs. The value 1 indicates that rerun can be performed in all cases. The value 2 indicates that rerun cannot be performed in all cases.
   * 
   * @example
   * 1
   */
  repeatMode?: number;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * true
   */
  repeatability?: boolean;
  /**
   * @remarks
   * The identifier of the resource group.
   * 
   * @example
   * group_123
   */
  resGroupIdentifier?: string;
  /**
   * @remarks
   * The ID of the workflow.
   * 
   * @example
   * The ID of the request. You can use the ID to query logs and troubleshoot issues.
   */
  resGroupName?: string;
  /**
   * @remarks
   * The types of the nodes. You can call the [ListNodes](https://help.aliyun.com/document_detail/173979.html) operation to query the type of the node.
   * 
   * @example
   * NORMAL
   */
  schedulerType?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      businessId: 'BusinessId',
      connection: 'Connection',
      createTime: 'CreateTime',
      cronExpress: 'CronExpress',
      deployDate: 'DeployDate',
      description: 'Description',
      dqcDescription: 'DqcDescription',
      dqcType: 'DqcType',
      fileId: 'FileId',
      fileType: 'FileType',
      fileVersion: 'FileVersion',
      modifyTime: 'ModifyTime',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      ownerId: 'OwnerId',
      paramValues: 'ParamValues',
      priority: 'Priority',
      programType: 'ProgramType',
      projectId: 'ProjectId',
      relatedFlowId: 'RelatedFlowId',
      repeatInterval: 'RepeatInterval',
      repeatMode: 'RepeatMode',
      repeatability: 'Repeatability',
      resGroupIdentifier: 'ResGroupIdentifier',
      resGroupName: 'ResGroupName',
      schedulerType: 'SchedulerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      businessId: 'number',
      connection: 'string',
      createTime: 'number',
      cronExpress: 'string',
      deployDate: 'number',
      description: 'string',
      dqcDescription: 'string',
      dqcType: 'number',
      fileId: 'number',
      fileType: 'number',
      fileVersion: 'number',
      modifyTime: 'number',
      nodeId: 'number',
      nodeName: 'string',
      ownerId: 'string',
      paramValues: 'string',
      priority: 'number',
      programType: 'string',
      projectId: 'number',
      relatedFlowId: 'number',
      repeatInterval: 'number',
      repeatMode: 'number',
      repeatability: 'boolean',
      resGroupIdentifier: 'string',
      resGroupName: 'string',
      schedulerType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information about the nodes.
   */
  nodes?: ListNodesResponseBodyDataNodes[];
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The cron expression returned.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the workflow.
   * 
   * @example
   * 66
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': ListNodesResponseBodyDataNodes },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The nodes.
   */
  data?: ListNodesResponseBodyData;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * Invalid.Tenant.ConnectionNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * The connection does not exist.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The interval at which the node is rerun after the node fails to run.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The list of nodes.
   * 
   * @example
   * E6F0DBDD-5AD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the node can be rerun.
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
      data: ListNodesResponseBodyData,
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

