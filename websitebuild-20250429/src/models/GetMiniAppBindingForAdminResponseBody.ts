// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMiniAppBindingForAdminResponseBodyData extends $dara.Model {
  /**
   * @example
   * AUTHORIZED
   */
  authStatus?: string;
  /**
   * @example
   * WS20250801004817000002
   */
  bizId?: string;
  /**
   * @example
   * xxxx
   */
  platformAppid?: string;
  static names(): { [key: string]: string } {
    return {
      authStatus: 'AuthStatus',
      bizId: 'BizId',
      platformAppid: 'PlatformAppid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authStatus: 'string',
      bizId: 'string',
      platformAppid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMiniAppBindingForAdminResponseBody extends $dara.Model {
  data?: GetMiniAppBindingForAdminResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6C6B99AC-39EC-5350-874C-204128C905E6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMiniAppBindingForAdminResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

