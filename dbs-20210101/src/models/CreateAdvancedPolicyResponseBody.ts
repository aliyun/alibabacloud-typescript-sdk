// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAdvancedPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the advanced backup policy takes effect. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * Success
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * The specified parameter %s value is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * instanceName can not be empty.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1EFBAC73-4A72-5AD0-BE27-932491FCB848
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      errCode: 'string',
      errMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

