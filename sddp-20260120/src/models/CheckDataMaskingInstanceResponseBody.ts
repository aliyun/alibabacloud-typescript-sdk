// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckDataMaskingInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance check result code. A value of Success indicates that the check is passed. For other values, handle them based on ErrorMessage.
   * 
   * @example
   * Success
   */
  errorCode?: string;
  /**
   * @remarks
   * The instance check result description. If the check fails, the specific cause is returned.
   * 
   * @example
   * The instance is not in the running state
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID. You can use this ID to locate the API call.
   * 
   * @example
   * 7C6D8E9F-1234-5678-ABCD-0123456789AB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

