// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobStatusResponseBodyJobStatus extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the operation is complete. Valid values:
   * - True: The current job has been completed.
   * - False: The current job is still running.
   * 
   * @example
   * False
   */
  completed?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * The value is a 13-digit number, such as `1729063449802`.
   * 
   * @example
   * 1729063449802
   */
  createTime?: string;
  /**
   * @remarks
   * The task failure information.
   * 
   * @example
   * Not Found
   */
  error?: string;
  /**
   * @remarks
   * The asynchronous task ID.
   * 
   * @example
   * C664CDE3-9C0B-5792-B17F-6C543783BBBC
   */
  jobId?: string;
  /**
   * @remarks
   * The task type.
   * 
   * - **Create**: A creation task.
   * 
   * - **Update**: An update task.
   * 
   * - **Cancel**: A cancellation task.
   * 
   * @example
   * Create
   */
  jobType?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - **Success**: succeeded.
   * - **Fail**: failed.
   * - **Cancel**: canceled.
   * - **Running**: running.
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      completed: 'Completed',
      createTime: 'CreateTime',
      error: 'Error',
      jobId: 'JobId',
      jobType: 'JobType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completed: 'string',
      createTime: 'string',
      error: 'string',
      jobId: 'string',
      jobType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The real-time result of the task status.
   */
  jobStatus?: GetJobStatusResponseBodyJobStatus;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5E2BFE96-C0E0-5A98-85C8-633EC803198D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobStatus: 'JobStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobStatus: GetJobStatusResponseBodyJobStatus,
      requestId: 'string',
    };
  }

  validate() {
    if(this.jobStatus && typeof (this.jobStatus as any).validate === 'function') {
      (this.jobStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

