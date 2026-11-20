// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableExecuteStatementResponseBody extends $dara.Model {
  /**
   * @remarks
   * Valid values: true: Successful. false: Failed.
   */
  data?: boolean;
  /**
   * @remarks
   * **The error code. This parameter is empty if the request is successful.**
   * 
   * @example
   * InvalidParameterValue
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message. This parameter is empty if the request is successful.
   * 
   * @example
   * Invalid parameter value.
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
   * **The request ID.**
   * 
   * @example
   * E3F4B2A7-1234-5678-9ABC-DEF012345678
   */
  requestId?: string;
  /**
   * @remarks
   * **Indicates whether the request is successful.**
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

