// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMarketingPreferenceRequest extends $dara.Model {
  /**
   * @remarks
   * The language.
   * 
   * @example
   * /
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * Specifies whether to allow notifications.
   * 
   * @example
   * true
   */
  allowMarketing?: boolean;
  /**
   * @remarks
   * The application name of the caller.
   * 
   * @example
   * /
   */
  appName?: string;
  /**
   * @remarks
   * The business line of the caller.
   * 
   * @example
   * /
   */
  bizName?: string;
  /**
   * @remarks
   * The request protocol type.
   * 
   * @example
   * /
   */
  callerProtocol?: string;
  /**
   * @remarks
   * The source of the operation terminal.
   * 
   * @example
   * /
   */
  clientSource?: string;
  /**
   * @remarks
   * webhook id
   * 
   * @example
   * 0
   */
  contactId?: number;
  /**
   * @remarks
   * The cookies of the user.
   * 
   * @example
   * /
   */
  cookies?: string;
  /**
   * @remarks
   * The URL of the source page.
   * 
   * @example
   * /
   */
  srcUrl?: string;
  /**
   * @remarks
   * The tenant information.
   * 
   * @example
   * /
   */
  tenantCode?: string;
  /**
   * @remarks
   * The user type.
   * 
   * @example
   * /
   */
  uidType?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      allowMarketing: 'AllowMarketing',
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
      allowMarketing: 'boolean',
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

