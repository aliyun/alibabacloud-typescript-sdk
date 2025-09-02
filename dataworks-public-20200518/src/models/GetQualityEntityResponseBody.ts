// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityEntityResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the partition filter expression was created.
   * 
   * @example
   * 1593964800000
   */
  createTime?: number;
  /**
   * @remarks
   * The level of the partition filter expression. Valid values:
   * 
   * *   0: The partition filter expression is at the SQL level. This indicates that the system checks data quality after each SQL statement is executed.
   * *   1: The partition filter expression is at the node level. This indicates that the system checks data quality after all the SQL statements for a node are executed.
   * 
   * @example
   * 0
   */
  entityLevel?: number;
  /**
   * @remarks
   * The type of the compute engine instance or data source.
   * 
   * @example
   * odps
   */
  envType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to receive alert notifications.
   * 
   * @example
   * 1822931****
   */
  followers?: string;
  /**
   * @remarks
   * Indicates whether the partition filter expression is associated with a node. Valid values:
   * 
   * *   true: The partition filter expression is associated with a node.
   * *   false: The partition filter expression is not associated with a node.
   * 
   * @example
   * true
   */
  hasRelativeNode?: boolean;
  /**
   * @remarks
   * The ID of the partition filter expression.
   * 
   * @example
   * 4003918
   */
  id?: number;
  /**
   * @remarks
   * The partition filter expression.
   * 
   * @example
   * dt=$[yyyymmdd-1]
   */
  matchExpression?: string;
  /**
   * @remarks
   * The time when the partition filter expression was modified.
   * 
   * @example
   * 1593964800000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to modify the partition filter expression.
   * 
   * @example
   * 1822931****
   */
  modifyUser?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to configure the partition filter expression.
   * 
   * @example
   * 1822931****
   */
  onDuty?: string;
  /**
   * @remarks
   * The name of the Alibaba Cloud account that is used to configure the partition filter expression.
   * 
   * @example
   * test
   */
  onDutyAccountName?: string;
  /**
   * @remarks
   * The name of the compute engine instance or data source.
   * 
   * @example
   * autotest
   */
  projectName?: string;
  /**
   * @remarks
   * The information about the node with which the partition filter expression is associated. The information includes the following items:
   * 
   * *   ProjectName: the name of the workspace to which the node belongs.
   * *   NodeID: the ID of the node.
   * 
   * @example
   * [{"projectName":"xc_DP****","nodeId":7000026****}]
   */
  relativeNode?: string;
  /**
   * @remarks
   * Indicates that the partition filter expression is at the SQL level.
   * 
   * @example
   * 0
   */
  sql?: number;
  /**
   * @remarks
   * The name of the partitioned table.
   * 
   * @example
   * test_dqc_de****
   */
  tableName?: string;
  /**
   * @remarks
   * The node.
   * 
   * @example
   * 0
   */
  task?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      entityLevel: 'EntityLevel',
      envType: 'EnvType',
      followers: 'Followers',
      hasRelativeNode: 'HasRelativeNode',
      id: 'Id',
      matchExpression: 'MatchExpression',
      modifyTime: 'ModifyTime',
      modifyUser: 'ModifyUser',
      onDuty: 'OnDuty',
      onDutyAccountName: 'OnDutyAccountName',
      projectName: 'ProjectName',
      relativeNode: 'RelativeNode',
      sql: 'Sql',
      tableName: 'TableName',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      entityLevel: 'number',
      envType: 'string',
      followers: 'string',
      hasRelativeNode: 'boolean',
      id: 'number',
      matchExpression: 'string',
      modifyTime: 'number',
      modifyUser: 'string',
      onDuty: 'string',
      onDutyAccountName: 'string',
      projectName: 'string',
      relativeNode: 'string',
      sql: 'number',
      tableName: 'string',
      task: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityEntityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the partition filter expression.
   */
  data?: GetQualityEntityResponseBodyData[];
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * 401
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * You have no permission.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6d739ef6-098a-47****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
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
      data: { 'type': 'array', 'itemType': GetQualityEntityResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

