// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAiCallTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The reason why access was denied.
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
   * Indicates whether the task was updated successfully. Valid values:
   * 
   * - **true**: The update is successful.
   * 
   * - **false**: The update failed.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The error message that is returned when an error occurs.
   * 
   * @example
   * 参数不合法
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
   * Indicates whether the API call was successful. Valid values:
   * 
   * - **true**: Successful.
   * 
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

