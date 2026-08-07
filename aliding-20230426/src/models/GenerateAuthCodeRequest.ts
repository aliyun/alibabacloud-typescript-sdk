// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateAuthCodeRequestTenantContext extends $dara.Model {
  /**
   * @example
   * xxxxxx
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAuthCodeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ali-qwenwork
   */
  bucAppName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * placeholder-sso-ticket
   */
  ssoTicket?: string;
  tenantContext?: GenerateAuthCodeRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://example.com/oauth/callback
   */
  validRedirectUri?: string;
  static names(): { [key: string]: string } {
    return {
      bucAppName: 'BucAppName',
      ssoTicket: 'SsoTicket',
      tenantContext: 'TenantContext',
      validRedirectUri: 'ValidRedirectUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucAppName: 'string',
      ssoTicket: 'string',
      tenantContext: GenerateAuthCodeRequestTenantContext,
      validRedirectUri: 'string',
    };
  }

  validate() {
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

