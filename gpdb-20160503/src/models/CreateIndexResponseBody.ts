// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIndexResponseBody extends $dara.Model {
  /**
   * @remarks
   * The task ID, which is used to query the task status or cancel the task.
   * 
   * @example
   * 231460f8-75dc-405e-a669-0c5204887e91
   */
  jobId?: string;
  /**
   * @remarks
   * The detailed information returned by the operation.
   * 
   * @example
   * Successfully create job
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
   * - **success**: The operation was successful.
   * - **fail**: The operation failed.
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      message: 'string',
      requestId: 'string',
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

