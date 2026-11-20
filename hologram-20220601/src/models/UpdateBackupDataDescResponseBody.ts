// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBackupDataDescResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
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
   * 404
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
   * 87060182-4B69-5C3D-B3A1-A944D20138A7
   */
  requestId?: string;
  /**
   * @remarks
   * The request result.
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

