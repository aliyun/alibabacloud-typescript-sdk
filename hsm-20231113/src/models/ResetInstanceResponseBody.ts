// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetInstanceResponseBodyJob extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the task is complete.
   * 
   * @example
   * true
   */
  completed?: boolean;
  /**
   * @remarks
   * The time when the task is created. The value is accurate to the millisecond. The value is a UNIX timestamp.
   * 
   * @example
   * 1653274407000
   */
  createTime?: string;
  /**
   * @remarks
   * The error message returned if the task fails.
   * 
   * @example
   * OperationTimeout
   */
  error?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * job-0007bl8oev0u3jqyfu6a
   */
  jobId?: string;
  /**
   * @remarks
   * The progress of the task. Unit: percent (%).
   * 
   * @example
   * 80
   */
  progress?: number;
  /**
   * @remarks
   * The response returned after the task succeeds.
   * 
   * @example
   * success
   */
  response?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   success
   * *   running
   * *   cancel
   * *   fail
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * *   create
   * *   cancel
   * 
   * @example
   * create
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      completed: 'Completed',
      createTime: 'CreateTime',
      error: 'Error',
      jobId: 'JobId',
      progress: 'Progress',
      response: 'Response',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completed: 'boolean',
      createTime: 'string',
      error: 'string',
      jobId: 'string',
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

export class ResetInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the task.
   */
  job?: ResetInstanceResponseBodyJob;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      job: 'Job',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      job: ResetInstanceResponseBodyJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.job && typeof (this.job as any).validate === 'function') {
      (this.job as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

