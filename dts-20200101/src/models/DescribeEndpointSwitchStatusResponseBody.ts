// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEndpointSwitchStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the call fails.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the call fails.
   * 
   * @example
   * The request processing has failed due to some unknown error.
   */
  errMessage?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 400
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0DD6B201-604B-4CAB-B6A8-4B2953B5****
   */
  requestId?: string;
  /**
   * @remarks
   * The execution status of the task. Valid values:
   * 
   * - **NotStarted**: The task is not started.
   * - **Initializing**: The task is being initialized.
   * - **Switching**: The task is being switched.
   * - **Failed**: The task failed.
   * - **Finished**: The task is completed.
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      errorMessage: 'string',
      requestId: 'string',
      status: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

