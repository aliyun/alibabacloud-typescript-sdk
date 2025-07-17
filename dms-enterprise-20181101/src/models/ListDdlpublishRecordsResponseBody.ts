// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDDLPublishRecordsResponseBodyDDLPublishRecordListPublishTaskInfoListPublishJobList extends $dara.Model {
  /**
   * @remarks
   * The ID of the SQL task group.
   * 
   * @example
   * 423515
   */
  DBTaskGroupId?: number;
  /**
   * @remarks
   * The number of SQL statements that are executed.
   * 
   * @example
   * 0
   */
  executeCount?: number;
  /**
   * @remarks
   * The script for data changes.
   * 
   * @example
   * ALTER TABLE test_toolkit_rename_table_after_rename MODIFY COLUMN gmt_modified datetime NOT NULL
   */
  scripts?: string;
  /**
   * @remarks
   * The description of the state.
   * 
   * @example
   * NONE
   */
  statusDesc?: string;
  /**
   * @remarks
   * The name of the table after the change.
   * 
   * @example
   * test_toolkit_rename_table_after_rename
   */
  tableName?: string;
  /**
   * @remarks
   * The state of the publishing task. Valid values:
   * 
   * *   **NONE**: The state of the task is unknown.
   * *   **SUCCESS**: The task is successful.
   * *   **FAIL**: The task fails.
   * 
   * @example
   * NONE
   */
  taskJobStatus?: string;
  static names(): { [key: string]: string } {
    return {
      DBTaskGroupId: 'DBTaskGroupId',
      executeCount: 'ExecuteCount',
      scripts: 'Scripts',
      statusDesc: 'StatusDesc',
      tableName: 'TableName',
      taskJobStatus: 'TaskJobStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBTaskGroupId: 'number',
      executeCount: 'number',
      scripts: 'string',
      statusDesc: 'string',
      tableName: 'string',
      taskJobStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDDLPublishRecordsResponseBodyDDLPublishRecordListPublishTaskInfoList extends $dara.Model {
  /**
   * @remarks
   * The ID of the database.
   * 
   * @example
   * 4325
   */
  dbId?: number;
  /**
   * @remarks
   * Indicates whether the database is a logical database. Valid values:
   * 
   * *   **true**: The database is a logical database.
   * *   **false**: the database is not a logical database.
   * 
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * The time to publish the ticket.
   * 
   * @example
   * 2020-12-14 20:52:38
   */
  planTime?: string;
  /**
   * @remarks
   * The list of the publishing tasks.
   */
  publishJobList?: ListDDLPublishRecordsResponseBodyDDLPublishRecordListPublishTaskInfoListPublishJobList[];
  /**
   * @remarks
   * The publishing policy. Valid values:
   * 
   * *   **IMMEDIATELY**: immediately publishes the ticket.
   * *   **REGULARLY**: publishes the ticket at a scheduled time.
   * 
   * @example
   * IMMEDIATELY
   */
  publishStrategy?: string;
  /**
   * @remarks
   * The description of the state.
   * 
   * @example
   * NONE
   */
  statusDesc?: string;
  /**
   * @remarks
   * The state of the task.
   * 
   * @example
   * NONE
   */
  taskJobStatus?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      logic: 'Logic',
      planTime: 'PlanTime',
      publishJobList: 'PublishJobList',
      publishStrategy: 'PublishStrategy',
      statusDesc: 'StatusDesc',
      taskJobStatus: 'TaskJobStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      logic: 'boolean',
      planTime: 'string',
      publishJobList: { 'type': 'array', 'itemType': ListDDLPublishRecordsResponseBodyDDLPublishRecordListPublishTaskInfoListPublishJobList },
      publishStrategy: 'string',
      statusDesc: 'string',
      taskJobStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.publishJobList)) {
      $dara.Model.validateArray(this.publishJobList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDDLPublishRecordsResponseBodyDDLPublishRecordList extends $dara.Model {
  /**
   * @remarks
   * The time when the approval expires.
   * 
   * @example
   * 2020-12-14 20:52:38
   */
  auditExpireTime?: string;
  /**
   * @remarks
   * The approval state of the ticket. Valid values:
   * 
   * *   **EXEMPT_PASS**: The ticket passes without approval.
   * *   **TO_AUDIT**: The ticket is pending for approval.
   * *   **CANCEL**: The ticket is canceled.
   * *   **SUCCESS**: The ticket is approved.
   * *   **FAIL**: The ticket fails to pass the approval.
   * 
   * @example
   * CANCEL
   */
  auditStatus?: string;
  /**
   * @remarks
   * Release remarks.
   * 
   * @example
   * Release remarks
   */
  comment?: string;
  /**
   * @remarks
   * The ID of the user who creates the ticket. You can obtain the user ID by calling the [GetUser](https://help.aliyun.com/document_detail/147098.html) operation and querying the value of the UserId parameter. The value is not the unique ID (UID) of the Alibaba Cloud account.
   * 
   * @example
   * 1423
   */
  creatorId?: number;
  /**
   * @remarks
   * Indicates whether the approval is terminated. Valid values:
   * 
   * *   **true**: The approval is terminated.
   * *   **false**: The approval is not terminated.
   * 
   * > Multiple reasons can terminate the approval. For example, you withdraw the application or your ticket is not approved before the specified time.
   * 
   * @example
   * true
   */
  finality?: boolean;
  /**
   * @remarks
   * The reason for the termination.
   * 
   * @example
   * CANCEL
   */
  finalityReason?: string;
  /**
   * @remarks
   * The publishing state of the ticket. Valid values:
   * 
   * *   **START**: The ticket is created.
   * *   **ANALYZE**: The ticket is under analysis.
   * *   **AUDIT**: The ticket is under approval.
   * *   **DISPATCH**: A task is generated for the ticket.
   * *   **SUCCESS**: The task is successful.
   * 
   * @example
   * AUDIT
   */
  publishStatus?: string;
  /**
   * @remarks
   * The list of publishing tasks.
   */
  publishTaskInfoList?: ListDDLPublishRecordsResponseBodyDDLPublishRecordListPublishTaskInfoList[];
  /**
   * @remarks
   * The risk level of the operation. Valid values:
   * 
   * *   **NONE_RISK**: The operation does not have risks.
   * *   **LOW_RISK**: The operation is at low risk.
   * *   **MIDDLE_RISK**: The operation is at medium risk.
   * *   **HIGH_RISK**: The operation is at high risk.
   * 
   * @example
   * LOW_RISK
   */
  riskLevel?: string;
  /**
   * @remarks
   * The description of the publishing state.
   * 
   * @example
   * CANCEL
   */
  statusDesc?: string;
  /**
   * @remarks
   * The ID of the approval process.
   * 
   * @example
   * 432153
   */
  workflowInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
      auditExpireTime: 'AuditExpireTime',
      auditStatus: 'AuditStatus',
      comment: 'Comment',
      creatorId: 'CreatorId',
      finality: 'Finality',
      finalityReason: 'FinalityReason',
      publishStatus: 'PublishStatus',
      publishTaskInfoList: 'PublishTaskInfoList',
      riskLevel: 'RiskLevel',
      statusDesc: 'StatusDesc',
      workflowInstanceId: 'WorkflowInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditExpireTime: 'string',
      auditStatus: 'string',
      comment: 'string',
      creatorId: 'number',
      finality: 'boolean',
      finalityReason: 'string',
      publishStatus: 'string',
      publishTaskInfoList: { 'type': 'array', 'itemType': ListDDLPublishRecordsResponseBodyDDLPublishRecordListPublishTaskInfoList },
      riskLevel: 'string',
      statusDesc: 'string',
      workflowInstanceId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.publishTaskInfoList)) {
      $dara.Model.validateArray(this.publishTaskInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDDLPublishRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the publishing records.
   */
  DDLPublishRecordList?: ListDDLPublishRecordsResponseBodyDDLPublishRecordList[];
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A1549FB0-D4B8-4140-919F-17322C1072B8
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
      DDLPublishRecordList: 'DDLPublishRecordList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DDLPublishRecordList: { 'type': 'array', 'itemType': ListDDLPublishRecordsResponseBodyDDLPublishRecordList },
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.DDLPublishRecordList)) {
      $dara.Model.validateArray(this.DDLPublishRecordList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

