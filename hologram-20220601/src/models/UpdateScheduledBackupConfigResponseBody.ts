// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateScheduledBackupConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values:
   * - true: The operation is successful.
   * - false: The operation fails.
   * 
   * @example
   * True
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
   * null
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
   * 69221013-D303-5046-91A7-A0BE2BC2E7D7
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * True
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

