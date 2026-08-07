// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateAuthCodeShrinkRequest extends $dara.Model {
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
  tenantContextShrink?: string;
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
      tenantContextShrink: 'TenantContext',
      validRedirectUri: 'ValidRedirectUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucAppName: 'string',
      ssoTicket: 'string',
      tenantContextShrink: 'string',
      validRedirectUri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

