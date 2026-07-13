// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceAsyncTaskResponseBodyItemsRecoveryMessage extends $dara.Model {
  code?: string;
  message?: string;
  occurredAt?: string;
  recoverySuggestion?: string;
  retryable?: boolean;
  source?: string;
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
  currentStep?: string;
  recoveryMessage?: GetInstanceAsyncTaskResponseBodyItemsRecoveryMessage;
  taskCode?: string;
  taskId?: string;
  taskStatus?: string;
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
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  items?: GetInstanceAsyncTaskResponseBodyItems[];
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * success
   */
  message?: string;
  nextToken?: string;
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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

