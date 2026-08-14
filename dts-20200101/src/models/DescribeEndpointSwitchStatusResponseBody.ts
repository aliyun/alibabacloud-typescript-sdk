// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEndpointSwitchStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned when the call fails.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned when the call fails.
   * 
   * @example
   * The request processing has failed due to some unknown error.
   */
  errMessage?: string;
  /**
   * @remarks
   * This parameter is discontinued.
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
   * - **NotStarted**: not started.
   * - **Initializing**: initializing.
   * - **Switching**: switching.
   * - **Failed**: failed.
   * - **Finished**: succeeded.
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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

