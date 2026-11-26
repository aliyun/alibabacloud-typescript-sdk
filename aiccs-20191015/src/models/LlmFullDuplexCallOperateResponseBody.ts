// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LlmFullDuplexCallOperateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial. This field is returned only when RAM authentication fails.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code. Success indicates that the request is successful.
   * 
   * @example
   * Sample value
   */
  code?: string;
  /**
   * @remarks
   * The command execution result.
   * - **true**: The command is executed successfully.
   * - **false**: The command execution fails.
   * 
   * @example
   * false
   */
  data?: boolean;
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * Sample value
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * Sample value
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API operation is called successfully. Valid values:
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

