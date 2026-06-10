// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMiniAppAuthUrlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * authorized address
   * 
   * @example
   * https://nschiper.oneclick.accounts.logi.com/identity/oauth2/token
   */
  authUrl?: string;
  static names(): { [key: string]: string } {
    return {
      authUrl: 'AuthUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMiniAppAuthUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * Result of the request.
   */
  data?: GetMiniAppAuthUrlResponseBodyData;
  /**
   * @remarks
   * request ID
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
      data: GetMiniAppAuthUrlResponseBodyData,
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

