// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCreateIndexJobResponseBodyJob extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the operation is completed.
   * 
   * @example
   * false
   */
  completed?: boolean;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2024-01-08 16:52:04.864664
   */
  createTime?: string;
  /**
   * @remarks
   * The error message returned when the current operation encounters an exception or fails.
   * 
   * @example
   * Failed to connect database.
   */
  error?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 231460f8-75dc-405e-a669-0c5204887e91
   */
  id?: string;
  /**
   * @remarks
   * The creation progress. This value is a percentage, and a value of 100 indicates that the task is completed.
   * 
   * >- Only AnalyticDB for PostgreSQL 7.0 instances support progress updates.
   * 
   * @example
   * 20
   */
  progress?: number;
  /**
   * @remarks
   * The task status. Valid values:
   * - **Success**: Successful.
   * - **Failed**: Failed. You can check the Error field for the cause of the failure.
   * - **Cancelled**: Canceled.
   * - **Running**: Running.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The time when the task was updated.
   * 
   * @example
   * 2024-01-08 16:53:04.864664
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      completed: 'Completed',
      createTime: 'CreateTime',
      error: 'Error',
      id: 'Id',
      progress: 'Progress',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completed: 'boolean',
      createTime: 'string',
      error: 'string',
      id: 'string',
      progress: 'number',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCreateIndexJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the index creation task.
   */
  job?: DescribeCreateIndexJobResponseBodyJob;
  /**
   * @remarks
   * The detailed information returned by the API operation.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The execution status of the API operation. Valid values:
   * - **success**: Successful.
   * - **fail**: Failed.
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      job: 'Job',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      job: DescribeCreateIndexJobResponseBodyJob,
      message: 'string',
      requestId: 'string',
      status: 'string',
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

