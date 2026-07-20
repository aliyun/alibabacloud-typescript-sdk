// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddressGetResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The redirect URL.
   * 
   * @example
   * https://trip-hisv.taobao.com/ding/trustLogin.htm?********aff8-2c2e58da659b
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddressGetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * The response data.
   */
  module?: AddressGetResponseBodyModule;
  /**
   * @remarks
   * The unique identifier of this request.
   * 
   * @example
   * 407543AF-****-****-****-9D1AB7218B27
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Use this parameter to determine the result of the call.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The global trace identifier of the request, typically used for troubleshooting.
   * 
   * @example
   * 210bcc3a********d33d7
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
      module: AddressGetResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

