// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlowBindPhoneResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of access denial; this field is returned only when RAM verification fails.
   * 
   * @example
   * 无
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Status code.
   * 
   * @example
   * 示例值示例值
   */
  code?: string;
  /**
   * @remarks
   * Error description message.
   * 
   * @example
   * 示例值示例值
   */
  message?: string;
  /**
   * @remarks
   * Return result.
   * 
   * @example
   * false
   */
  model?: boolean;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 示例值示例值示例值
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Values: true: success; false: failure.
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
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      model: 'boolean',
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

