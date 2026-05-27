// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLargeModelResponseBody extends $dara.Model {
  /**
   * @example
   * Access Denied
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * 示例值示例值示例值
   */
  message?: string;
  /**
   * @example
   * 示例值示例值
   */
  requestId?: string;
  /**
   * @example
   * true
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

