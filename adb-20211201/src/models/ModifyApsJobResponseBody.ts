// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApsJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * aps-bj1xxxxxx
   */
  apsJobId?: string;
  /**
   * @remarks
   * The status code. A value of 200 indicates success.
   * 
   * @example
   * InvalidInput
   */
  code?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Success
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned when the call fails.
   * 
   * @example
   * OK
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code returned. A value of 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message about the call result. Valid values:
   * - **Success**: The request is normal. 
   * - Specific error message: The request is abnormal.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******-3EEC-******-9F06-******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: Successful.
   * - **false**: Failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      apsJobId: 'ApsJobId',
      code: 'Code',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apsJobId: 'string',
      code: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

