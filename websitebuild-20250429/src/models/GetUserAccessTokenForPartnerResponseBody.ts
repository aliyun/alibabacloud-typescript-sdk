// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserAccessTokenForPartnerResponseBodyModule extends $dara.Model {
  tokenValue?: string;
  static names(): { [key: string]: string } {
    return {
      tokenValue: 'TokenValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tokenValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserAccessTokenForPartnerResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  errorCode?: string;
  module?: GetUserAccessTokenForPartnerResponseBodyModule;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6C6B99AC-39EC-5350-874C-204128C905E6
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      module: 'Module',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      module: GetUserAccessTokenForPartnerResponseBodyModule,
      requestId: 'string',
      success: 'string',
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

