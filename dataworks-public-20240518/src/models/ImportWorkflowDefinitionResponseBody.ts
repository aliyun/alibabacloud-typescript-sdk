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
   * The time when the asynchronous task was created. This value is a UNIX timestamp.
   * 
   * @example
   * 1706581425000
   */
  createTime?: number;
  /**
   * @remarks
   * The error message returned if the asynchronous task fails.
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
   * The response.
   * 
   * >  The workflow ID is returned.
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
   * *   Running: The asynchronous task is running.
   * *   Success: The asynchronous task is complete.
   * *   Fail: The asynchronous task fails.
   * *   Cancel: The asynchronous task is canceled.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The type of the asynchronous task.
   * 
   * Valid values:
   * 
   * *   Create: The asynchronous task is used to create an object.
   * *   Cancel: The asynchronous task is used to cancel an operation.
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
   * The status information of the asynchronous task.
   */
  asyncJob?: ImportWorkflowDefinitionResponseBodyAsyncJob;
  /**
   * @remarks
   * The request ID.
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

