// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadMarketingPreferenceRequest extends $dara.Model {
  /**
   * @example
   * /
   */
  acceptLanguage?: string;
  /**
   * @example
   * /
   */
  appName?: string;
  /**
   * @example
   * /
   */
  bizName?: string;
  /**
   * @example
   * /
   */
  callerProtocol?: string;
  /**
   * @example
   * /
   */
  clientSource?: string;
  /**
   * @example
   * 0
   */
  contactId?: number;
  /**
   * @example
   * /
   */
  cookies?: string;
  /**
   * @example
   * /
   */
  srcUrl?: string;
  /**
   * @example
   * /
   */
  tenantCode?: string;
  /**
   * @example
   * /
   */
  uidType?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appName: 'AppName',
      bizName: 'BizName',
      callerProtocol: 'CallerProtocol',
      clientSource: 'ClientSource',
      contactId: 'ContactId',
      cookies: 'Cookies',
      srcUrl: 'SrcUrl',
      tenantCode: 'TenantCode',
      uidType: 'UidType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appName: 'string',
      bizName: 'string',
      callerProtocol: 'string',
      clientSource: 'string',
      contactId: 'number',
      cookies: 'string',
      srcUrl: 'string',
      tenantCode: 'string',
      uidType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

