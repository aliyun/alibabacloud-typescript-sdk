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
   * - 0 (SQL-level): A data quality check is triggered after each SQL statement is run.
   * 
   * - 1 (Task-level): A data quality check is triggered after all SQL statements are run.
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
   * The subscribers who receive alert notifications. The value is the ID of an Alibaba Cloud account.
   * 
   * @example
   * 1822931****
   */
  followers?: string;
  /**
   * @remarks
   * Indicates whether the partition filter expression is associated with a scheduling node. Valid values:
   * 
   * - true: The partition filter expression is associated with a scheduling node.
   * 
   * - false: The partition filter expression is not associated with a scheduling node.
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
   * The time when the partition filter expression was last updated.
   * 
   * @example
   * 1593964800000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The user who updates the partition filter expression. The value is the ID of an Alibaba Cloud account.
   * 
   * @example
   * 1822931****
   */
  modifyUser?: string;
  /**
   * @remarks
   * The owner who configures the partition filter expression. The value is the ID of an Alibaba Cloud account.
   * 
   * @example
   * 1822931****
   */
  onDuty?: string;
  /**
   * @remarks
   * The name of the Alibaba Cloud account of the owner.
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
   * The scheduling node that is associated with the partition filter expression. This parameter includes the following sub-parameters:
   * 
   * - ProjectName: The name of the workspace to which the scheduling node belongs.
   * 
   * - NodeID: The ID of the scheduling node.
   * 
   * @example
   * [{"projectName":"xc_DP****","nodeId":7000026****}]
   */
  relativeNode?: string;
  /**
   * @remarks
   * The SQL-level partition filter expression.
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
   * The data returned.
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
   * Indicates whether the request succeeded.
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

