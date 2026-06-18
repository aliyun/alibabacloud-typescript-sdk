// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LlmFullDuplexCallOperateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial. This parameter is returned only when RAM authentication fails.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code. A value of Success indicates that the request was successful.
   * 
   * @example
   * 示例值示例值
   */
  code?: string;
  /**
   * @remarks
   * The result of the command execution. Valid values:
   * - **true**: The command was executed.
   * - **false**: The command failed to be executed.
   * 
   * @example
   * false
   */
  data?: boolean;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * 示例值示例值示例值
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 示例值示例值示例值
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: The call was successful.
   * - **false**: The call failed.
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

