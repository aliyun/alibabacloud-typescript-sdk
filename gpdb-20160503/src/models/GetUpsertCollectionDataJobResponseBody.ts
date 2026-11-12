// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUpsertCollectionDataJobResponseBodyJob extends $dara.Model {
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
   * The error message returned when the current operation is abnormal or fails.
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
   * The upload progress. The value indicates the number of data records that have been uploaded.
   * 
   * @example
   * 1600
   */
  progress?: number;
  /**
   * @remarks
   * The task status. Valid values:
   * > - Success: The task is successful.
   * > - Failed: The task fails. You can view the Error field for the cause of the failure.
   * > - Cancelling: The task is being canceled.
   * > - Cancelled: The task is canceled.
   * > - Start: The task is started.
   * > - Running: The task is running.
   * 
   * @example
   * Success
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

export class GetUpsertCollectionDataJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the task for uploading vector data.
   */
  job?: GetUpsertCollectionDataJobResponseBodyJob;
  /**
   * @remarks
   * The returned message.
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
   * The status of the operation. Valid values:
   * - **success**: The operation is successful.
   * - **fail**: The operation fails.
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
      job: GetUpsertCollectionDataJobResponseBodyJob,
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

