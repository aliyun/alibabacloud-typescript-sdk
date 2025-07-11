// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlowUnbindPhoneResponseBody extends $dara.Model {
  /**
   * @remarks
   * Access denied details, this field is returned only when RAM verification fails.
   * 
   * @example
   * 无
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Request status code.
   * 
   * @example
   * 示例值示例值
   */
  code?: string;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * 示例值示例值示例值
   */
  message?: string;
  /**
   * @remarks
   * Request result data.
   * 
   * @example
   * false
   */
  model?: boolean;
  /**
   * @remarks
   * Whether the operation was successful. Values: true: success; false: failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      model: 'boolean',
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

