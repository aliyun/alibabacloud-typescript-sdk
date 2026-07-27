// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgQuerySensResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * 1234
   */
  data?: any;
  /**
   * @remarks
   * The error code. The value is the same as ErrorCode.
   * 
   * @example
   * 400
   */
  dynamicErrorCode?: string;
  /**
   * @remarks
   * The error message. The value is the same as ErrorMessage.
   * 
   * @example
   * Missing parameter
   */
  dynamicErrorMessage?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 400
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Missing parameter
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID. It is a unique identifier for the request.
   * 
   * @example
   * 900000001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - true: successful.
   * - false: failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      dynamicErrorCode: 'DynamicErrorCode',
      dynamicErrorMessage: 'DynamicErrorMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      dynamicErrorCode: 'string',
      dynamicErrorMessage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
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

