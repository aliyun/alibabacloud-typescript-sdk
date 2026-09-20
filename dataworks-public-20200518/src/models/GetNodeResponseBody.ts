// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNodeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The baseline ID. The baseline ID configured for the node as a leaf node is returned. If no baseline is configured, a workspace default value is returned.
   * 
   * @example
   * 123456
   */
  baselineId?: number;
  /**
   * @remarks
   * The ID of the workflow.
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
   * odps_source_dev
   */
  connection?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * The value is a 13-digit number, such as `1727280000000`.
   * 
   * @example
   * 1727280000000
   */
  createTime?: number;
  /**
   * @remarks
   * The CRON expression.
   * 
   * @example
   * 00 00 00 * * ?
   */
  cronExpress?: string;
  /**
   * @remarks
   * The deployment date.
   * 
   * The value is a 13-digit number, such as `1727280000000`.
   * 
   * @example
   * 1727280000000
   */
  deployDate?: number;
  /**
   * @remarks
   * The description of the node.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The DQC partitioning rule string.
   * 
   * @example
   * [{"projectName":"test_0923001","tableName":"test_table_001","partition":"ds\\u003d$[yyyymmdd]"},{"projectName":"test_0923001","tableName":"test_table_002","partition":"NOTAPARTITIONTABLE"}]
   */
  dqcDescription?: string;
  /**
   * @remarks
   * The DQC type. A value of 0 indicates that no DQC rule is associated. A value of 1 indicates that a DQC rule is associated.
   * 
   * @example
   * 1
   */
  dqcType?: number;
  /**
   * @remarks
   * The file ID. <warning>This field is deprecated.</warning>
   * 
   * @example
   * 123
   */
  fileId?: number;
  /**
   * @remarks
   * The file type. Different file types have different codes. For more information, see [DataWorks nodes](https://help.aliyun.com/document_detail/600169.html).
   * 
   * @example
   * 10
   */
  fileType?: number;
  /**
   * @remarks
   * The file version.
   * 
   * @example
   * 1
   */
  fileVersion?: number;
  /**
   * @remarks
   * The modification time.
   * 
   * The value is a 13-digit number, such as `1727280000000`.
   * 
   * @example
   * 1727280000000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * 1234
   */
  nodeId?: number;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * sql_node
   */
  nodeName?: string;
  /**
   * @remarks
   * The ID of the node owner.
   * 
   * @example
   * 17366294****
   */
  ownerId?: string;
  /**
   * @remarks
   * The additional parameters.
   * 
   * @example
   * a=b
   */
  paramValues?: string;
  /**
   * @remarks
   * The priority of the node. Valid values: 1, 3, 5, 7, and 8.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The type of the node.
   * 
   * @example
   * ODPS_SQL
   */
  programType?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * 1234
   */
  projectId?: number;
  /**
   * @remarks
   * The ID of the associated workflow.
   * 
   * @example
   * 123
   */
  relatedFlowId?: number;
  /**
   * @remarks
   * The interval at which the node is rescheduled after a failure.
   * 
   * @example
   * 60
   */
  repeatInterval?: number;
  /**
   * @remarks
   * The rerun mode. A value of 0 indicates that the node can be rerun only upon failure. A value of 1 indicates that the node can be rerun in all cases. A value of 2 indicates that the node cannot be rerun in any case.
   * 
   * @example
   * 1
   */
  repeatMode?: number;
  /**
   * @remarks
   * Indicates whether the node can be rerun.
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
   * The name of the resource group.
   * 
   * @example
   * Default Resource Group
   */
  resGroupName?: string;
  /**
   * @remarks
   * The scheduling type. Valid values:
   * - NORMAL: normal scheduling node.
   * - MANUAL: manual node that is not scheduled on a regular basis.
   * - PAUSE: paused node.
   * - SKIP: dry-run node that is scheduled on a regular basis but is directly set to successful when scheduling starts.
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
   * The error code.
   * 
   * @example
   * Invalid.Tenant.ConnectionNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The connection does not exist.
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
   * The request ID. You can use the ID to locate logs and troubleshoot issues.
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

