// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUploadDocumentJobResponseBodyJob extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the operation is complete.
   * 
   * @example
   * false
   */
  completed?: boolean;
  /**
   * @remarks
   * The time when the job was created.
   * 
   * @example
   * 2024-01-08 16:52:04.864664
   */
  createTime?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Failed to connect database.
   */
  error?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InternalError
   */
  errorCode?: string;
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
   * The progress of the document upload job. Unit: %. A value of 100 indicates that the job is complete.
   * 
   * @example
   * 20
   */
  progress?: number;
  /**
   * @remarks
   * The status of the job. Valid values: Valid values:
   * 
   * *   Success
   * *   Failed (See the Error parameter for failure reasons.)
   * *   Cancelling
   * *   Cancelled
   * *   Start
   * *   Running
   * *   Pending
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The time when the job was updated.
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
      errorCode: 'ErrorCode',
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
      errorCode: 'string',
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

