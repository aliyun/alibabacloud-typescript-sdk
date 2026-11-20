// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExecuteStatementEnabledResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether SQL execution through OpenAPI is allowed (`true`) or not (`false`).
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * - The error code that is returned if the request fails (when `success` is `false`).
   * 
   * - This parameter is empty if the request is successful (when `success` is `true`).
   * 
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @remarks
   * - The error message that is returned if the request fails (when `success` is `false`).
   * 
   * - This parameter is empty if the request is successful (when `success` is `true`).
   * 
   * @example
   * ok
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
   * 2C2ECDC1-FBAD-14A5-AA4A-96BC787FBDBC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
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

