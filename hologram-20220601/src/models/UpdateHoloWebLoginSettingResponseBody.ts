// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHoloWebLoginSettingResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values: true (successful) and false (failed).
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Internal server error.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CB13FFDD-2DF8-5396-A848-2D6A31245B6D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values: true (successful) and false (failed).
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'string',
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

