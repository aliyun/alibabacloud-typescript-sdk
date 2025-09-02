// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNodeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The description of the node.
   * 
   * @example
   * 123456
   */
  baselineId?: number;
  /**
   * @remarks
   * The operation that you want to perform. Set the value to **GetNode**.
   * 
   * @example
   * 123
   */
  businessId?: number;
  /**
   * @remarks
   * The environment of the workspace. Valid values: PROD and DEV.
   * 
   * @example
   * odps_first_dev
   */
  connection?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1727280000000
   */
  createTime?: number;
  /**
   * @remarks
   * The environment of the workspace. Valid values: PROD and DEV.
   * 
   * @example
   * 00 00 00 * * ?
   */
  cronExpress?: string;
  /**
   * @remarks
   * The deployment date.
   * 
   * @example
   * 1727280000000
   */
  deployDate?: number;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the node. You can call the [ListNodes](https://help.aliyun.com/document_detail/173979.html) operation to query the node ID.
   * 
   * @example
   * [{"projectName":"test_0923001","tableName":"test_table_001","partition":"ds\\u003d$[yyyymmdd]"},{"projectName":"test_0923001","tableName":"test_table_002","partition":"NOTAPARTITIONTABLE"}]
   */
  dqcDescription?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * 1
   */
  dqcType?: number;
  /**
   * @remarks
   * The ID of the file.
   * 
   * @example
   * 123
   */
  fileId?: number;
  /**
   * @remarks
   * The file type. Different file types have different codes. For more information, see [DataWorks node collection](https://help.aliyun.com/document_detail/600169.html).
   * 
   * @example
   * 10
   */
  fileType?: number;
  /**
   * @remarks
   * The version of the file.
   * 
   * @example
   * 1
   */
  fileVersion?: number;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 1727280000000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 1234
   */
  nodeId?: number;
  /**
   * @remarks
   * The scheduling type of the node. Valid values:
   * 
   * *   NORMAL: The node is an auto triggered node.
   * *   MANUAL: The node is a manually triggered node. Manually triggered nodes cannot be automatically triggered.
   * *   PAUSE: The node is a paused node.
   * *   SKIP: The node is a dry-run node. Dry-run nodes are started as scheduled but the system sets the status of the nodes to successful when it starts to run them.
   * 
   * @example
   * The ID of the baseline.
   */
  nodeName?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * 17366294****
   */
  ownerId?: string;
  /**
   * @remarks
   * The CRON expression returned.
   * 
   * @example
   * a=b
   */
  paramValues?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the owner of the node.
   * 
   * @example
   * ODPS_SQL
   */
  programType?: string;
  /**
   * @remarks
   * Indicates whether the node can be rerun.
   * 
   * @example
   * 1234
   */
  projectId?: number;
  /**
   * @remarks
   * Indicates whether the node is associated with Data Quality. Valid values: 0 and 1. A value of 0 indicates that the node is associated with Data Quality. A value of 1 indicates that the node is not associated with Data Quality.
   * 
   * @example
   * 123
   */
  relatedFlowId?: number;
  /**
   * @remarks
   * The ID of the workflow to which the node belongs.
   * 
   * @example
   * 60
   */
  repeatInterval?: number;
  /**
   * @remarks
   * Rerun mode. 0 indicates that you can rerun only if you fail, 1 indicates that you can rerun in all cases, and 2 indicates that you cannot rerun in all cases.
   * 
   * @example
   * 1
   */
  repeatMode?: number;
  /**
   * @remarks
   * The type of the node.
   * 
   * @example
   * true
   */
  repeatability?: string;
  /**
   * @remarks
   * The unique identifier of the resource group.
   * 
   * @example
   * group_123
   */
  resGroupIdentifier?: string;
  /**
   * @remarks
   * The ID of the request. You can use the ID to locate logs and troubleshoot issues.
   * 
   * @example
   * The table and partition filter expression in Data Quality that are associated with the node.
   */
  resGroupName?: string;
  /**
   * @remarks
   * The ID of the workspace.
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
      repeatability: 'string',
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

export class GetNodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the node.
   */
  data?: GetNodeResponseBodyData;
  /**
   * @remarks
   * The ID of the node. You can call the [ListNodes](https://help.aliyun.com/document_detail/173979.html) operation to query the node ID.
   * 
   * @example
   * Invalid.Tenant.ConnectionNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The connection string.
   * 
   * @example
   * The connection does not exist.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The operation that you want to perform. Set the value to **GetNode**.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Other parameters.
   * 
   * @example
   * E6F0DBDD-5AD****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the workflow.
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
      data: GetNodeResponseBodyData,
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

