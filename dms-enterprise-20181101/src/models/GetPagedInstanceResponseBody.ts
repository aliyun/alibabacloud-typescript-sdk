// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPagedInstanceResponseBodyDataInstance extends $dara.Model {
  /**
   * @remarks
   * The data timestamp of the task node.
   * 
   * @example
   * 2023-05-14 16:00:57
   */
  businessTime?: string;
  /**
   * @remarks
   * The state of archived data verification. Valid values:
   * 
   * *   **0**: The verification was successful.
   * *   **1**: Inconsistent data was detected.
   * *   **2**: The verification was not performed.
   * *   **3**: The verification is in progress.
   * *   **4**: The verification was interrupted.
   * 
   * @example
   * 3
   */
  checkStatus?: number;
  /**
   * @remarks
   * The unique ID of the task flow.
   * 
   * @example
   * 33753
   */
  dagId?: number;
  /**
   * @remarks
   * Indicates whether the source data is deleted. Valid values:
   * 
   * *   **true**: deletes the jobs in the application group.
   * *   **false**
   * 
   * @example
   * false
   */
  delete?: string;
  /**
   * @remarks
   * The time when the task ended.
   * 
   * @example
   * 2023-04-23 10:23:20
   */
  endTime?: string;
  /**
   * @remarks
   * The time when the task flow was created.
   * 
   * @example
   * 2023-03-28 10:50:45
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the task flow was last modified.
   * 
   * @example
   * 2023-04-18 15:28:16
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the historical task flow.
   * 
   * @example
   * 6851
   */
  historyDagId?: number;
  /**
   * @remarks
   * The task flow ID.
   * 
   * @example
   * 24271
   */
  id?: number;
  /**
   * @remarks
   * The context of the last execution of the task flow.
   * 
   * @example
   * {”nodes":[11694,11695]"}
   */
  lastRunningContext?: string;
  /**
   * @remarks
   * The details of the current task execution.
   */
  msg?: string;
  /**
   * @remarks
   * The state of the archiving task.
   * 
   * *   **0**: Pending.
   * *   **1**: Running.
   * *   **2**: Paused.
   * *   **3**: Failed.
   * *   **4**: Succeeded.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * *   **1**: data archiving
   * *   **2**: archived data restoration
   * *   **3**: archived data verification
   * 
   * @example
   * 1
   */
  taskType?: number;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 3406
   */
  tenantId?: string;
  /**
   * @remarks
   * The mode in which the task flow is triggered. Valid values:
   * 
   * *   **0**: The task flow was triggered based on a schedule.
   * *   **1**: The task flow was manually triggered.
   * 
   * @example
   * 1
   */
  triggerType?: number;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      businessTime: 'BusinessTime',
      checkStatus: 'CheckStatus',
      dagId: 'DagId',
      delete: 'Delete',
      endTime: 'EndTime',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      historyDagId: 'HistoryDagId',
      id: 'Id',
      lastRunningContext: 'LastRunningContext',
      msg: 'Msg',
      status: 'Status',
      taskType: 'TaskType',
      tenantId: 'TenantId',
      triggerType: 'TriggerType',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessTime: 'string',
      checkStatus: 'number',
      dagId: 'number',
      delete: 'string',
      endTime: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      historyDagId: 'number',
      id: 'number',
      lastRunningContext: 'string',
      msg: 'string',
      status: 'number',
      taskType: 'number',
      tenantId: 'string',
      triggerType: 'number',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPagedInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information about the task.
   */
  instance?: GetPagedInstanceResponseBodyDataInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': GetPagedInstanceResponseBodyDataInstance },
    };
  }

  validate() {
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPagedInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: GetPagedInstanceResponseBodyData;
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
   * The error message that is returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID. You can use the request ID to query logs and troubleshoot issues.
   * 
   * @example
   * 7FAD400F-7A5C-4193-8F9A-39D86C4F0231
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of instances.
   * 
   * @example
   * 2
   */
  total?: number;
  /**
   * @remarks
   * The trace ID, which is used to track the request.
   * 
   * @example
   * 0a06e1e316757357507896067d3780
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetPagedInstanceResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
      traceId: 'string',
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

