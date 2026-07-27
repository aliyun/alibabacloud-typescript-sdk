// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgQueryRowDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial. This field is returned only when RAM authentication fails.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Indicates whether the deletion is successful.
   * 
   * @example
   * {}
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
   * 401
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The connection does not exist.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 10000001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the workspace information is queried successfully.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
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
      accessDeniedDetail: 'string',
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

