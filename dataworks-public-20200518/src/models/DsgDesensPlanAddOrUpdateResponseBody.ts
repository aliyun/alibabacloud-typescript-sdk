// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgDesensPlanAddOrUpdateResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the add or update operation was successful.
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
   * 1029030003
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
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID. You can use the ID to trace logs and troubleshoot issues.
   * 
   * @example
   * 102400001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. A value of `true` indicates that the request was successful. A value of `false` indicates that the request failed.
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

