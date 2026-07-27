// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgGetVisitStatResponseBody extends $dara.Model {
  /**
   * @remarks
   * The authentication error details.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The details of the file.
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
   * Invalid.Tenant.ConnectionNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
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
   * 952795279527ab****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
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

