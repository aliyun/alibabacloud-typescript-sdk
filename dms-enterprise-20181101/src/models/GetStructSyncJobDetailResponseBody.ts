// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStructSyncJobDetailResponseBodyStructSyncJobDetail extends $dara.Model {
  /**
   * @remarks
   * The ID of the SQL task group.
   * 
   * @example
   * 12345
   */
  DBTaskGroupId?: number;
  /**
   * @remarks
   * The number of SQL statements that have been executed.
   * 
   * @example
   * 1
   */
  executeCount?: number;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   **NEW**: The task was created.
   * *   **COMPARING**: The schemas of tables were being compared.
   * *   **COMPARE_BREAK**: The schema comparison was interrupted.
   * *   **COMPARE_FINISH**: The comparison was finished.
   * *   **NOT_SCRIPTS**: The comparison was finished but no executable script was available.
   * *   **SUBMITED_DBTASK**: The task was submitted.
   * *   **DBTASK_SUCCESS**: The task was complete.
   * *   **SUBMITED_WORKFLOW**: The ticket was submitted.
   * *   **WORKFLOW_SUCCESS**: The ticket was approved.
   * 
   * @example
   * DBTASK_SUCCESS
   */
  jobStatus?: string;
  /**
   * @remarks
   * The description of the task.
   * 
   * @example
   * test
   */
  message?: string;
  /**
   * @remarks
   * The type of security rule. Valid values:
   * 
   * *   **CANNOT_SYNC**: Synchronization cannot be performed.
   * *   **WITH_APPROVE**: The schema synchronization can be performed after the ticket is approved. You can call the [SubmitStructSyncOrderApproval](https://help.aliyun.com/document_detail/206166.html) operation to submit the ticket for approval.
   * *   **WITHOUT_APPROVE**: The schema synchronization can be performed without approval.
   * 
   * @example
   * WITHOUT_APPROVE
   */
  securityRule?: string;
  /**
   * @remarks
   * The total number of SQL statements.
   * 
   * @example
   * 1
   */
  sqlCount?: number;
  /**
   * @remarks
   * The number of tables that have been analyzed.
   * 
   * @example
   * 2
   */
  tableAnalyzed?: number;
  /**
   * @remarks
   * The total number of tables.
   * 
   * @example
   * 2
   */
  tableCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBTaskGroupId: 'DBTaskGroupId',
      executeCount: 'ExecuteCount',
      jobStatus: 'JobStatus',
      message: 'Message',
      securityRule: 'SecurityRule',
      sqlCount: 'SqlCount',
      tableAnalyzed: 'TableAnalyzed',
      tableCount: 'TableCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBTaskGroupId: 'number',
      executeCount: 'number',
      jobStatus: 'string',
      message: 'string',
      securityRule: 'string',
      sqlCount: 'number',
      tableAnalyzed: 'number',
      tableCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStructSyncJobDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 48602B78-0DDF-414C-8688-70CAB6070115
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the schema synchronization task.
   */
  structSyncJobDetail?: GetStructSyncJobDetailResponseBodyStructSyncJobDetail;
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
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      structSyncJobDetail: 'StructSyncJobDetail',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      structSyncJobDetail: GetStructSyncJobDetailResponseBodyStructSyncJobDetail,
      success: 'boolean',
    };
  }

  validate() {
    if(this.structSyncJobDetail && typeof (this.structSyncJobDetail as any).validate === 'function') {
      (this.structSyncJobDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

