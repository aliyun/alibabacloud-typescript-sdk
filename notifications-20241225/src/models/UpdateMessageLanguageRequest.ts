// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMessageLanguageRequest extends $dara.Model {
  /**
   * @remarks
   * Ignore. This parameter does not need to be specified. The page language.
   * 
   * @example
   * /
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * Ignore. This parameter does not need to be specified. The application name of the requester.
   * 
   * @example
   * /
   */
  appName?: string;
  /**
   * @remarks
   * Ignore. This parameter does not need to be specified. The business line of the requester.
   * 
   * @example
   * /
   */
  bizName?: string;
  /**
   * @remarks
   * Ignore. This parameter does not need to be specified. The request protocol type.
   * 
   * @example
   * /
   */
  callerProtocol?: string;
  /**
   * @remarks
   * Ignore. This parameter does not need to be specified. The operation terminal source.
   * 
   * @example
   * /
   */
  clientSource?: string;
  /**
   * @remarks
   * Ignore. This parameter does not need to be specified. The user cookies.
   * 
   * @example
   * /
   */
  cookies?: string;
  /**
   * @remarks
   * The message language. This parameter is required.
   * 
   * @example
   * zh-CN
   */
  preferLang?: string;
  /**
   * @remarks
   * Ignore. This parameter does not need to be specified. The source page URL.
   * 
   * @example
   * /
   */
  srcUrl?: string;
  /**
   * @remarks
   * Ignore. This parameter does not need to be specified. The tenant information.
   * 
   * @example
   * /
   */
  tenantCode?: string;
  /**
   * @remarks
   * Ignore. This parameter does not need to be specified. The user type.
   * 
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
      cookies: 'Cookies',
      preferLang: 'PreferLang',
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
      cookies: 'string',
      preferLang: 'string',
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

