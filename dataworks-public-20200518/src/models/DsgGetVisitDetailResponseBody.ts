// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgGetVisitDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial. This field is returned only when RAM verification fails.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The details returned after the DeleteQualityEntity operation is called.
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
   * param error
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
   * The request ID. Used to locate logs and troubleshoot issues.
   * 
   * @example
   * 58D5334A-B013-430E
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

