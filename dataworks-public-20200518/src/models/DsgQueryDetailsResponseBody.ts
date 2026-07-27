// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgQueryDetailsResponseBody extends $dara.Model {
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
   * The operation result. Valid values:
   * - true: The operation was successful.
   * - false: The operation failed.
   * 
   * @example
   * select a;
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
   * 1031203110005
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
   * The request ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * C99E2BE6-9DEA-5C2E-8F51-1DDCFEADE490
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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

