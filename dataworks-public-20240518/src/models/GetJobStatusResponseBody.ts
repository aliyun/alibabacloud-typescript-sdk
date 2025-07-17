// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobStatusResponseBodyJobStatus extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the asynchronous task is complete. Valid values: True False
   * 
   * @example
   * False
   */
  completed?: string;
  /**
   * @remarks
   * The time when the asynchronous task was created.
   * 
   * @example
   * 1729063449802
   */
  createTime?: string;
  /**
   * @remarks
   * The error message returned if the asynchronous task fails.
   * 
   * @example
   * Not Found
   */
  error?: string;
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * C664CDE3-9C0B-5792-B17F-6C543783BBBC
   */
  jobId?: string;
  /**
   * @remarks
   * The type of the asynchronous task. Valid values:
   * 
   * *   **Create**: The asynchronous task is used to create an object.
   * *   **Update**: The asynchronous task is used to update an object.
   * *   **Cancel**: The asynchronous task is used to cancel an operation.
   * 
   * @example
   * Create
   */
  jobType?: string;
  /**
   * @remarks
   * The status of the asynchronous task. Valid values:
   * 
   * *   **Success**
   * *   **Fail**
   * *   **Cancel**
   * *   **Running**
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
   * The real-time status information of the asynchronous task.
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

