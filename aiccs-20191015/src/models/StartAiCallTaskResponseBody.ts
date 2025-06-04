// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartAiCallTaskResponseBody extends $dara.Model {
  /**
   * @example
   * Access Denied
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * 示例值
   */
  code?: string;
  /**
   * @example
   * false
   */
  data?: boolean;
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  /**
   * @example
   * 58A32FFF-86EE-5CF0-B365-97E8C574C7F4
   */
  requestId?: string;
  /**
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

