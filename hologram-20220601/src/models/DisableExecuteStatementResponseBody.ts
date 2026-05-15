// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableExecuteStatementResponseBody extends $dara.Model {
  data?: boolean;
  /**
   * @example
   * InvalidParameterValue
   */
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: string;
  /**
   * @example
   * E3F4B2A7-1234-5678-9ABC-DEF012345678
   */
  requestId?: string;
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

