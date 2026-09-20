// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityEntityResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the partition expression was created.
   * 
   * The value is a 13-digit number, for example, `1593964800000`.
   * 
   * @example
   * 1593964800000
   */
  createTime?: number;
  /**
   * @remarks
   * The level of the partition expression. Valid values:
   * - 0 (SQL level): DQC verification is triggered after each SQL statement is executed.
   * - 1 (Task level): Verification is performed after all SQL statements are executed.
   * 
   * @example
   * 0
   */
  entityLevel?: number;
  /**
   * @remarks
   * The type of the engine or data source.
   * 
   * @example
   * odps
   */
  envType?: string;
  /**
   * @remarks
   * The subscribers. The Alibaba Cloud account IDs that receive alert notifications.
   * 
   * @example
   * 1822931****
   */
  followers?: string;
  /**
   * @remarks
   * Indicates whether the partition expression is associated with scheduling. Valid values:
   * - true: Associated with scheduling.
   * - false: Not associated with scheduling.
   * 
   * @example
   * true
   */
  hasRelativeNode?: boolean;
  /**
   * @remarks
   * The ID of the partition expression.
   * 
   * @example
   * 4003918
   */
  id?: number;
  /**
   * @remarks
   * The partition expression.
   * 
   * @example
   * dt=$[yyyymmdd-1]
   */
  matchExpression?: string;
  /**
   * @remarks
   * The time when the partition expression was updated.
   * 
   * The value is a 13-digit number, for example, `1593964800000`.
   * 
   * @example
   * 1593964800000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The account ID of the user who updated the partition expression.
   * 
   * @example
   * 1822931****
   */
  modifyUser?: string;
  /**
   * @remarks
   * The owner. The account ID of the user who configured the partition expression.
   * 
   * @example
   * 1822931****
   */
  onDuty?: string;
  /**
   * @remarks
   * The Alibaba Cloud account name of the owner.
   * 
   * @example
   * test
   */
  onDutyAccountName?: string;
  /**
   * @remarks
   * The name of the engine or data source.
   * 
   * @example
   * autotest
   */
  projectName?: string;
  /**
   * @remarks
   * The information about the scheduling node associated with the partition expression, including:
   * - ProjectName: the name of the project to which the scheduling node belongs.
   * - NodeID: the node ID of the scheduling node.
   * 
   * @example
   * [{"projectName":"xc_DP****","nodeId":7000026****}]
   */
  relativeNode?: string;
  /**
   * @remarks
   * The SQL-level partition expression.
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
   * The task node.
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
   * The returned information.
   */
  data?: GetQualityEntityResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 401
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * You have no permission.
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
   * 6d739ef6-098a-47****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
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

