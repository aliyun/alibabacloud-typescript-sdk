// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportImageResponseBodyJob extends $dara.Model {
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
   * The error message returned if the operation is abnormal or fails.
   * 
   * @example
   * Job.Canceled
   */
  error?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * b1748ca6-6b55-49f4-a6d4-2d694a9f3693
   */
  jobId?: string;
  /**
   * @remarks
   * The progress of the task. Unit: percent (%).
   * 
   * @example
   * 100
   */
  process?: number;
  /**
   * @remarks
   * The response returned after the operation succeeds.
   * 
   * @example
   * success
   */
  response?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   running
   * *   cancel
   * *   fail
   * *   success
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The type of the task operation. Valid values:
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
      process: 'Process',
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
      process: 'number',
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

export class ExportImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the asynchronous task returned.
   */
  job?: ExportImageResponseBodyJob;
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
      job: ExportImageResponseBodyJob,
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

