// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsureOrderUrlDetailResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  message?: string;
  /**
   * @example
   * https://siopuat.mingya.com.cn/siop-fliggy/index.html#/list?token=fR4iOOZWgG
   */
  module?: string;
  /**
   * @example
   * 210bc59616861088185764700d7589
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 213e212c16975080875814628effac
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

