// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAiCallTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reason for access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The update result. Valid values:
   * 
   * - **true**: Updated.
   * 
   * - **false**: Failed to update.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The error message. This parameter is returned only when an exception occurs.
   * 
   * @example
   * Invalid parameter
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FCD94A7F-316D-54D1-9BFC-814006CB1C34
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful. Valid values:
   * - **true**: Successful.
   * - **false**: Failed.
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: 'boolean',
      message: 'string',
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

