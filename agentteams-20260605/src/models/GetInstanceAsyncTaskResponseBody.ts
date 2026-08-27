// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceAsyncTaskResponseBodyItemsRecoveryMessage extends $dara.Model {
  /**
   * @remarks
   * The error code. Valid values:
   * - CMS_WORKSPACE_QUOTA_EXCEEDED: CMS workspace quota exceeded.
   * 
   * @example
   * CMS_WORKSPACE_QUOTA_EXCEEDED
   */
  code?: string;
  /**
   * @remarks
   * The specific error message.
   * 
   * @example
   * CMS workspace quota exceeded
   */
  message?: string;
  /**
   * @remarks
   * The time when the error occurred.
   * 
   * @example
   * 2026-06-01T12:00:00Z
   */
  occurredAt?: string;
  /**
   * @remarks
   * The suggested recovery action.
   * 
   * @example
   * Please increase the CMS workspace quota or clean up unused workspaces.
   */
  recoverySuggestion?: string;
  /**
   * @remarks
   * Indicates whether the task can be retried.
   * 
   * @example
   * true
   */
  retryable?: boolean;
  /**
   * @remarks
   * The error source. Valid values:
   * - CMS: content management system.
   * 
   * @example
   * CMS
   */
  source?: string;
  /**
   * @remarks
   * The recovery type. Valid values:
   * - ERROR_RECOVERY: error recovery.
   * 
   * @example
   * ERROR_RECOVERY
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      occurredAt: 'OccurredAt',
      recoverySuggestion: 'RecoverySuggestion',
      retryable: 'Retryable',
      source: 'Source',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      occurredAt: 'string',
      recoverySuggestion: 'string',
      retryable: 'boolean',
      source: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceAsyncTaskResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The current step.
   * 
   * @example
   * create-cms-workspace
   */
  currentStep?: string;
  /**
   * @remarks
   * The recovery message returned to the user when the task status is paused.
   * 
   * @example
   * {}
   */
  recoveryMessage?: GetInstanceAsyncTaskResponseBodyItemsRecoveryMessage;
  /**
   * @remarks
   * The task code. Valid values:
   * - LIFECYCLE_MAGIC_PAY_ORDER_CALLBACK_CREATE: instance creation task.
   * - MAGIC_BIND_IDENTITY_PROVIDER: upstream identity provider binding task.
   * 
   * @example
   * LIFECYCLE_MAGIC_PAY_ORDER_CALLBACK_CREATE
   */
  taskCode?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * task-xxx
   */
  taskId?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - PAUSED: paused.
   * - RUNNING: running.
   * - SUCCEEDED: succeeded.
   * - FAILED: failed.
   * 
   * @example
   * PAUSED
   */
  taskStatus?: string;
  /**
   * @remarks
   * Indicates whether the task is waiting for user action. When `taskStatus = PAUSED`, this value is true and `recoveryMessage` is returned to display recovery instructions to the user. When the task is not paused, this value is false and `recoveryMessage` is empty.
   * 
   * @example
   * true
   */
  waitingForUserAction?: boolean;
  static names(): { [key: string]: string } {
    return {
      currentStep: 'CurrentStep',
      recoveryMessage: 'RecoveryMessage',
      taskCode: 'TaskCode',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      waitingForUserAction: 'WaitingForUserAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentStep: 'string',
      recoveryMessage: GetInstanceAsyncTaskResponseBodyItemsRecoveryMessage,
      taskCode: 'string',
      taskId: 'string',
      taskStatus: 'string',
      waitingForUserAction: 'boolean',
    };
  }

  validate() {
    if(this.recoveryMessage && typeof (this.recoveryMessage as any).validate === 'function') {
      (this.recoveryMessage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceAsyncTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * SUCCESS
   * 
   * @example
   * SUCCESS
   */
  code?: string;
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
   * The returned list. The `items` array may contain multiple tasks with the same `taskCode`.
   * 
   * @example
   * [...]
   */
  items?: GetInstanceAsyncTaskResponseBodyItems[];
  /**
   * @remarks
   * The page size. Default value: 100. Valid values: 1 to 100.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * success
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The token for the next page. This parameter is not returned for the first request.
   * 
   * @example
   * null
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * req-xxx
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
  /**
   * @remarks
   * The total number of tasks.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      items: 'Items',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': GetInstanceAsyncTaskResponseBodyItems },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

