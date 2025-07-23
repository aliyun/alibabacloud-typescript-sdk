// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobResponseBodyJob extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the task is complete. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  completed?: boolean;
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
   * job-202401250936hze747fd7e0007005
   */
  jobId?: string;
  /**
   * @remarks
   * The progress of the task. Unit: percent (%).
   * 
   * @example
   * 95
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
   * *   fail
   * *   cancel
   * 
   * @example
   * fail
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

export class GetJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the task.
   */
  job?: GetJobResponseBodyJob;
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
      job: GetJobResponseBodyJob,
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

