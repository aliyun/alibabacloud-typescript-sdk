// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportWorkflowDefinitionResponseBodyAsyncJob extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the asynchronous task is complete.
   * 
   * @example
   * false
   */
  completed?: boolean;
  /**
   * @remarks
   * The timestamp when the asynchronous task was created.
   * 
   * @example
   * 1706581425000
   */
  createTime?: number;
  /**
   * @remarks
   * The error message when the asynchronous task fails.
   * 
   * @example
   * target folder already exists: XXXX
   */
  error?: string;
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * 1234567691239009XXXX
   */
  id?: string;
  /**
   * @remarks
   * The progress of the asynchronous task. Valid values: 0 to 100.
   * 
   * @example
   * 0
   */
  progress?: number;
  /**
   * @remarks
   * The content that the asynchronous task is expected to return.
   * 
   * > This field currently stores the ID of the workflow created in the asynchronous task.
   * 
   * @example
   * 632647691239009XXXX
   */
  response?: string;
  /**
   * @remarks
   * The status of the asynchronous task.
   * 
   * Valid values:
   * 
   * - Running: The task is running.
   * - Success: The task succeeded.
   * - Fail: The task failed.
   * - Cancel: The task was canceled.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The operation type of the asynchronous task.
   * 
   * Valid values:
   * 
   * - Create: creates a resource. 
   * - Cancel: cancels a creation task.
   * 
   * @example
   * Create
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      completed: 'Completed',
      createTime: 'CreateTime',
      error: 'Error',
      id: 'Id',
      progress: 'Progress',
      response: 'Response',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completed: 'boolean',
      createTime: 'number',
      error: 'string',
      id: 'string',
      progress: 'number',
      response: 'string',
      status: 'string',
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

export class ImportWorkflowDefinitionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The asynchronous task status information.
   */
  asyncJob?: ImportWorkflowDefinitionResponseBodyAsyncJob;
  /**
   * @remarks
   * The request ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 7C352CB7-CD88-50CF-9D0D-E81BDF020E7F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncJob: 'AsyncJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncJob: ImportWorkflowDefinitionResponseBodyAsyncJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.asyncJob && typeof (this.asyncJob as any).validate === 'function') {
      (this.asyncJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

