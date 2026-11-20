// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableExecuteStatementResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of the operation, where `true` indicates success and `false` indicates failure.
   */
  data?: boolean;
  /**
   * @remarks
   * The error code returned if the request fails.
   * 
   * @example
   * InvalidParameterValue
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * 错误信息示例
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
   * The request ID.
   * 
   * @example
   * E3F4B2A7-1234-5678-9ABC-DEF012345678
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
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

